import React, { useState, useEffect }  from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../css/body.css';

import superMarioMakerExtended from '../fonts/super-mario-maker-extended.ttf';
import getLevels from '../containers/methods';
import mario from '../images/mario.png';
import bulletBill from '../images/bulletbill.png';
import rightFacingParaBeetle from '../images/rightFacingParaBeetle.png';
import luigi from '../images/luigi.png';
import thwomp from '../images/thwomp.png';


const Body = () => {
    const theme = createTheme({
        status: {
            danger: '#e53e3e',
        },
        palette: {
            primary: {
            main: '#D42D26'
            },
            neutral: {
                main: '#000000',
                contrastText: '#000',
            },
            typography:{
                fontFamily: [
                    'Super-Mario-Maker-Extended', 
                    'sans-serif'
                ]
            },
            components: {
                MuiCssBaseline: {
                    styleOverrides: `
                        @font-face {
                        font-family: 'Super-Mario-Maker-Extended';
                        font-style: normal;
                        font-display: swap;
                        font-weight: 400;
                        src: local('Super-Mario-Maker-Extended'), local('Super-Mario-Maker-Extended'), url(${superMarioMakerExtended}) format('ttf');
                        unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
                        }
                    `,
                },
            },
        }
        });

        const Item = styled(Paper)(({ theme }) => ({
            backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            ...theme.typography.body2,
            padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        }));



    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState([]);
    const handleChange = (event) => {
    setSearchText(event.target.value);
    };

    const handleSearchResults = (resp) => {
        setPageCount(Math.ceil(resp.data.length / 20));
        let resultsArr = [];
        let n = 0;
        let b = 0
        resultsArr[b] = [];
        for(let i = 0; i < resp.data.length; i++){
            if(n < 19){
                n++;
                resultsArr[b].push(resp.data[i]);
            }else{
                resultsArr[b].push(resp.data[i]);
                n = 0;
                b = b + 1;
                resultsArr[b] = [];
            }
        }
        setSearchResults(resultsArr)
        setCurrentPage(resultsArr[pageNumber])
    };

    const handleSearch = (text) => {
        getLevels(text, handleSearchResults);
    };

    const handlePageChange = (event, value) => {
        setPageNumber(value);
        setCurrentPage(searchResults[value - 1]);
    };

    const items = currentPage.map(i => {
    return  <Grid key={i.id} item>
                <Paper
                    sx={{
                    height: 300,
                    width: 300,
                    backgroundColor: "#FCF5D9"
                    }}
                >
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Item>xs=8</Item>
                            </Grid>
                            <Grid item xs={4}>
                                <Item>xs=4</Item>
                            </Grid>
                                <Grid item xs={4}>
                            <Item>xs=4</Item>
                            </Grid>
                            <Grid item xs={8}>
                                <Item>xs=8</Item>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Grid>
    });   

    return (
        <ThemeProvider theme={theme}>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                className="formBox"
            >
                <TextField 
                    id="filled-basic" 
                    label="Search" 
                    variant="filled" 
                    value={searchText}
                    onChange={handleChange}
                    className="textField"
                    color="neutral"
                />
            </Box>
            <Box
                className="buttonBox"
            >
                <Button 
                    color="primary"
                    variant="contained"
                    sx={{ fontFamily: "Super-Mario-Maker-Extended" }}
                    onClick={() => {
                        handleSearch(searchText)
                    }}
                >
                    Let's a go!
                </Button>
            </Box>
            <img className="bulletBills bulletBillOne" src={bulletBill} alt="Bullet Bill" />
            <img className="bulletBills bulletBillTwo" src={bulletBill} alt="Bullet Bill" />
            <img className="paraBeetles paraBeetleOne" src={rightFacingParaBeetle} alt="Para Beetle" />
            {/* <img className="thwomps thwompOne" src={thwomp} alt="Thwomp" /> */}
            {searchResults.length > 0 ? 
                <React.Fragment>
                    <Container maxWidth="lg">
                        <Box 
                            sx={{ bgcolor: 'transparent', height: '100vh' }}
                            className="infoCard"
                        >
                            <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                                <Grid item xs={12}>
                                    <Grid container justifyContent="center" spacing={3}>
                                    {items}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                        {pageCount > 1 ?
                        <Pagination 
                            count={pageCount} 
                            variant="outlined" 
                            color="primary" 
                            onChange={handlePageChange}
                            className="paginator"
                            sx={{ fontFamily: "Super-Mario-Maker-Extended" }}
                        />
                        :
                        <div />
                        }
                    </Container>
                </React.Fragment>
                :
                <div />
            }
        <img className="mario" src={mario} alt="Mario" />
        <img className="luigi" src={luigi} alt="Luigi" />
        </ThemeProvider>
        
    )
}

export default Body;
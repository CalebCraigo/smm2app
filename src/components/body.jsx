import React, { useState, useEffect }  from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';

import getLevels from '../containers/methods';

const Body = () => {
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState([]);
    const handleChange = (event) => {
    setSearchText(event.target.value);
    };

    const handleSearchResults = (resp) => {
        console.log("resp length", resp.data.length);
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
                console.log("b ", b);
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
                    height: 140,
                    width: 100,
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                    }}
                >
                    <p>{i.course.header.title}</p>
                </Paper>
            </Grid>
    });   

    return (
        <React.Fragment>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField 
                    id="outlined-basic" 
                    label="Search" 
                    variant="outlined" 
                    value={searchText}
                    onChange={handleChange}
                />
            </Box>
            <Button 
                variant="contained"
                onClick={() => {
                    handleSearch(searchText)
                }}
            >
                Let's a go!
            </Button>
            {searchResults.length > 0 ? 
                <React.Fragment>
                    <Container maxWidth="sm">
                        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
                            <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                                <Grid item xs={12}>
                                    <Grid container justifyContent="center" spacing={3}>
                                    {items}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                        <Pagination count={pageCount} variant="outlined" color="primary" onChange={handlePageChange}/>
                    </Container>
                </React.Fragment>
                :
                <div />
            }
        </React.Fragment>
    )
}

export default Body;
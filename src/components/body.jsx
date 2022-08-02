import React, { useState, useEffect }  from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

import getLevels from '../containers/methods';

const Body = () => {
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const handleChange = (event) => {
    setSearchText(event.target.value);
    };

    const handleSearchResults = (resp) => {
        setSearchResults(resp.data);
        console.log("resp.data ", resp.data)
    };

    const handleSearch = (text) => {
        getLevels(text, handleSearchResults);
    };

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
                <Container maxWidth="sm">
                    <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
                        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                            <Grid item xs={12}>
                                <Grid container justifyContent="center" spacing={3}>
                                {searchResults.map((value) => (
                                    <Grid key={value.id} item>
                                    <Paper
                                        sx={{
                                        height: 140,
                                        width: 100,
                                        backgroundColor: (theme) =>
                                            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                        }}
                                    >
                                        <p>{value.course.header.title}</p>
                                    </Paper>
                                    <Paper />
                                    </Grid>
                                ))}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
                :
                <div />
            }
        </React.Fragment>
    )
}

export default Body;
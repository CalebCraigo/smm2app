import React, { useState, useEffect }  from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Body = () => {
    const [searchText, setSearchText] = React.useState('');
    const handleChange = (event) => {
    setSearchText(event.target.value);
    };

    const handleSearch = (text) => {
        
    }

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
        </React.Fragment>
    )
}

export default Body;
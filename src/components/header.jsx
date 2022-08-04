import React, { useState, useEffect }  from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Check from '@mui/icons-material/Check';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import superMarioMakerExtended from '../fonts/super-mario-maker-extended.ttf';
import mariopixelhead from '../images/mariopixelhead.png';
import '../css/header.css';

const Header = () => {

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#D42D26'
    },
    neutral: {
        main: '#64748B',
        contrastText: '#fff',
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

const [menuIsActive, setMenuIsActive] = useState(false);

const handleMenuClick = () => {
    setMenuIsActive(!menuIsActive);
}

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }} color="primary">
                <AppBar position="static">
                    <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon  onClick={handleMenuClick}/>
                    </IconButton>
                    <Typography sx={{ fontFamily: "Super-Mario-Maker-Extended" }} variant="h6" color="inherit" component="div">
                        Super Mario Maker Index
                    </Typography>
                    </Toolbar>
                </AppBar>
                {menuIsActive ? 
                <Paper sx={{width: 225 }}>
                    <MenuList>
                        <MenuItem>
                            <ListItemText inset>Super Mario Maker</ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <img className="marioPixelHead" src={mariopixelhead} alt="Mario Pixel Head" />
                            </ListItemIcon>
                            Super Mario Maker 2
                        </MenuItem>
                    </MenuList>
                </Paper>
                :
                <div />
                }
            </Box>
        </ThemeProvider>
    )
}

export default Header;
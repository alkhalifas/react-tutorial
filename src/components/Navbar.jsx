import React, { useState, useEffect } from 'react';
import {AppBar, Button, Container, Toolbar, Typography} from '@mui/material';
import './Navbar.css'; // Import the CSS file for Navbar styles
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const Navbar = () => {
    let [username, setUsername] = useState('alkhalifas');

    useEffect(() => {
        // Your useEffect logic here
    });

    return (
        <div>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters className="navbar-toolbar">
                        <SmartDisplayIcon/>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            className="navbar-logo"
                        >
                            My Company
                        </Typography>
                        <div className="spacer"></div>
                        <Typography className="navbar-username">{username}</Typography>
                        <Button>
                            <AccountCircleIcon
                                style={{"color": "white", "fontSize":"large"}}
                            />
                        </Button>

                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
};

export default Navbar;

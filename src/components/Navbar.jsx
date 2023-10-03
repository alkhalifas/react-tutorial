import React, { useState, useEffect } from 'react';
import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Navbar.css'; // Import your custom CSS for Navbar styles

export const Navbar = () => {
    let [username, setUsername] = useState('alkhalifas');

    useEffect(() => {
        // Your useEffect logic here
    });

    return (
        <div>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar className="navbar-toolbar">
                        <div className="navbar-left">
                            <SmartDisplayIcon style={{ fontSize: 40 }} />
                            <Typography
                                variant="h6"
                                noWrap
                                component={Link}
                                to="/"
                                className="navbar-logo"
                            >
                                My Company
                            </Typography>
                        </div>

                        <div className="navbar-center">
                            <Button component={Link} to="/home" color="inherit">
                                Home
                            </Button>
                            <Button component={Link} to="/page1" color="inherit">
                                Page 1
                            </Button>
                            <Button component={Link} to="/page2" color="inherit">
                                Page 2
                            </Button>
                        </div>

                        <div className="navbar-right">
                            <Typography className="navbar-username">{username}</Typography>
                            <Button>
                                <AccountCircleIcon style={{ color: 'white', fontSize: 40 }} />
                            </Button>
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
};

export default Navbar;

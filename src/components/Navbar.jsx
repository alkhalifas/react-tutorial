import React, { useState, useEffect } from 'react';
import {AppBar, Button, Container, List, ListItem, Popover, Toolbar, Typography} from '@mui/material';
import { Link } from 'react-router-dom';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Navbar.css';

export const Navbar = () => {
    let [username, setUsername] = useState('alkhalifas');
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

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
                            <Button component={Link} to="/" color="inherit">
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
                            <Button onClick={handleMenuClick}>
                                <AccountCircleIcon style={{ color: 'white', fontSize: 40 }} />
                            </Button>
                            <Popover
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleMenuClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                            >
                                <List>
                                    <ListItem button onClick={handleMenuClose} component={Link} to="/profile">
                                        Profile
                                    </ListItem>
                                    <ListItem button onClick={handleMenuClose} component={Link} to="/settings">
                                        Settings
                                    </ListItem>
                                    <ListItem button onClick={handleMenuClose} component={Link} to="/logout">
                                        Logout
                                    </ListItem>
                                </List>
                            </Popover>
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
};

export default Navbar;

import  React, { useState , useEffect } from 'react'
import {AppBar, Container, Toolbar, Typography} from "@mui/material";

export const Navbar = () => {

    let [username, setUsername] = useState("alkhalifas");

    useEffect(() => {


    });

    return(
        <div>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>

                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'Helvetica',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            My Company
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}

export default Navbar
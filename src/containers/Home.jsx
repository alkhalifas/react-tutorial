import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardContent, Typography, Grid } from '@mui/material';

const appData = [
    { appName: 'App 1', users: 1000 },
    { appName: 'App 2', users: 1500 },
    { appName: 'App 3', users: 800 },
    { appName: 'App 4', users: 800 },
    { appName: 'App 5', users: 800 },
    { appName: 'App 6', users: 800 },
    { appName: 'App 7', users: 800 }
];

const Home = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h2>Home Page</h2>
            <Grid container spacing={2}>
                {appData.map((app, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="div" gutterBottom>
                                    {app.appName}
                                </Typography>
                                <Typography color="text.secondary">Users: {app.users}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Home;

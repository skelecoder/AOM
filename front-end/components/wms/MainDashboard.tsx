import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import { Typography } from '@material-ui/core';

const rows = [
    { id: 1, name: 'Hello', col2: 'World' },
    { id: 2, name: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, name: 'MUI', col2: 'is Amazing' },
    { id: 3, name: 'MUI', col2: 'is Amazing' },
    { id: 3, name: 'MUI', col2: 'is Amazing' },
];
const MainDashboard = () => (
    <>
        {/* Entrees */}
        <Grid item xs={12} md={4}>
            <Paper
                sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                }}
            >
                <Typography component="h3">Entrées</Typography>
                <Typography component="h1" variant={'h1'}>3</Typography>
            </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
            <Paper
                sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                }}
            >
                <Typography component="h3">Sorties</Typography>
                <Typography component="h1" variant={'h1'}>
                    4
                </Typography>
            </Paper>
        </Grid>
    </>
);

export default MainDashboard;

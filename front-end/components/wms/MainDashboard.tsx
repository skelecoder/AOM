import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';

const rows = [
    { id: 1, name: 'Hello', col2: 'World' },
    { id: 2, name: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, name: 'MUI', col2: 'is Amazing' },
    { id: 3, name: 'MUI', col2: 'is Amazing' },
    { id: 3, name: 'MUI', col2: 'is Amazing' },
];
const MainDashboard = () => (
    <>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
            <Paper
                sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                }}
            >
                <DataGrid
                    rows={rows}
                    autoPageSize
                    columns={[
                        // column definition example
                        {
                            field: 'name',
                            headerName: 'Bon de réception',
                            filterable: true,
                            width: 300,
                        },
                    ]}
                    checkboxSelection
                />
            </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
            <Paper
                sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                }}
            >
                Deposits
            </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>Orders</Paper>
        </Grid>
    </>
);

export default MainDashboard;

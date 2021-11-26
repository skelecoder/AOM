import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Dashboard from '../dashboard/Dashboard';

const Header = () => (
    <>
        <div>Amanor</div>
        <div>Amanor</div>
    </>
);
const Footer = () => <></>;

const theme = createTheme();

const rows = [
    { id: 1, name: 'Hello', col2: 'World' },
    { id: 2, name: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, name: 'MUI', col2: 'is Amazing' },
    { id: 3, name: 'MUI', col2: 'is Amazing' },
    { id: 3, name: 'MUI', col2: 'is Amazing' },
];

export const Wms = () => {
    return (
        <>
            <Dashboard />
            {/* <div style={{ height: '320px' }}>
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
            </div> */}
        </>
        // <ThemeProvider theme={theme}>
        //     <CssBaseline />
        //     <Container maxWidth="lg">
        //         <Header />
        //         <main>
        //             <Grid container spacing={4}>
        //                 <Grid item xs={12} sx={{ backgroundColor: 'grey.200' }}>
        //                     Top Line
        //                 </Grid>
        //                 <Grid item xs={12}>

        //                 </Grid>
        //             </Grid>
        //         </main>
        //     </Container>
        //     <Footer />
        // </ThemeProvider>
    );
};

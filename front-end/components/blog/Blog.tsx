import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { DataGrid } from '@mui/x-data-grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Header = () => (
    <>
        <div>Amanor</div>
        <div>Amanor</div>
    </>
);
const Footer = () => <></>;

const theme = createTheme();

export default function Blog() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header />
                <main>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sx={{ backgroundColor: 'grey.200' }}>
                            Top Line
                        </Grid>
                        <Grid item xs={12}>
                            <DataGrid
                                columns={[
                                    // column definition example
                                    {
                                        field: 'name',
                                        headerName: 'Name',
                                        editable: true,
                                        sortable: true,
                                        filterable: true,
                                    },
                                ]}
                                checkboxSelection
                                disableSelectionOnClick
                                pagination
                            />
                        </Grid>
                    </Grid>
                </main>
            </Container>
            <Footer />
        </ThemeProvider>
    );
}

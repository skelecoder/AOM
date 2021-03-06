import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import { Item } from 'lib/definitions/Item';
import { Button } from '@mui/material';

const items: Item[] = [
    {
        id: 1,
        name: 'Pose de Canalisations en béton armé classe 135 A',
        model: 'DN 300 mm',
        code: '3.2.1.a',
        unity: 'ml',
        price: 66.22,
        qty: 600,
    },
    {
        id: 2,
        name: 'Pose de Canalisations en béton armé classe 135 A',
        model: 'DN 400 mm',
        code: '3.2.1.b',
        unity: 'ml',
        price: 66.22,
        qty: 450,
    },
    {
        id: 3,
        name: 'Pose de Canalisations en béton armé classe 135 A',
        model: 'DN 500 mm',
        code: '3.2.1.c',
        unity: 'ml',
        price: 73.1,
        qty: 0,
    },
    {
        id: 4,
        name: 'Pose de Canalisations en béton armé classe 135 A',
        model: 'DN 600 mm',
        code: '3.2.1.d',
        unity: 'ml',
        price: 131.58,
        qty: 678,
    },
    {
        id: 5,
        name: 'Pose de Canalisations en béton armé classe 135 A',
        model: 'DN 800 mm',
        code: '3.2.1.e',
        unity: 'ml',
        price: 160.82,
        qty: 970,
    },
    {
        id: 6,
        name: 'Pose de Canalisations en béton armé classe 135 A',
        model: 'DN 1000 mm',
        code: '3.2.1.f',
        unity: 'ml',
        price: 204.68,
        qty: 1368,
    },
    {
        id: 7,
        name: 'Pose de Canalisations en béton armé classe 135 A',
        model: 'DN 1200 mm',
        code: '3.2.1.g',
        unity: 'ml',
        price: 219.3,
        qty: 0,
    },
];

const Stock = () => (
    <>
        {/* Chart */}
        <Grid item xs={12} md={12}>
            <Paper
                sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 600,
                }}
            >
                <Toolbar>
                    <Button variant={'outlined'} color={'success'} sx={{ mr: 2 }}>
                        Nouvelle entrée
                    </Button>
                    <Button variant={'outlined'} color={'error'}>
                        Nouvelle sortie
                    </Button>
                </Toolbar>
                <DataGrid
                    rows={items}
                    autoPageSize
                    columns={[
                        // column definition example
                        {
                            field: 'name',
                            headerName: 'Article',
                            filterable: true,
                            width: 400,
                        },
                        {
                            field: 'model',
                            headerName: 'Reference',
                            filterable: true,
                            width: 150,
                        },
                        {
                            field: 'qty',
                            headerName: 'Quantité',
                            filterable: true,
                            width: 100,
                        },
                        {
                            field: 'unity',
                            headerName: 'Unité',
                            filterable: true,
                            width: 400,
                        },
                    ]}
                    checkboxSelection
                />
            </Paper>
        </Grid>
    </>
);

export default Stock;

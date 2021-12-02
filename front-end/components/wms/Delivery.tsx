import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import { Item } from 'lib/definitions/Item';
import { Delivery as DeliveryInterface } from 'lib/definitions/Delivery';
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

const deliveries: DeliveryInterface[] = [
    {
        id: 210013,
        teamLeader: 'Hassan Laaroussi',
        siteCode: 9935,
        siteType: 'Branchement neuf',
        datetime: '25/11/2021 9:36',
        provider: 'Doukkali',
        items: [
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
        ],
        itemsCount: 2,
    },
    {
        id: 210014,
        teamLeader: 'Mohcine Senhaji',
        siteCode: 9673,
        siteType: 'Réclamation',
        datetime: '25/11/2021 9:36',
        provider: 'Melloul',
        items: [
            {
                id: 3,
                name: 'Pose de Canalisations en béton armé classe 135 A',
                model: 'DN 500 mm',
                code: '3.2.1.c',
                unity: 'ml',
                price: 73.1,
                qty: 980,
            },
            {
                id: 4,
                name: 'Pose de Canalisations en béton armé classe 135 A',
                model: 'DN 600 mm',
                code: '3.2.1.d',
                unity: 'ml',
                price: 131.58,
                qty: 560,
            },
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
                qty: 300,
            },
        ],
        itemsCount: 4,
    },
];

const Delivery = () => {
    const [selectedDelivery, setSelectedDelivery] = React.useState([]);
    return (
        <>
            {/* Chart */}
            <Grid item xs={12} md={12}>
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 560,
                    }}
                >
                    <Toolbar>
                        <Button variant={'outlined'}>Nouvelle sortie</Button>
                    </Toolbar>
                    <DataGrid
                        onRowClick={(params, event) => {
                            console.log(params);
                            setSelectedDelivery(params.row.items);
                        }}
                        rows={deliveries}
                        autoPageSize
                        columns={[
                            // column definition example
                            {
                                field: 'id',
                                headerName: 'Nº de Sortie',
                                filterable: true,
                                width: 150,
                            },
                            {
                                field: 'siteCode',
                                headerName: 'Code de chantier',
                                filterable: true,
                                width: 150,
                            },
                            {
                                field: 'siteType',
                                headerName: "Type d'opération",
                                filterable: true,
                                width: 150,
                            },
                            {
                                field: 'teamLeader',
                                headerName: "Cheff d'équipe",
                                filterable: true,
                                width: 150,
                            },
                            {
                                field: 'provider',
                                headerName: 'Fournisseur',
                                filterable: true,
                                width: 150,
                            },
                            {
                                field: 'itemsCount',
                                headerName: "Nombre d'articles",
                                filterable: true,
                                width: 150,
                            },
                            {
                                field: 'datetime',
                                headerName: 'Date et heure',
                                filterable: true,
                                width: 140,
                            },
                        ]}
                    />
                </Paper>
            </Grid>

            <Grid item xs={12}>
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 300,
                    }}
                >
                    <DataGrid
                        rows={selectedDelivery}
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
                                width: 300,
                            },
                        ]}
                    />
                </Paper>
            </Grid>
        </>
    );
};

export default Delivery;

import { Button, Checkbox, Dialog, DialogTitle, Grid, Paper, Typography } from '@mui/material';
import { Box, display } from '@mui/system';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PlanModal from 'components/planModal';

const Intervention = () => {
    const [selection, setSelection] = useState([]);
    //const [getRow, setGetRow] = useState([]);
    const [open, setOpen] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    let ids = [];
    const handelOpen = () => {
        setOpen(true);
    };
    const handelClose = () => {
        setOpen(false);
    };

    const handelChange = (e) => {
        if (e.target.checked) {
            ids.push(e.target.value);
            const selctedLists = rows.filter((row) => ids.includes(row.id.toString()));
            //setSelection(selctedLists);
            console.log(selctedLists);
            console.log(ids);
            selctedLists.length == 0 ? setIsDisabled(true) : setIsDisabled(false);
        } else {
            ids = ids.filter((id) => id != e.target.value);
            const selctedLists = rows.filter((row) => ids.includes(row.id.toString()));
            //setSelection(selctedLists);
            console.log(ids);
            console.log(selctedLists);
            //selctedLists.length == 0 ? setIsDisactivated(true) : setIsDisactivated(false);
        }
    };

    const handelSelectedRow = (ids) => {
        const selectedIDs = new Set(ids);
        const selectedRows = rows.filter((row) => selectedIDs.has(row.id));
        setSelection(selectedRows);
        selectedRows.length === 0 ? setIsDisabled(true) : setIsDisabled(false);
        console.log(selectedRows);
        console.log(selectedIDs);
    };

    const rows = [
        {
            id: 1,
            col1: '001',
            col2: '17 khossafat',
            col3: 'En traitement',
            col4: '11/02/2021',
            col5: 'type1',
            col6: 'Sous-type1',
        },
        {
            id: 2,
            col1: '002',
            col2: '22 Dradeb',
            col3: 'En traitement',
            col4: '10/03/2021',
            col5: 'type2',
            col6: 'Sous-type2',
        },
        {
            id: 3,
            col1: '003',
            col2: '57 Msala',
            col3: 'Traité',
            col4: '11/02/2021',
            col5: 'type3',
            col6: 'Sous-type3',
        },
        {
            id: 4,
            col1: '004',
            col2: '65 bnimakada',
            col3: 'En traitement',
            col4: '11/02/2021',
            col5: 'type4',
            col6: 'Sous-type4',
        },
        {
            id: 5,
            col1: '005',
            col2: '9 Avril',
            col3: 'Traité',
            col4: '11/02/2022',
            col5: 'type1',
            col6: 'Sous-type1',
        },
        {
            id: 6,
            col1: '006',
            col2: 'Iberia',
            col3: 'Traité',
            col4: '05/02/2021',
            col5: 'type2',
            col6: 'Sous-type2',
        },
    ];

    const columns = [
        { field: 'col1', headerName: 'Référence', width: 200 },
        { field: 'col2', headerName: 'Addresse', width: 150 },
        { field: 'col3', headerName: 'Status', width: 100 },
        { field: 'col4', headerName: 'Date Status', width: 150 },
        { field: 'col5', headerName: 'Type', width: 100 },
        { field: 'col6', headerName: 'Sous-type', width: 100 },
    ];

    return (
        <>
            <PlanModal handelClose={handelClose} open={open} selection={selection} />

            <Typography variant="h4" sx={{ color: 'primary.main', mb: 2 }}>
                Liste des interventions
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: 1,
                    mb: 2,
                }}
            >
                <Button href="/intervention/nouvelle" variant="contained" sx={{}} disabled={!isDisabled}>
                    Nouvelle Intervention
                </Button>

                <Button variant="outlined" disabled={isDisabled}>
                    En Traitement
                </Button>
                <Button variant="outlined" disabled={isDisabled} onClick={handelOpen}>
                    Planifier
                </Button>
                <Button variant="outlined" disabled={isDisabled}>
                    Traité
                </Button>
                <Button variant="outlined" disabled={isDisabled}>
                    Valider
                </Button>
                <Button variant="outlined" disabled={isDisabled}>
                    Attachement
                </Button>
            </Box>
            <Paper
                sx={{
                    height: 'calc(100vh - 300px)',
                    display: { xs: 'none', md: 'block' },
                    '& .css-1jbbcbn-MuiDataGrid-columnHeaderTitle': {
                        color: 'primary.main',
                        fontWeight: 'bold',
                    },
                }}
            >
                <DataGrid rows={rows} columns={columns} checkboxSelection onSelectionModelChange={handelSelectedRow} />
            </Paper>
            <Paper>
                {selection.map((item, index) => (
                    <pre key={index}>{JSON.stringify(item, null, 4)}</pre>
                ))}
            </Paper>
            <Box>
                {rows.map((row) => {
                    return (
                        <Paper key={row.id} sx={{ mb: 2, p: 2, display: 'flex', alignItems: 'flex-start' }}>
                            <Checkbox value={row.id} onChange={(e) => handelChange(e)} />
                            <Box sx={{ mt: 1 }}>
                                <Typography>Reference: {row.col1}</Typography>
                                <Typography>Addresse: {row.col2}</Typography>
                                <Typography>Status: {row.col3}</Typography>
                                <Typography>Date Status: {row.col4}</Typography>
                                <Typography>Type: {row.col5}</Typography>
                                <Typography>Sous-type: {row.col6}</Typography>
                            </Box>
                        </Paper>
                    );
                })}
            </Box>
        </>
    );
};

export default Intervention;

import { Button, Checkbox,Paper, Typography, Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import JoinRightIcon from '@mui/icons-material/JoinRight';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PlanModal from 'components/planModal';
import TraitModal from 'components/traitModal';

const rows = [
    {
        id: uuidv4(),
        col1: '001',
        col2: '17 khossafat',
        col3: 'En traitement',
        col4: 'type1',
        col5: '11/02/2021',
        col6: 'Sous-type1',
    },
    {
        id: uuidv4(),
        col1: '002',
        col2: '22 Dradeb',
        col3: 'En traitement',
        col4: 'type2',
        col5: '10/03/2021',
        col6: 'Sous-type2',
    },
    {
        id: uuidv4(),
        col1: '003',
        col2: '57 Msala',
        col3: 'Traité',
        col4: 'type3',
        col5: '11/02/2021',
        col6: 'Sous-type3',
    },
    {
        id: uuidv4(),
        col1: '004',
        col2: '65 bnimakada',
        col3: 'En traitement',
        col4: 'type4',
        col5: '11/02/2021',
        col6: 'Sous-type4',
    },
    {
        id: uuidv4(),
        col1: '005',
        col2: '9 Avril',
        col3: 'Traité',
        col4: 'type1',
        col5: '11/02/2022',
        col6: 'Sous-type1',
    },
    {
        id: uuidv4(),
        col1: '006',
        col2: 'Iberia',
        col3: 'Traité',
        col4: 'type2',
        col5: '05/02/2021',
        col6: 'Sous-type2',
    },
];

const Intervention = () => {
    const [selection, setSelection] = useState([]);
    const [openPlanModal, setOpenPlanModal] = useState(false);
    const [openTraitModal, setOpenTraitModal] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const [ids, setIds] = useState([]);

    const handelOpenPlanModal = () => {
        setOpenPlanModal(true);
    };
    const handelClosePlanModal = () => {
        setOpenPlanModal(false);
    };

    const handelOpenTraitModal = () => {
        setOpenTraitModal(true);
    };
    const handelCloseTraitModal = () => {
        setOpenTraitModal(false);
    };

    const handelChange = (e) => {
        if (e.target.checked) {
            setIds([...ids, e.target.value]);
        } else {
            const newIds = ids.filter((id) => id != e.target.value);
            setIds(newIds);
        }
    };

    useEffect(() => {
        const selctedLists = rows.filter((row) => ids.includes(row.id));
        setSelection(selctedLists);
        console.log('selected list', selctedLists);
        selctedLists.length == 0 ? setIsDisabled(true) : setIsDisabled(false);

    }, [ids]);

    const handelSelectedRow = (ids) => {
        const selectedIDs = new Set(ids);
        const selectedRows = rows.filter((row) => selectedIDs.has(row.id));
        const refAndAddress = selectedRows.map((employee) => {
            let { id, col1, col2, col3, col4, col5, col6 } = employee;
            let subset = { id, col1, col2 };
            return subset;
        });
        setSelection(refAndAddress);
        refAndAddress.length === 0 ? setIsDisabled(true) : setIsDisabled(false);
    };

    const columns = [
        { field: 'col1', headerName: 'Référence', width: 200 },
        { field: 'col2', headerName: 'Addresse', width: 150 },
        { field: 'col3', headerName: 'Status', width: 100 },
        { field: 'col4', headerName: 'Type', width: 100 },
        { field: 'col5', headerName: 'Date Status', width: 150 },
        { field: 'col6', headerName: 'Sous-type', width: 100 },
    ];

    return (
        <>
            <PlanModal handelClose={handelClosePlanModal} open={openPlanModal} selection={selection} />
            <TraitModal handelClose={handelCloseTraitModal} open={openTraitModal} selection={selection} />

            <Typography variant="h4" sx={{ color: 'primary.main', mb: 2 }}>
                Liste des interventions
            </Typography>
            <Box
                sx={{
                    display: { xs: 'none', md: 'flex' },
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: 1,
                    mb: 2,
                    '& .MuiButton-root': { textTransform: 'capitalize' },
                }}
            >
                <Button href="/intervention/nouvelle" variant="contained" disabled={!isDisabled}>
                    Nouvelle Intervention
                </Button>

                <Button variant="outlined" disabled={isDisabled}>
                    En Traitement
                </Button>
                <Button variant="outlined" disabled={isDisabled} onClick={handelOpenPlanModal}>
                    Planifier
                </Button>
                <Button variant="outlined" disabled={isDisabled} onClick={handelOpenTraitModal}>
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
            {/* <Paper>
                {selection.map((item, index) => (
                    <pre key={index}>{JSON.stringify(item, null, 4)}</pre>
                ))}
            </Paper> */}
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                <Paper>
                <Typography sx={{color:'primary.main',p:2, fontWeight:'bold'}}>{ids.length} Element(s) Sélectionée(s) </Typography>
                </Paper>
                
                {rows.map((row) => {
                    return (
                        <Paper key={row.id} sx={{ mb: 2, p: 2, display: 'flex', alignItems: 'flex-start',backgroundColor:({palette})=> ids.includes(row.id) ? palette.grey[300] : ''}}>
                            <Checkbox value={row.id} onChange={handelChange} />
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
            <Box
                sx={{
                    display: { xs: 'flex', md: 'none' },
                    flexDirection:'column',         
                    gap:2,
                    position: 'fixed',
                    bottom: '0',
                    width: {xs:2/2, sm:'calc(100% - 240px)'},
                    backgroundColor: 'primary.main',
                    py:2,
                    '& .MuiButton-root': { textTransform: 'capitalize', display: 'flex', flexDirection: 'column',color:'#fff' },
                    '& .MuiButton-text':{fontSize:'11px'}
                }}
            >
                <Button href="/intervention/nouvelle" variant="contained" disabled={!isDisabled} size="large">
                    <AddCircleOutlineIcon />
                    nouvelle intervention
                </Button>
                <Box sx={{display:'flex', justifyContent:'center', alignItems: 'center'}}>
                <Button size="small" variant="text" disabled={isDisabled}>
                    <PendingOutlinedIcon />
                    en traitement
                </Button>
                <Button size="small" variant="text" disabled={isDisabled} onClick={handelOpenPlanModal}>
                    <WysiwygIcon />planifier
                </Button>
                <Button size="small" variant="text" disabled={isDisabled} onClick={handelOpenTraitModal}>
                    <LocalOfferIcon />traitées
                </Button>
                <Button size="small" variant="text" disabled={isDisabled}>
                    <CheckCircleIcon />valider
                </Button>
                <Button size="small" variant="text" disabled={isDisabled}>
                    <JoinRightIcon />attachement
                </Button>
                </Box>
            </Box>
        </>
    );
};

export default Intervention;

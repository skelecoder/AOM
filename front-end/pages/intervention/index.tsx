import { Button, Checkbox, Paper, Typography, Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import JoinRightIcon from '@mui/icons-material/JoinRight';
import { useEffect, useState } from 'react';
import axios from 'axios';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import PlanModal from 'components/planModal';
import TraitModal from 'components/traitModal';

const strapiHost = process.env.NEXT_PUBLIC_STRAPI_HOST;
const strapiPort = process.env.NEXT_PUBLIC_STRAPI_PORT;

const titles = [
    'Référence',
    'Addresse',
    'Date_Note',
    'Nature',
    'Note',
    'Ordre',
    'Ligne_de_conduite',
    'Date_de_reception',
    'Debut_des_travaux',
    'Fin_des_travaux',
    'Etat',
];

const getInterventions = () =>
    axios.get(`http://${strapiHost}:${strapiPort}/api/interventions`).then(({ data }) => data);

const Intervention = () => {
    const [selection, setSelection] = useState([]);
    const [openPlanModal, setOpenPlanModal] = useState(false);
    const [openTraitModal, setOpenTraitModal] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const [ids, setIds] = useState([]);

    const router = useRouter();

    const {
        data: { data },
    } = useQuery('interventions', getInterventions);

    const gridRows = data.map((interv) => {
        let { id, attributes } = interv;
        let editedData = {
            id,
            col1: attributes.Reference,
            col2: attributes.Addresse,
            col3: attributes.Date_de_reception,
            col4: attributes.Note,
            col5: attributes.Date_Note,
            col6: attributes.Nature,
            col7: attributes.Etat,
            col8: attributes.Ordre,
            col9: attributes.Ligne_de_conduite,
            col10: attributes.Debut_des_travaux,
            col11: attributes.Fin_des_travaux,
        };
        return editedData;
    });

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
        const selctedLists = gridRows.filter((row) => ids.includes(row.id.toString()));
        setSelection(selctedLists);
        selctedLists.length == 0 ? setIsDisabled(true) : setIsDisabled(false);
    }, [ids]);

    const handelSelectedRow = (ids) => {
        const selectedIDs = new Set(ids);
        const selectedRows = gridRows.filter((row) => selectedIDs.has(row.id));
        const refAndAddress = selectedRows.map((interv) => {
            let { id, col1, col2, col3, col4, col5, col6, col7 } = interv;
            let subset = { id, col1, col2, col7 };
            return subset;
        });
        setSelection(refAndAddress);
        refAndAddress.length === 0 ? setIsDisabled(true) : setIsDisabled(false);
    };

    const columns = [
        { field: 'col1', headerName: 'Référence', width: 150 },
        { field: 'col2', headerName: 'Addresse', width: 300 },
        { field: 'col3', headerName: 'Date de reception', width: 150 },
        { field: 'col4', headerName: 'Note', width: 80 },
        { field: 'col5', headerName: 'Date note', width: 100 },
        { field: 'col6', headerName: 'Nature', width: 100 },
        { field: 'col7', headerName: 'Etat', width: 100 },
        { field: 'col8', headerName: 'Ordre', width: 80 },
        { field: 'col9', headerName: 'Ligne de conduite', width: 150 },
        { field: 'col10', headerName: 'Debut des travaux', width: 150 },
        { field: 'col11', headerName: 'Fin des travaux', width: 150 },
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
                <NextLink href="/intervention/nouvelle" passHref>
                    <Button variant="contained" disabled={!isDisabled}>
                        Nouvelle Intervention
                    </Button>
                </NextLink>

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
                    display: { xs: 'none', md: 'flex' },
                    '& .css-1jbbcbn-MuiDataGrid-columnHeaderTitle': {
                        color: 'primary.main',
                        fontWeight: 'bold',
                    },
                }}
            >
                <Box sx={{ flexGrow: 1, height: '600px' }}>
                    <DataGrid
                        initialState={{
                            sorting: {
                              sortModel: [{ field: 'col1', sort: 'asc' }],
                            },
                          }}
                        rows={gridRows}
                        columns={columns}
                        checkboxSelection
                        onSelectionModelChange={handelSelectedRow}
                        onRowDoubleClick={(params) => router.push(`/intervention/${params.id}`)}
                    />
                </Box>
            </Paper>
            <Box sx={{ display: { xs: 'block', md: 'none' }, paddingBottom: '200px' }}>
                {ids.length != 0 && (
                    <Paper sx={{ position: 'fixed', bottom: 160, width: 2 / 2, zIndex: 55 }}>
                        <Typography sx={{ color: 'primary.main', p: 2, fontWeight: 'bold' }}>
                            {ids.length} Element(s) Sélectionée(s){' '}
                        </Typography>
                    </Paper>
                )}

                {gridRows.map((row) => {
                    return (
                        <Paper
                            key={row.id}
                            sx={{
                                mb: 2,
                                p: 2,
                                display: 'flex',
                                alignItems: 'flex-start',
                                backgroundColor: ({ palette }) =>
                                    ids.includes(row.id.toString()) ? palette.grey[300] : '',
                            }}
                        >
                            <Checkbox value={row.id} onChange={(e) => handelChange(e)} />
                            <Box sx={{ mt: 1 }}>
                                <Typography>
                                    <Typography component="span" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                                        Reference:
                                    </Typography>{' '}
                                    {row.col1}
                                </Typography>
                                <Typography>
                                    <Typography component="span" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                                        Addresse:
                                    </Typography>{' '}
                                    {row.col2}
                                </Typography>
                                <Typography>
                                    <Typography component="span" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                                        Date de reception
                                    </Typography>
                                    : {row.col3}
                                </Typography>
                                <Typography>
                                    <Typography component="span" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                                        Note:
                                    </Typography>{' '}
                                    {row.col4}
                                </Typography>
                                <Typography>
                                    <Typography component="span" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                                        Date note:
                                    </Typography>{' '}
                                    {row.col5}
                                </Typography>
                                <Typography>
                                    <Typography component="span" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                                        Nature:
                                    </Typography>{' '}
                                    {row.col6}
                                </Typography>
                                <Typography>
                                    <Typography component="span" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                                        Etat:
                                    </Typography>{' '}
                                    {row.col7}
                                </Typography>
                                <Typography>
                                    <Typography component="span" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                                        Ordre:
                                    </Typography>{' '}
                                    {row.col8}
                                </Typography>
                                <Typography>
                                    <Typography component="span" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                                        Ligne de conduite:
                                    </Typography>{' '}
                                    {row.col9}
                                </Typography>
                                <Typography>
                                    <Typography component="span" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                                        Debut des travaux:
                                    </Typography>{' '}
                                    {row.col10}
                                </Typography>
                                <Typography>
                                    <Typography component="span" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                                        Fin des travaux:
                                    </Typography>{' '}
                                    {row.col11}
                                </Typography>                                
                            </Box>
                        </Paper>
                    );
                })}
            </Box>
            <Box
                sx={{
                    display: { xs: 'flex', md: 'none' },
                    flexDirection: 'column',
                    gap: 2,
                    position: 'fixed',
                    bottom: '0',
                    width: { xs: 2 / 2, sm: 'calc(100% - 240px)' },
                    backgroundColor: 'primary.main',
                    py: 2,
                    '& .MuiButton-root': {
                        textTransform: 'capitalize',
                        display: 'flex',
                        flexDirection: 'column',
                        color: '#fff',
                    },
                    '& .MuiButton-text': { fontSize: '11px' },
                }}
            >
                <Button href="/intervention/nouvelle" variant="contained" disabled={!isDisabled} size="large">
                    <AddCircleOutlineIcon />
                    nouvelle intervention
                </Button>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Button size="small" variant="text" disabled={isDisabled}>
                        <PendingOutlinedIcon />
                        en traitement
                    </Button>
                    <Button size="small" variant="text" disabled={isDisabled} onClick={handelOpenPlanModal}>
                        <WysiwygIcon />
                        planifier
                    </Button>
                    <Button size="small" variant="text" disabled={isDisabled} onClick={handelOpenTraitModal}>
                        <LocalOfferIcon />
                        traitées
                    </Button>
                    <Button size="small" variant="text" disabled={isDisabled}>
                        <CheckCircleIcon />
                        valider
                    </Button>
                    <Button size="small" variant="text" disabled={isDisabled}>
                        <JoinRightIcon />
                        attachement
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export async function getServerSideProps() {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery('interventions', getInterventions);

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
}

export default Intervention;

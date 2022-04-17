import {
    Box,
    Button,
    Divider,
    FormControl,
    Grid,
    IconButton,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    TextField,
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { v4 as uuidv4 } from 'uuid';
import DatePicker from './datePicker';
import axios from 'axios';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { IntervState } from '../context/context';
import { useRouter } from 'next/router';

const strapiHost = process.env.NEXT_PUBLIC_STRAPI_HOST;
const strapiPort = process.env.NEXT_PUBLIC_STRAPI_PORT;

const natures = [
    'AF',
    'AFF',
    'C DO',
    'C.GRILL',
    'CGR',
    'CRF',
    'CRV',
    'RBR',
    'RGR',
    'RRF',
    'RRV',
    'RTE',
    'SBR',
    'SCO',
    'SSC',
    'SSRBR',
];
const etats = ['En instant', 'En cours', 'Traitée', 'Achevée', 'Programée'];

const IntervForm2 = ({ cancelForm2 }) => {
    const initialFValues = [
        {
            id: uuidv4(),
            Reference: '',
            Addresse: '',
            Date_Note: new Date(),
            Nature: '',
            Note: '',
            Ordre: '',
            Ligne_de_conduite: '',
            Date_de_reception: new Date(),
            Debut_des_travaux: new Date(),
            Fin_des_travaux: new Date(),
            Etat: 'En instant',
        },
    ];

    const router = useRouter();

    const [inputFields, setInputFields] = useState(initialFValues);
    const [btnPos, setBtnPos] = useState(0);
    const [btnPosMob, setBtnPosMob] = useState(0);

    const handelAddClick = () => {
        const fields = {
            id: uuidv4(),
            Reference: '',
            Addresse: '',
            Date_Note: new Date(),
            Nature: '',
            Note: '',
            Ordre: '',
            Ligne_de_conduite: '',
            Date_de_reception: new Date(),
            Debut_des_travaux: new Date(),
            Fin_des_travaux: new Date(),
            Etat: 'En instant',
        };

        const newFields = [...inputFields,fields];

        setInputFields(newFields);
        setBtnPos((prevState) => prevState + 140);
        setBtnPosMob((prevState) => prevState + 740.5);
    };

    const handleChangeInput = (id, event) => {
        const newInputFields = inputFields.map((field) => {
            if (id === field.id) {
                field[event.target.name] = event.target.value;
            }
            return field;
        });

        setInputFields(newInputFields);
    };

    const addIntervention = (interv) => {
        return axios.post(`http://${strapiHost}:${strapiPort}/api/interventions`, interv);
    };

    const { notificationState, notificationDispatch } = IntervState();

    const queryClient = useQueryClient();
    const { mutate } = useMutation(addIntervention, {
        onSuccess: () => router.push('/intervention'),
    });

    const handleSubmit = () => {
        const sentData = inputFields.map((field) => {
            let {
                id,
                Reference,
                Addresse,
                Date_Note,
                Nature,
                Note,
                Ordre,
                Ligne_de_conduite,
                Date_de_reception,
                Debut_des_travaux,
                Fin_des_travaux,
                Etat,
            } = field;
            let newField = {
                Reference,
                Addresse,
                Date_Note,
                Nature,
                Note,
                Ordre,
                Ligne_de_conduite,
                Date_de_reception,
                Debut_des_travaux,
                Fin_des_travaux,
                Etat,
            };
            return newField;
        });

        sentData.forEach((element) => {
            mutate({ data: element });
        });

        setInputFields(initialFValues);
    };

    return (
        <Paper
            sx={{
                p: 3,
                display: 'flex',
                gap: 2,
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
            }}
        >
            <form>
                {inputFields.map((inputField) => (
                    <Box key={inputField.id}>
                        <Grid container spacing={1} sx={{ mb: { xs: 4, md: 2 } }}>
                            <Grid item xs={12} md={2}>
                                <TextField
                                    label="Reference"
                                    name="Reference"
                                    value={inputField.Reference}
                                    variant="outlined"
                                    onChange={(e) => handleChangeInput(inputField.id, e)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField
                                    label="Addresse"
                                    name="Addresse"
                                    value={inputField.Addresse}
                                    variant="outlined"
                                    onChange={(e) => handleChangeInput(inputField.id, e)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} md={2}>
                                <DatePicker
                                    id={inputField.id}
                                    value={inputField.Date_de_reception}
                                    name="Date_de_reception"
                                    label="Date de reception"
                                    changeEvent={handleChangeInput}
                                />
                            </Grid>
                            <Grid item xs={12} md={2}>
                                <TextField
                                    label="Note"
                                    name="Note"
                                    type="number"
                                    value={inputField.Note}
                                    variant="outlined"
                                    onChange={(e) => handleChangeInput(inputField.id, e)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} md={2}>
                                <DatePicker
                                    id={inputField.id}
                                    value={inputField.Date_Note}
                                    name="Date_Note"
                                    label="Date note"
                                    changeEvent={handleChangeInput}
                                />
                            </Grid>
                            <Grid item xs={12} md={2}>
                                <FormControl sx={{ width: 2 / 2 }}>
                                    <InputLabel>Nature</InputLabel>
                                    <Select
                                        value={inputField.Nature}
                                        name="Nature"
                                        onChange={(e) => handleChangeInput(inputField.id, e)}
                                        label="Nature"
                                        fullWidth
                                    >
                                        {natures.map((nature, i) => (
                                            <MenuItem key={i} value={nature}>
                                                {nature}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={2}>
                                <FormControl sx={{ width: 2 / 2 }}>
                                    <InputLabel>Etat</InputLabel>
                                    <Select
                                        value={inputField.Etat}
                                        name="Etat"
                                        onChange={(e) => handleChangeInput(inputField.id, e)}
                                        label="Etat"
                                        fullWidth
                                    >
                                        {etats.map((etat, i) => (
                                            <MenuItem key={i} value={etat}>
                                                {etat}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={2}>
                                <TextField
                                    label="Ordre"
                                    name="Ordre"
                                    type="number"
                                    value={inputField.Ordre}
                                    variant="outlined"
                                    onChange={(e) => handleChangeInput(inputField.id, e)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} md={2}>
                                <TextField
                                    label="Ligne de conduite"
                                    name="Ligne_de_conduite"
                                    value={inputField.Ligne_de_conduite}
                                    variant="outlined"
                                    onChange={(e) => handleChangeInput(inputField.id, e)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} md={2}>
                                <DatePicker
                                    id={inputField.id}
                                    value={inputField.Debut_des_travaux}
                                    name="Debut_des_travaux"
                                    label="Debut des travaux"
                                    changeEvent={handleChangeInput}
                                />
                            </Grid>
                            <Grid item xs={12} md={2}>
                                <DatePicker
                                    id={inputField.id}
                                    value={inputField.Fin_des_travaux}
                                    name="Fin_des_travaux"
                                    label="Fin des travaux"
                                    changeEvent={handleChangeInput}
                                />
                            </Grid>
                        </Grid>
                        <Divider
                            sx={{
                                display: { xs: 'block', md: 'none' },
                                transform: 'translateY(-15px)',
                                backgroundColor: 'primary.main',
                                height: '5px',
                            }}
                        />
                    </Box>
                ))}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                        sx={{ borderColor: 'text.disabled', color: '#222' }}
                        variant="outlined"
                        onClick={() => cancelForm2('cancelForm')}
                    >
                        Annuler
                    </Button>
                    <Button variant="contained" color="primary" sx={{ ml: 2 }} onClick={handleSubmit}>
                        Enregistrer
                    </Button>
                </Box>
            </form>
            <IconButton onClick={handelAddClick} sx={{ position: 'relative', top: { xs: btnPosMob, md: btnPos } }}>
                <AddCircleIcon fontSize="large" sx={{ color: 'primary.main' }} />
            </IconButton>
        </Paper>
    );
};

export default IntervForm2;

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
import { useMutation,useQueryClient } from 'react-query';
import {IntervState} from '../context/context'

const strapiHost = process.env.STRAPI_HOST;
const strapiPort = process.env.STRAPI_PORT;


const IntervForm2 = ({ cancelForm2 }) => {
    const initialFValues = [
        {
            id: uuidv4(),
            address: '',
            type: '',
            note: '',
            date: new Date(),
            isDisabled: false,
        },
        {
            id: uuidv4(),
            address: '',
            type: '',
            note: '',
            date: new Date(),
            isDisabled: true,
        },
    ];

    const [inputFields, setInputFields] = useState(initialFValues);
    const [btnPos, setBtnPos] = useState(0);
    const [btnPosMob, setBtnPosMob] = useState(0);

    const handelAddClick = () => {
        const newFields = [...inputFields];
        newFields.splice(newFields.length - 1, 0, {
            id: uuidv4(),
            address: '',
            type: '',
            note: '',
            date: new Date(),
            isDisabled: false,
        });

        setInputFields(newFields);
        setBtnPos((prevState) => prevState + 76);
        setBtnPosMob((prevState) => prevState + 289);
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

    const addIntervention = (interv)=> {
        return axios.post('http://' + strapiHost + ':' + strapiPort + '/api/interventions',interv)
    }

    const {notificationState, notificationDispatch} = IntervState()

    const queryClient = useQueryClient()
    const {mutate}= useMutation(addIntervention)

    const handleSubmit = ()=> {
        const sentData = inputFields.map(field=>{
            let {id, address,type, note,date} = field
            let newField = {address,type, note,date}
            return newField
        }).filter(fld=> fld.note)
       
        sentData.forEach(element => {
            mutate({data:element})
        });
        
        setInputFields(initialFValues)
    }

    

    return (
        <Paper
            sx={{
                p: 3,
                display: 'flex',
                gap: 2,
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                '& > :first-of-type > :nth-last-of-type(2)': { display: { xs: 'none', md: 'flex' } },
            }}
        >
            <form>
                {inputFields.map((inputField, index) => (
                    <Box key={inputField.id}>
                        <Grid container spacing={1} sx={{ mb: { xs: 4, md: 2 } }}>
                            <Grid item xs={12} md={5}>
                                <TextField
                                    label="Address"
                                    name="address"
                                    value={inputField.address}
                                    variant="outlined"
                                    onChange={(e) => handleChangeInput(inputField.id, e)}
                                    fullWidth
                                    disabled={inputField.isDisabled}
                                />
                            </Grid>
                            <Grid item xs={12} md={2}>
                                <FormControl sx={{ width: 2 / 2 }}>
                                    <InputLabel id="demo-simple-select-label">Type</InputLabel>
                                    <Select
                                        value={inputField.type}
                                        name="type"
                                        onChange={(e) => handleChangeInput(inputField.id, e)}
                                        label="Type"
                                        fullWidth
                                        disabled={inputField.isDisabled}
                                    >
                                        <MenuItem value="Type1">Type1</MenuItem>
                                        <MenuItem value="Type2">Type2</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={2}>
                                <TextField
                                    label="Note"
                                    name="note"
                                    type="number"
                                    value={inputField.note}
                                    variant="outlined"
                                    onChange={(e) => handleChangeInput(inputField.id, e)}
                                    fullWidth
                                    disabled={inputField.isDisabled}
                                />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <DatePicker
                                    id={inputField.id}
                                    value={inputField.date}
                                    changeEvent={handleChangeInput}
                                    isDisabled={inputField.isDisabled}
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
            <IconButton onClick={handelAddClick} sx={{ position: 'relative', top: { xs: btnPosMob, md: btnPos }}}>
                <AddCircleIcon
                    fontSize="large"
                    sx={{ color: 'primary.main' }}
                />
            </IconButton>
        </Paper>
    );
};

export default IntervForm2;

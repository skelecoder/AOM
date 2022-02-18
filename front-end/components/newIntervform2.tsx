import {
    Box,
    Button,
    Divider,
    FormControl,
    Grid,
    IconButton,
    MenuItem,
    Paper,
    Select,
    TextField,
    Typography,
} from '@mui/material';
import { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { v4 as uuidv4 } from 'uuid';
import DatePicker from './datePicker';

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
const IntervForm2 = ({cancelForm2}) => {
    const [inputFields, setInputFields] = useState(initialFValues);
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
    };

    const handleChangeInput = (id, event) => {
        const newInputFields = inputFields.map((field) => {
            if (id === field.id) {
                field[event.target.name] = event.target.value;
            }
            return field;
        });

        setInputFields(newInputFields);
        console.log(event.target.value);
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
                {inputFields.map((inputField, index) => (
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={5}>
                            <TextField
                                sx={{ mr: 2, mb: 2 }}
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
                            <TextField
                                sx={{ mb: 2, mr: 2 }}
                                label="Type"
                                name="type"
                                value={inputField.type}
                                variant="outlined"
                                onChange={(e) => handleChangeInput(inputField.id, e)}
                                fullWidth
                                disabled={inputField.isDisabled}
                            />
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <TextField
                                sx={{ mb: 2, mr: 2 }}
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
                        <Grid item xs={12} md={3} sx={{ mb: 4 }}>
                            <DatePicker
                                id={inputField.id}
                                value={inputField.date}
                                changeEvent={handleChangeInput}
                                isDisabled={inputField.isDisabled}
                            />
                        </Grid>
                    </Grid>
                ))}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button variant="outlined" onClick={() =>cancelForm2('cancelForm')}>
                        Annuler
                    </Button>
                    <Button variant="contained" color="primary" sx={{ ml: 2 }}>
                        Enregistrer
                    </Button>
                </Box>
            </form>
            <IconButton onClick={handelAddClick}>
                <AddCircleIcon fontSize="large" sx={{ color: 'primary.main' }} />
            </IconButton>
        </Paper>
    );
};

export default IntervForm2;

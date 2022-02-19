import { Box, Button, Grid, IconButton, Paper, TextField } from '@mui/material';
import { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { v4 as uuidv4 } from 'uuid';
import DatePicker from './datePicker';

const initialFValues = [
    {
        id: uuidv4(),
        address: '',
        projectCode: '',
        date: new Date(),
        isDisabled: false,
    },
    {
        id: uuidv4(),
        address: '',
        projectCode: '',
        date: new Date(),
        isDisabled: true,
    },
];
const IntervForm1 = ({cancelForm1}) => {
    const [inputFields, setInputFields] = useState(initialFValues);
    
    const handelAddClick = () => {
        const newFields = [...inputFields];
        newFields.splice(newFields.length - 1, 0, {
            id: uuidv4(),
            address: '',
            projectCode: '',
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
                    <Grid container spacing={2}>
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
                        <Grid item xs={12} md={3}>
                            <TextField
                                sx={{ mb: 2, mr: 2 }}
                                label="Code Projet"
                                name="projectCode"
                                value={inputField.projectCode}
                                variant="outlined"
                                onChange={(e) => handleChangeInput(inputField.id, e)}
                                fullWidth
                                disabled={inputField.isDisabled}
                            />
                        </Grid>
                        <Grid item xs={12} md={4} sx={{ mb: 4 }}>
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
                    <Button sx={{borderColor:'text.disabled', color:'#222'}} variant="outlined" onClick={() =>cancelForm1('cancelForm')}>
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

export default IntervForm1;

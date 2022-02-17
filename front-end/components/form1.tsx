import { Box, Button, IconButton, MenuItem, Paper, Select, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
const initialFValues = [
    {
        address: '',
        projectCode: '',
        date: new Date(),
    },
    {
        address: '',
        projectCode: '',
        date: '',
        isDisabled: true,
    },
];
const Form1 = ()=>{
    const handelAddClick = () => {
        const newFields = [
            ...inputFields,
            {
                address: '',
                projectCode: '',
                date: new Date(),
            },
        ];
        setInputFields(newFields);
    };
    const [inputFields, setInputFields] = useState(initialFValues);
    return (
    <Paper
                sx={{
                    p: 3,
                    display: 'flex',
                    gap: 2,
                    alignItems: 'flex-start',
                    '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': { p: 1 },
                }}
            >
                <form>
                    {inputFields.map((inputField, index) => (
                        <Box key={index}>
                            <TextField
                                sx={{ mr: 2, mb: 2 }}
                                label="Address"
                                name="adress"
                                value={inputField.address}
                                variant="outlined"
                            />
                            <TextField
                                sx={{ mb: 2 }}
                                label="Code Projet"
                                value={inputField.address}
                                variant="outlined"
                            />
                        </Box>
                    ))}
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button
                            variant="outlined"
                            sx={{ color: '#9e9e9e', borderColor: '#9e9e9e', '&:hover': { borderColor: '#9e9e9e' } }}
                        >
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
    )}

export default Form1
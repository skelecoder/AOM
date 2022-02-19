import {
    Dialog,
    DialogTitle,
    List,
    ListItem,
    ListItemText,
    Paper,
    Typography,
    Box,
    Button,
    TextField,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
} from '@mui/material';
import DatePickerInput from './datePicker';
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { v4 as uuidv4 } from 'uuid';

const initialFValues = [
    {
        id: uuidv4(),
        refection: '',
        type: '',
        date: new Date(),
    },
];

const TraitModal = ({ handelClose, open, selection }) => {
    // const [inputFields, setInputFields] = useState(initialFValues);

    

    // const handleChangeInput = (id, event) => {
    //     const newInputFields = inputFields.map((field) => {
    //         if (id === field.id) {
    //             field[event.target.name] = event.target.value;
    //         }
    //         return field;
    //     });

    //     setInputFields(newInputFields);
    // };


    const columns = [
        { field: 'col1', headerName: 'Référence', width: 150 },
        { field: 'col2', headerName: 'Address', width: 150 },
        {
            field: 'col3',
            renderCell: (cellValues) => {
                return (
                    <FormControl>
                        <RadioGroup
                            row={true}
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Oui" />
                            <FormControlLabel value="male" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                );
            },
            headerName: 'Refection',
            width: 170,
        },
        {
            field: 'col4',
            renderCell: (cellValues) => {
                return (
                    <FormControl sx={{ width: '200px' }}>
                        <Select onChange={()=> console.log(cellValues)}>
                            <MenuItem value="type1">Type1</MenuItem>
                            <MenuItem value="type2">Type2</MenuItem>
                        </Select>
                    </FormControl>
                );
            },
            headerName: 'Type',
            width: 150,
        },
        {
            field: 'col5',
            renderCell: (cellValues) => {
                return (
                    <DatePickerInput
                    id=""
                    value=""
                    changeEvent=""
                    isDisabled=""
                />
                );
            },
            headerName: 'Date',
            width: 200,
        },
    ];

    const rows = [...selection];
    // const newRows = rows.map(option => {
    //     // New properties to be added
    //     const newPropsObj = {
    //       col3:'value1',
    //       col4:'value2',
    //       col5:'value3'
    //     };

    //     // Assign new properties and return
    //     return Object.assign(option, newPropsObj);
    //   });

    return (
        <Dialog
            sx={{ '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper': { p: 4, width: '900px', maxWidth: '1000px' } }}
            onClose={handelClose}
            open={open}
        >
            <DialogTitle sx={{ color: 'primary.main', pl: 0, mb: 2 }}>Interventions Traitées</DialogTitle>
            <form>
                <Paper
                    sx={{
                        height: '500px',
                        display: { xs: 'none', md: 'block' },
                        '& .css-1jbbcbn-MuiDataGrid-columnHeaderTitle': {
                            color: 'primary.main',
                            fontWeight: 'bold',
                        },
                    }}
                >
                    <DataGrid rows={rows} columns={columns} />
                </Paper>
                <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: 2, mb: 2 }}>
                    <Button
                        sx={{ borderColor: 'text.disabled', color: '#222' }}
                        variant="outlined"
                        onClick={handelClose}
                    >
                        Annuler
                    </Button>
                    <Button variant="contained" color="primary" sx={{ ml: 2 }}>
                        Enregistrer
                    </Button>
                </Box>
            </form>
        </Dialog>
    );
};

export default TraitModal;

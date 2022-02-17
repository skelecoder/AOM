import {
    Box,
    Button,
    IconButton,
    MenuItem,
    Paper,
    Select,
    TextField,
    Typography,
    FormControl,
    InputLabel,
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useEffect, useState } from 'react';
import Form1 from '../../components/form1';
import Form2 from '../../components/form2';

// const initialFValues = [
//     {
//         address: '',
//         projectCode: '',
//         date: new Date(),
//     },
//     {
//         address: '',
//         projectCode: '',
//         date: '',
//         isDisabled: true,
//     },
// ];

let form1Display = 'none';
let form2Display = 'none';

const NewIntervention = () => {
    const [intervention, setIntervention] = useState('');

    // useEffect(() => {
    //     if (intervention == 'branchement neuf') {
    //          form1Display = 'flex';
    //         // form2Display = 'none';
    //         console.log('branchement neuf');
    //     } else {
    //         // form1Display = 'none';
    //         // form2Display = 'flex';
    //         console.log('reclamation');
    //     }
    // }, [intervention]);

    const handleChange = (e) => {
        setIntervention(e.target.value);
    };

    // const handelAddClick = () => {
    //     const newFields = [
    //         ...inputFields,
    //         {
    //             address: '',
    //             projectCode: '',
    //             date: new Date(),
    //         },
    //     ];
    //     setInputFields(newFields);
    // };

    return (
        <>
            <Typography variant="h4" sx={{ color: 'primary.main', mb: 2 }}>
                Nouvelle Intervention
            </Typography>

            <FormControl sx={{ width: '200px' }}>
                <InputLabel id="demo-simple-select-label">Intervention</InputLabel>
                <Select value={intervention} onChange={handleChange}label="Intervention">
                    <MenuItem value="branchement neuf">Branchement neuf</MenuItem>
                    <MenuItem value="reclamation">Reclamation</MenuItem>
                </Select>
            </FormControl>

            {intervention == 'branchement neuf' ? <Form1 /> : intervention == 'reclamation' ? <Form2 /> : ''}
        </>
    );
};

export default NewIntervention;

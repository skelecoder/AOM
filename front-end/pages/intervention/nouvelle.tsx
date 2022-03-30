import { Box, MenuItem, Paper, Select, Typography, FormControl, InputLabel } from '@mui/material';
import { useState } from 'react';
import IntervForm1 from '../../components/newIntervform1';
import IntervForm2 from '../../components/newIntervform2';

const NewIntervention = () => {
    const [intervention, setIntervention] = useState('');

    const handleChange = (e) => {
        setIntervention(e.target.value);
    };

    return (
        <>
            <Typography variant="h4" sx={{ color: 'primary.main', mb: 2 }}>
                Nouvelle Intervention
            </Typography>
            <Paper sx={{ p: 3, mb: 2 }}>
                <FormControl sx={{ width: '200px' }}>
                    <InputLabel id="demo-simple-select-label">Intervention</InputLabel>
                    <Select value={intervention} onChange={handleChange} label="Intervention">
                        <MenuItem value="branchement neuf">Branchement neuf</MenuItem>
                        <MenuItem value="reclamation">Reclamation</MenuItem>
                    </Select>
                </FormControl>
            </Paper>

            {intervention == 'branchement neuf' ? (
                <IntervForm1 cancelForm1={setIntervention} />
            ) : intervention == 'reclamation' ? (
                <IntervForm2 cancelForm2={setIntervention}/>
            ) : intervention == 'cancelForm' ? (
                ''
            ) : (
                ''
            )}
        </>
    );
};

export default NewIntervention;

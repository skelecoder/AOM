import { Dialog,DialogTitle, List, ListItem, ListItemText, Paper, Typography, Box, Button } from '@mui/material';
import DatePickerInput from './datePicker';
import { useState } from 'react';

const PlanModal = ({ handelClose, open, selection }) => {
    const [dateValue, setdateValue] = useState();

    const handelChangeIput = (id, e) => {
        setdateValue(e.target.value);
    };

    return (
        <Dialog onClose={handelClose} open={open}>
            <Paper sx={{ p: 4 }}>
            <DialogTitle sx={{color:'primary.main', pl:0, mb:2}}>Planifier Interventions</DialogTitle>
                <form>
                        <DatePickerInput id="" value={dateValue} changeEvent={handelChangeIput} isDisabled={false} />                
                    <Typography sx={{fontWeight:'bold',mt:2}}>Liste de Références Sélectionnées</Typography>
                    <List>
                        {selection.map((item) => (
                            <ListItem button key={item.id}>
                                <ListItemText primary={item.col1} />
                            </ListItem>
                        ))}
                    </List>
                    <Typography sx={{color:'primary.main', mb:2}}>{selection.length} références séléctionées</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <Button sx={{borderColor:'text.disabled', color:'#222'}} variant="outlined" onClick={handelClose}>
                        Annuler
                    </Button>
                    <Button variant="contained" color="primary" sx={{ ml: 2 }}>
                        Enregistrer
                    </Button>
                </Box>
                </form>
            </Paper>
        </Dialog>
    );
};

export default PlanModal;

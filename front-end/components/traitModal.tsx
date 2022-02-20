import {
    Dialog,
    DialogTitle,
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
    Grid,
    Divider,
    Paper,
} from '@mui/material';
import DatePicker from './datePicker';

const TraitModal = ({ handelClose, open, selection }) => {
    const rows = [...selection];

    const newSelection = rows.map((slc) => {
        return { id: slc.id, reference: slc.col1, address: slc.col2, refection: 'non', type: '', date: new Date() };
    });

    const handleChangeInput = (id, event) => {};

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
                        '& .css-1jbbcbn-MuiDataGrid-columnHeaderTitle': {
                            color: 'primary.main',
                            fontWeight: 'bold',
                        },
                        '& .MuiInputBase-input': { padding: '6px 5px 7px' },
                    }}
                >
                    <Grid
                        container
                        spacing={1}
                        sx={{
                            '& .css-ahj2mt-MuiTypography-root': { color: 'primary.main', mb: 1 },
                            display: { xs: 'none', md: 'flex' },
                        }}
                    >
                        <Grid item xs={12} md={3}>
                            <Typography>Référence</Typography>
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <Typography>Address</Typography>
                        </Grid>
                        <Grid item xs={12} md={2.5}>
                            <Typography>Refection</Typography>
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <Typography>Type</Typography>
                        </Grid>
                        <Grid item xs={12} md={2.5}>
                            <Typography>Date</Typography>
                        </Grid>
                    </Grid>
                    {newSelection.map((inputField) => (
                        <>
                            <Grid
                                container
                                spacing={{ xs: 3, md: 1 }}
                                key={inputField.id}
                                sx={{
                                    mb: { xs: 5, md: 0 },
                                    '& .MuiInputLabel-outlined': {
                                        transform: 'translateY( -20px)',
                                        display: { xs: 'block', md: 'none' },
                                        color: 'primary.main',
                                    },
                                }}
                            >
                                <Grid item xs={12} md={3}>
                                    <FormControl fullWidth>
                                        <InputLabel>Reférence</InputLabel>
                                        <TextField
                                            name="reference"
                                            value={inputField.reference}
                                            variant="outlined"
                                            onChange={(e) => handleChangeInput(inputField.id, e)}
                                            fullWidth
                                            size="small"
                                            disabled
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <FormControl fullWidth>
                                        <InputLabel>Address</InputLabel>
                                        <TextField
                                            name="address"
                                            value={inputField.address}
                                            variant="outlined"
                                            onChange={(e) => handleChangeInput(inputField.id, e)}
                                            disabled
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={2.3}>
                                    <FormControl sx={{ transform: { xs: 'translateY(2px)', md: 'translateY(-5px)' } }}>
                                        <InputLabel>Refection</InputLabel>
                                        <RadioGroup
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            defaultValue="non"
                                            name="radio-buttons-group"
                                            value={inputField.refection}
                                            onChange={(e) => handleChangeInput(inputField.id, e)}
                                            row
                                        >
                                            <FormControlLabel value="oui" control={<Radio />} label="Oui" />
                                            <FormControlLabel value="non" control={<Radio />} label="Non" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <FormControl fullWidth>
                                        <InputLabel>Type</InputLabel>
                                        <Select
                                            value={inputField.type}
                                            name="type"
                                            onChange={(e) => handleChangeInput(inputField.id, e)}
                                            fullWidth
                                        >
                                            <MenuItem value="branchement neuf">Type1</MenuItem>
                                            <MenuItem value="reclamation">Type2</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={2.5}>
                                    <FormControl fullWidth>
                                        <InputLabel>Date</InputLabel>
                                        <DatePicker
                                            id={inputField.id}
                                            value={inputField.date}
                                            changeEvent={handleChangeInput}
                                            isDisabled={false}
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Divider
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                    transform: 'translateY(-25px)',
                                    backgroundColor: 'primary.main',
                                    height: '5px',
                                }}
                            />
                        </>
                    ))}
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

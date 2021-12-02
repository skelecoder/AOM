import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import { Item } from 'lib/definitions/Item';
import { Button, FormControl, Input, InputLabel, Typography } from '@mui/material';


const NewReception = () => {
    return (
        <>
            {/* Chart */}
            <Grid item xs={12} md={8}>
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 560,
                    }}
                >
                    <form>
                        <FormControl
                            fullWidth
                            sx={{
                                mb: 2,
                            }}
                        >
                            <Typography component="h1" variant="h4">
                                Contact
                            </Typography>
                            <FormControl fullWidth sx={{ mb: 2 }}>
                                <InputLabel>asd</InputLabel>
                                <Input></Input>
                            </FormControl>
                            <FormControl fullWidth sx={{ mb: 2 }}>
                                <InputLabel>asd</InputLabel>
                                <Input></Input>
                            </FormControl>
                            <FormControl fullWidth>
                                <InputLabel>asd</InputLabel>
                                <Input rows={5} multiline></Input>
                            </FormControl>
                        </FormControl>
                        <Button color="primary" variant="contained">asd</Button>
                    </form>
                </Paper>
            </Grid>
        </>
    );
};

export default NewReception;

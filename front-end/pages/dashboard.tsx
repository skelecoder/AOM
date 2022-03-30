import Layout from "components/Layout/Layout"
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const Dashboard =(()=>{
    return (
            <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
            <Paper
                sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                }}
            >
                <Typography component="h3">Entrées</Typography>
                <Typography component="h1" variant={'h1'}>3</Typography>
            </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
            <Paper
                sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                }}
            >
                <Typography component="h3">Sorties</Typography>
                <Typography component="h1" variant={'h1'}>
                    4
                </Typography>
            </Paper>
        </Grid>
        </Grid>
    )
    
})

export default Dashboard
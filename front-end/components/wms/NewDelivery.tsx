import React from 'react';
import { useEffect, useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import { Item } from 'lib/definitions/Item';
import { Button, FormControl, Input, InputLabel, Typography, Select, MenuItem, TextField } from '@mui/material';
import { Delivery } from 'lib/definitions/Delivery';

const NewDelivery = () => {
    const [openDelivery, setopenDelivery] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem('AWMDelivery');
        const initialValue = JSON.parse(saved);
        return initialValue || '';
    });

    const [id, setId] = useState(openDelivery ? openDelivery.id : 999);
    const [datetime, setDatetime] = useState(openDelivery ? openDelivery.datetime : '');
    const [items, setItems] = useState(openDelivery ? openDelivery.items : []);
    const [itemsCount, setItemsCount] = useState(openDelivery ? openDelivery.itemsCount : 0);
    const [provider, setProvider] = useState(openDelivery ? openDelivery.provider : '');
    const [siteCode, setSiteCode] = useState(openDelivery ? openDelivery.siteCode : 333);
    const [siteType, setSiteType] = useState(openDelivery ? openDelivery.siteType : 'Branchement neuf');
    const [teamLeader, setTeamLeader] = useState(openDelivery ? openDelivery.teamLeader : '');
    const [img, setImg] = useState(openDelivery ? openDelivery.img : '');

    const handleTypeChange = (event: any) => {
        setSiteType(event.target.value);
    };
    const handleTeamLeaderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTeamLeader(event.target.value);
    };
    const handleSiteCodeChange = (event: any) => {
        setSiteCode(event.target.value);
    };

    useEffect(() => {
        const currentDelivery: Delivery = {
            id: id,
            datetime: datetime,
            items: items,
            itemsCount: itemsCount,
            provider: provider,
            siteCode: siteCode,
            siteType: siteType,
            teamLeader: teamLeader,
            img: img,
        };
        setopenDelivery(currentDelivery);
        localStorage.setItem('AWMDelivery', JSON.stringify(currentDelivery));
    }, [id, siteCode, datetime, items, itemsCount, provider, siteType, teamLeader, img]);

    return (
        <>
            {/* Chart */}
            <Grid item xs={12}>
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
                            <Typography component="h1" variant="h5">
                                Nouvelle sortie: S{id}
                            </Typography>
                            <Grid>
                                <FormControl sx={{ m: 2 }}>
                                    <TextField
                                        id="N?? d'intervention"
                                        label="N?? d'intervention"
                                        value={siteCode}
                                        onChange={handleSiteCodeChange}
                                        required
                                    />
                                </FormControl>
                                <FormControl sx={{ m: 2, width: 200 }}>
                                    <InputLabel>Type d'op??ration</InputLabel>
                                    <Select
                                        labelId=""
                                        id="Type d'op??ration"
                                        value={siteType}
                                        label="Type d'op??ration"
                                        onChange={handleTypeChange}
                                        required
                                    >
                                        <MenuItem value={'Branchement neuf'}>Branchement neuf</MenuItem>
                                        <MenuItem value={'R??clamation'}>R??clamation</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl sx={{ m: 2, width: 200 }}>
                                    <InputLabel>Cheff d'??quipe</InputLabel>
                                    <Select
                                        labelId=""
                                        id="Cheff d'??quipe"
                                        value={teamLeader}
                                        label="Cheff d'??quipe"
                                        onChange={handleTeamLeaderChange}
                                        required
                                    >
                                        <MenuItem value={'Mohamed'}>Mohamed</MenuItem>
                                        <MenuItem value={'Youssef'}>Youssef</MenuItem>
                                        <MenuItem value={'Brahim'}>Brahim</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </FormControl>
                        <Button color="primary" variant="contained">
                            Valider
                        </Button>
                    </form>
                </Paper>
            </Grid>
        </>
    );
};

export default NewDelivery;

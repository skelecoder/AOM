import React from 'react';
import { GetServerSideProps } from 'next';
import ElasticsearchService from 'data/elasticsearch-service';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import Blog from 'components/blog/Blog';

import dynamic from 'next/dynamic';
const MapComponent = dynamic(() => import('components/smart-city-components/map'), {
    ssr: false,
});

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { width } from '@mui/system';

const ButtonAppBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

const Index = (props: any) => <Blog />;
export const getServerSideProps: GetServerSideProps<any> = async () => {
    const es = new ElasticsearchService();

    return {
        props: {},
    };
};

export default Index;

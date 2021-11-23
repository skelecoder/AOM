import React from 'react';
import { GetServerSideProps } from 'next';
import ElasticsearchService from 'data/elasticsearch-service';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import Blog from 'components/blog/Blog';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { width } from '@mui/system';

const Index = (props: any) => <Blog />;
export const getServerSideProps: GetServerSideProps<any> = async () => {
    const es = new ElasticsearchService();

    return {
        props: {},
    };
};

export default Index;

import React, { useEffect, useState } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Delivery from 'components/wms/Delivery';
import MainDashboard from 'components/wms/MainDashboard';
import Reception from 'components/wms/Reception';
import Stock from 'components/wms/Stock';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CategoryIcon from '@mui/icons-material/Category';
import InventoryIcon from '@mui/icons-material/Inventory';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Grid, ListItemButton, ListSubheader } from '@mui/material';
import Articles from 'components/wms/Articles';
import GroupsIcon from '@mui/icons-material/Groups';
import ConstructionIcon from '@mui/icons-material/Construction';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import { Delivery as DeliveryInterface } from 'lib/definitions/Delivery';
import NewDelivery from 'components/wms/NewDelivery';
import NewReception from 'components/wms/NewReception';

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9),
            },
        }),
    },
}));

const mdTheme = createTheme();
const Delivery1: DeliveryInterface = {
    id: 210013,
    teamLeader: 'Hassan Laaroussi',
    siteCode: 9935,
    siteType: 'Réclamation',
    datetime: '25/11/2021 9:36',
    provider: 'Doukkali',
    items: [
        {
            id: 1,
            name: 'Pose de Canalisations en béton armé classe 135 A',
            model: 'DN 300 mm',
            code: '3.2.1.a',
            unity: 'ml',
            price: 66.22,
            qty: 600,
        },
        {
            id: 2,
            name: 'Pose de Canalisations en béton armé classe 135 A',
            model: 'DN 400 mm',
            code: '3.2.1.b',
            unity: 'ml',
            price: 66.22,
            qty: 450,
        },
    ],
    itemsCount: 2,
};
const Delivery2: DeliveryInterface = {
    id: 210014,
    teamLeader: 'Hassan Laaroussi',
    siteCode: 9935,
    siteType: 'Branchement neuf',
    datetime: '25/11/2021 9:36',
    provider: 'Doukkali',
    items: [
        {
            id: 1,
            name: 'Pose de Canalisations en béton armé classe 135 A',
            model: 'DN 300 mm',
            code: '3.2.1.a',
            unity: 'ml',
            price: 66.22,
            qty: 600,
        },
        {
            id: 2,
            name: 'Pose de Canalisations en béton armé classe 135 A',
            model: 'DN 400 mm',
            code: '3.2.1.b',
            unity: 'ml',
            price: 66.22,
            qty: 450,
        },
    ],
    itemsCount: 2,
};
interface DashboardProps {
    articles: any;
    reception: any;
    delivery: any;
}

const Dashboard = () => {
    const [open, setOpen] = useState(true);
    const [selectedApp, setSelectedApp] = useState('MainDashboard');
    const toggleDrawer = () => {
        setOpen(!open);
    };

    const mainListItems = (
        <div>
            <ListItemButton onClick={() => setSelectedApp('MainDashboard')} selected={selectedApp === 'MainDashboard'}>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItemButton>
            <ListItemButton onClick={() => setSelectedApp('Stock')} selected={selectedApp === 'Stock'}>
                <ListItemIcon>
                    <InventoryIcon />
                </ListItemIcon>
                <ListItemText primary="Inventaire" />
            </ListItemButton>
            <ListItemButton onClick={() => setSelectedApp('Reception')} selected={selectedApp === 'Reception'}>
                <ListItemIcon>
                    <ArrowBackIosNewIcon />
                </ListItemIcon>
                <ListItemText primary="Lignes d'entrée" />
            </ListItemButton>
            <ListItemButton onClick={() => setSelectedApp('Delivery')} selected={selectedApp === 'Delivery'}>
                <ListItemIcon>
                    <ArrowForwardIosIcon />
                </ListItemIcon>
                <ListItemText primary="Lignes de sortie" />
            </ListItemButton>
        </div>
    );
    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="absolute" open={open}>
                    <Toolbar
                        sx={{
                            pr: '24px', // keep right padding when drawer closed
                        }}
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                            Amanor Warehouse Manager
                        </Typography>
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            px: [1],
                        }}
                    >
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List>{mainListItems}</List>
                    <Divider />
                    <List>
                        <ListSubheader inset>Opérations en cours</ListSubheader>
                        <ListItemButton
                            onClick={() => setSelectedApp('New Reception')}
                            selected={selectedApp === 'New Reception'}
                        >
                            <ListItemText color="success" primary={'Nouvelle entrée'} />
                            <ListItemText color="success" primary="X" />
                        </ListItemButton>
                        <ListItemButton
                            onClick={() => setSelectedApp('New Delivery')}
                            selected={selectedApp === 'New Delivery'}
                        >
                            <ListItemText color="success" primary="Nouvelle sortie" />
                            <ListItemText color="success" primary="X" />
                        </ListItemButton>
                    </List>
                    <Divider />
                    <List>
                        <ListItemButton
                            onClick={() => setSelectedApp('Articles')}
                            selected={selectedApp === 'Articles'}
                        >
                            <ListItemIcon>
                                <CategoryIcon />
                            </ListItemIcon>
                            <ListItemText primary="Articles" />
                        </ListItemButton>
                        <ListItemButton
                            onClick={() => setSelectedApp('Providers')}
                            selected={selectedApp === 'Providers'}
                        >
                            <ListItemIcon>
                                <SupervisedUserCircleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Fournisseurs" />
                        </ListItemButton>
                        <ListItemButton onClick={() => setSelectedApp('Sites')} selected={selectedApp === 'Sites'}>
                            <ListItemIcon>
                                <ConstructionIcon />
                            </ListItemIcon>
                            <ListItemText primary="Chantiers" />
                        </ListItemButton>
                        <ListItemButton onClick={() => setSelectedApp('Teams')} selected={selectedApp === 'Teams'}>
                            <ListItemIcon>
                                <GroupsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Équipes" />
                        </ListItemButton>
                        <Divider />
                        <ListItemButton
                            onClick={() => setSelectedApp('Settings')}
                            selected={selectedApp === 'Settings'}
                        >
                            <ListItemIcon>
                                <SettingsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Paramètres" />
                        </ListItemButton>
                    </List>
                </Drawer>
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Toolbar />
                    <Grid container xs={12} spacing={3} sx={{ p: { xs: 1, md: 3 } }}>
                        {/* Chart */}

                        {selectedApp === 'Delivery' ? (
                            <Delivery />
                        ) : selectedApp === 'MainDashboard' ? (
                            <MainDashboard />
                        ) : selectedApp === 'Reception' ? (
                            <Reception />
                        ) : selectedApp === 'Articles' ? (
                            <></>
                        ) : selectedApp === 'New Delivery' ? (
                            <NewDelivery />
                        ) : selectedApp === 'New Reception' ? (
                            <NewReception />
                        ) : selectedApp === 'Stock' ? (
                            <Stock />
                        ) : null}
                    </Grid>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default Dashboard;

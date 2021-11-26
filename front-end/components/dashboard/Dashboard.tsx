import * as React from 'react';
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
import { Grid, ListItemButton } from '@mui/material';
import Articles from 'components/wms/Articles';

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

interface DashboardProps {
    articles: any;
    reception: any;
    delivery: any;
}

const Dashboard = (props: DashboardProps) => {
    const [open, setOpen] = React.useState(true);
    const [selectedApp, setSelectedApp] = React.useState('MainDashboard');
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
                <ListItemText primary="Stock" />
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
                        <ListItemButton
                            onClick={() => setSelectedApp('Articles')}
                            selected={selectedApp === 'Articles'}
                        >
                            <ListItemIcon>
                                <CategoryIcon />
                            </ListItemIcon>
                            <ListItemText primary="Articles" />
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
                    <Grid container spacing={3} sx={{ p: { xs: 1, md: 3 } }}>
                        {/* Chart */}

                        {selectedApp === 'Delivery' ? (
                            <Delivery />
                        ) : selectedApp === 'MainDashboard' ? (
                            <MainDashboard />
                        ) : selectedApp === 'Reception' ? (
                            <Reception />
                        ) : selectedApp === 'Articles' ? (
                            <Articles data={props.articles} />
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

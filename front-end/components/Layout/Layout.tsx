import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentReturnedIcon from '@mui/icons-material/AssignmentReturned';
import CategoryIcon from '@mui/icons-material/Category';
import GroupsIcon from '@mui/icons-material/Groups';
import ConstructionIcon from '@mui/icons-material/Construction';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import SendTimeExtensionIcon from '@mui/icons-material/SendTimeExtension';
import JoinRightIcon from '@mui/icons-material/JoinRight';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';
import Link from '@mui/material/Link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { IntervState } from '../../context/context';
import { io } from 'socket.io-client';

const drawerWidth = 240;

const strapiHost = process.env.NEXT_PUBLIC_STRAPI_HOST;
const strapiPort = process.env.NEXT_PUBLIC_STRAPI_PORT;

const socket = io(`http://${strapiHost}:${strapiPort}`);

const Layout = ({ children }) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const { notificationState, notificationDispatch } = IntervState();

    const router = useRouter();

    const menuItems1 = [
        {
            text: 'Dashboard',
            icon: <DashboardIcon />,
            path: '/dashboard',
        },
        {
            text: 'Interventions',
            icon: <AssignmentReturnedIcon />,
            path: '/intervention',
        },
        {
            text: 'Dispatching',
            icon: <SendTimeExtensionIcon />,
            path: '/dispatching',
        },
        {
            text: 'Attachements',
            icon: <JoinRightIcon />,
            path: '/attachements',
        },
    ];

    const menuItems2 = [
        {
            text: 'Paramètres',
            icon: <SettingsIcon />,
            path: '/parametres',
        },
    ];

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleNotifications = () => {
        notificationDispatch({ type: 'RESET_NOTIFICATION_COUNT' });

        router.push('/intervention');
    };

    useEffect(() => {
        socket
            .off('new_intervention')
            .on('new_intervention', (res) => notificationDispatch({ type: 'NEW_NOTIFICATION', value: res.count }));
    });

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List sx={{}}>
                {menuItems1.map((item) => (
                    <ListItem
                        button
                        key={item.text}
                        selected={router.pathname.includes(item.path)}
                        sx={{ '& .css-10hburv-MuiTypography-root': { fontWeight: '600' } }}
                    >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <NextLink href={item.path} passHref>
                            <Link color="primary.main" underline="none">
                                <ListItemText primary={item.text} />
                            </Link>
                        </NextLink>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {menuItems2.map((item) => (
                    <ListItem button key={item.text}  sx={{'& .css-10hburv-MuiTypography-root':{fontWeight:'600'}}}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography sx={{ flexGrow: 1 }} variant="h6" noWrap component="div">
                        Amanor Operations Manager
                    </Typography>
                    <Badge
                        sx={{ mr: 2, cursor: 'pointer' }}
                        badgeContent={notificationState.notifications}
                        color="error"
                        onClick={() => handleNotifications()}
                    >
                        <NotificationsIcon />
                    </Badge>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: { xs: 1, md: 3 },
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    backgroundColor: (theme) => theme.palette.grey[100],
                    height: { xs: 'auto', md: '100vh' },
                }}
            >
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
};

export default Layout;

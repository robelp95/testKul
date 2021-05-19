import React, {useContext} from 'react';
import clsx from 'clsx';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Button from "@material-ui/core/Button";
import {withRouter} from 'react-router-dom';
import {UserContext} from "./Context/UserContext";
import {useRouteMatch} from "react-router";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));


const Header = props => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const {state} = useContext(UserContext);

    const { history, handleLogin, handleLogout} = props;

    let { path, url } = useRouteMatch();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleMenuClick = (pageUrl) => {
        history.push(pageUrl);
        handleDrawerClose();
    }

    return (

        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >

                <Toolbar>
                    {
                        state.user && (
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                className={clsx(classes.menuButton, open && classes.hide)}
                            >
                                <MenuIcon />
                            </IconButton>
                        )
                    }

                    <Typography variant="h6" noWrap style={{flexGrow:1}} > {/* flexGrow empuja el contenido a la derecha*/}
                        Kulko.app
                    </Typography>
                    <div>
                    {
                        !state.user ?
                            (<Button color="inherit" onClick={handleLogin }>Login clientes</Button>) :
                            (<Button color="inherit" onClick={handleLogout }>Logout</Button>)
                    }
                    </div>

                </Toolbar>
            </AppBar>
            {state.user &&
            (
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        <ListItem button key="Gestion Cliente" onClick={() => handleMenuClick('/app/cliente')}>
                            <ListItemIcon><MailIcon/></ListItemIcon>
                            <ListItemText primary="Gestion Cliente" />
                        </ListItem>
                        <ListItem button key="Mis Pedidos" onClick={() => handleMenuClick('/app/mis-pedidos')}>
                            <ListItemIcon><WhatsAppIcon/></ListItemIcon>
                            <ListItemText primary="Mis Pedidos" />
                        </ListItem>
                        <ListItem button key="Mi Menu" onClick={() => handleMenuClick('/' + state.user.brandName)}>
                            <ListItemIcon><InboxIcon/></ListItemIcon>
                            <ListItemText primary="Menu" />
                        </ListItem>
                    </List>
                    <Divider />
                </Drawer>
            )
            }

        </div>
    );
}

export default withRouter(Header);

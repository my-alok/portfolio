import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import { Link, Outlet } from 'react-router-dom';
import {AiOutlineHome, AiOutlineBlock, AiOutlineMail, AiOutlineFolderOpen} from 'react-icons/ai'


const useStyles = makeStyles((theme) => ({
    appbar: {
        background: 'none',
    },
    appbarTitle: {
        flexGrow: '1',
        fontWeight:'900'
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto',
        alignItems: 'flex-end'
    },
    icon: {
        color: '#fff',
        fontSize: '2rem',
        float: 'right'
    },
    colorTitle: {
        color: '#04d9ff'
    },
    
}));
export default function Header() {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const toggleDrawer = () => (event) => {
        setDrawerOpen(!drawerOpen);
    };

    const list = () => (
        <div>
            <List>
                <ListItem button key={'home'} component = {Link} to= '/'>
                    <ListItemIcon><AiOutlineHome/></ListItemIcon>
                    <ListItemText primary = 'Home'/>
                </ListItem>
                <ListItem button key={'portfolio'} component = {Link} to= '/portfolio'>
                    <ListItemIcon><AiOutlineBlock/></ListItemIcon>
                    <ListItemText primary = 'Portfolio'/>
                </ListItem>
            </List>
            <Divider />
            <List>
            <ListItem button key={'Blogs'} component = {Link} to= '/'>
                    <ListItemIcon><AiOutlineFolderOpen/></ListItemIcon>
                    <ListItemText primary = 'Blogs'/>
                </ListItem>
                <ListItem button key={'Contact'} component = {Link} to= '/portfolio'>
                    <ListItemIcon><AiOutlineMail/></ListItemIcon>
                    <ListItemText primary = 'Contact'/>
                </ListItem>
            </List>
        </div >
    );

    return (
        <div >
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.appbarTitle}>
                        ALOK.
                    </h1>
                    <IconButton onClick={toggleDrawer()}>
                        <SortIcon className={classes.icon} />
                    </IconButton>
                    <Drawer anchor={'top'} open={drawerOpen} onClose={toggleDrawer()}>
                        {list()}
                    </Drawer>
                </Toolbar>
            </AppBar>
            <Outlet/>
        </div>
    )
}
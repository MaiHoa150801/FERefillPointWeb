import React from "react";
import { useEffect } from 'react';
import Avatar from '@mui/material/Avatar'
import { useSnackbar } from 'notistack';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Footer from "../Sections/Footer";
import TopNavbar from "../Nav/TopNavbar";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { useCookies } from 'react-cookie';

import {
    Card,
    CardActions,
    CardContent,
    Divider
} from '@mui/material';

export default function Account() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const [cookies, setCookie] = useCookies();
    const { user, loading, isAuthenticated } = useSelector(state => state.user)
    setCookie('token', user.token , { path: '/' });
    useEffect(() => {
        if (isAuthenticated === false) {
            navigate("/login")
        }
    }, [isAuthenticated, navigate]);

    const getLastName = () => {
        const nameArray = user.name.split(" ");
        return nameArray[nameArray.length - 1];
    }
    
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
      setOpen(!open);
    };

    return (
        <>
            <TopNavbar />
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={2}>
                        <List
                            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                            subheader={
                                <ListSubheader component="div" id="nested-list-subheader">
                                    Nested List Items
                                </ListSubheader>
                            }
                        >
                            <ListItemButton>
                                <ListItemIcon>
                                    <SendIcon />
                                </ListItemIcon>
                                <ListItemText primary="Sent mail" />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon>
                                    <DraftsIcon />
                                </ListItemIcon>
                                <ListItemText primary="Drafts" />
                            </ListItemButton>
                            <ListItemButton onClick={handleClick}>
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary="Inbox" />
                                {open ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemIcon>
                                            <StarBorder />
                                        </ListItemIcon>
                                        <ListItemText primary="Starred" />
                                    </ListItemButton>
                                </List>
                            </Collapse>
                        </List>
                    </Grid>
                    <Grid item xs={6} md={10}>
                        <Container maxWidth="sm">
                            <CardContent>
                                <Box
                                    sx={{
                                        alignItems: 'center',
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}
                                >
                                    <Avatar
                                        src={user.avatar.url}
                                        sx={{
                                            height: 64,
                                            mb: 2,
                                            width: 64
                                        }}
                                    />
                                    <Typography
                                        color="textPrimary"
                                        gutterBottom
                                        variant="h5"
                                    >
                                        {user.name}
                                    </Typography>
                                </Box>
                            </CardContent>
                            <div className="tab-pane active" id="profile">
                                <h6>YOUR PROFILE INFORMATION</h6>
                                <hr />
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="fullName">Full Name</label>
                                        <input type="text" className="form-control" id="fullName" value={user.name.split(" ", 1)} disabled />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="fullName">Phone</label>
                                        <input type="text" className="form-control" id="phone" value={user.phone} disabled />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="url">Email</label>
                                        <input type="text" className="form-control" value={user.email} disabled />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="location">Location</label>
                                        <input type="text" className="form-control" id="location" placeholder="Enter your location" defaultValue="Bay Area, San Francisco, CA" disabled />
                                    </div>
                                    {/* {/* <Link to="/account/update" className="text-sm text-primary-blue font-medium ml-3 sm:ml-8 cursor-pointer">Edit Profile</Link> */}
                                    <Link to="/admin/dashboard" className="text-sm text-primary-blue font-medium ml-3 sm:ml-8">Change Password</Link> 
                                </form>
                            </div>
                        </Container>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}



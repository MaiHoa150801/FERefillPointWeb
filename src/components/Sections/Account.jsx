import React from "react";
import { useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Sidebar from "./Sidebar";
import Loader from "../Sections/Layout/Loader";

import {
    CardContent,
} from '@mui/material';

const Account = ({ activeTab, children }) => {

    const navigate = useNavigate();

    const { user, loading, isAuthenticated } = useSelector(state => state.user)
    console.log(user + "account");

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
            {loading ? <Loader /> :
                <div className="wrapper">

                    <Sidebar activeTab={activeTab} />

                    
                    {children}


                </div>

            }

        </>
    );
}

export default Account;


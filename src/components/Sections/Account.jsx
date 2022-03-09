import React from "react";
import { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar'
import { useSnackbar } from 'notistack';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Helmet } from "react-helmet";
import Footer from "../Sections/Footer";
import TopNavbar from "../Nav/TopNavbar";

export default function Account() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const { user, loading, isAuthenticated } = useSelector(state => state.user)

    useEffect(() => {
        if (isAuthenticated === false) {
            navigate("/login")
        }
    }, [isAuthenticated, navigate]);

    const getLastName = () => {
        const nameArray = user.name.split(" ");
        return nameArray[nameArray.length - 1];
    }

    // const handleLogout = () => {
    //     dispatch(logoutUser());
    //     enqueueSnackbar("Logout Successfully", { variant: "success" });
    //     navigate("/login");
    // }

    return (

        <>
            <TopNavbar />
            <Helmet>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.min.css" rel="stylesheet" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
            </Helmet>
            <div className="container rounded bg-white mt-5 mb-5">
                <div className="row">
                    <div className="col-md-3 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                            <img className=" mt-5" width="120px" src={user.avatar.url} /><span className="font-weight-bold">Hello, {user.name}</span><span className="text-black-50">{user.email}</span><span> </span></div>
                    </div>
                    <div className="col-md-5 border-right">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <span className="text-right">Profile Infomation

                                </span>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-6"><label className="labels">First Name</label><input type="text" className="form-control" value={user.name.split(" ", 1)} disabled /></div>
                                <div className="col-md-6"><label className="labels">Last Name</label><input type="text" className="form-control" value={getLastName()} disabled /></div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12"><label className="labels">Mobile Number</label><input type="text" className="form-control" value={user.phone} disabled /></div>
                                <div className="col-md-12"><label className="labels">Email</label><input type="text" className="form-control" value={user.email} disabled /></div>
                                <span className="font-medium text-lg">Email Address
                                    <Link to="/account/update" className="text-sm text-primary-blue font-medium ml-3 sm:ml-8 cursor-pointer">Edit</Link>
                                    <Link to="/password/update" className="text-sm text-primary-blue font-medium ml-3 sm:ml-8">Change Password</Link>
                                </span>
                            </div>
                            <div className="row mt-3">
                                
                            </div>
                            <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Save Profile</button></div>
                        </div>
                    </div>
                    {/* <div className="col-md-4">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span className="border px-3 p-1 add-experience"><i className="fa fa-plus" />&nbsp;Experience</span></div><br />
                            <div className="col-md-12"><label className="labels">Experience in Designing</label><input type="text" className="form-control" placeholder="experience" defaultValue /></div> <br />
                            <div className="col-md-12"><label className="labels">Additional Details</label><input type="text" className="form-control" placeholder="additional details" defaultValue /></div>
                        </div>
                    </div> */}
                </div>
            </div>
            <Footer />
        </>
    );
}



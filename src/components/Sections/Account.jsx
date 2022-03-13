import React from "react";
import { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar'
import { useSnackbar } from 'notistack';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from './Sidebar';
import { Helmet } from "react-helmet";
import Footer from "../Sections/Footer";
import TopNavbar from "../Nav/TopNavbar";

export default function Account() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const { user, loading, isAuthenticated } = useSelector(state => state.user)

    const [avatarPreview, setAvatarPreview] = useState("preview.png");

    useEffect(() => {
        if (isAuthenticated === false) {
            navigate("/login")
        }
    }, [isAuthenticated, navigate]);

    const getLastName = () => {
        const nameArray = user.name.split(" ");
        return nameArray[nameArray.length - 1];
    }

    return (

        <>
            <TopNavbar />
            <Helmet>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.min.css" rel="stylesheet" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
            </Helmet>
            <div className="container">
                {/* Breadcrumb */}
                <nav aria-label="breadcrumb" className="main-breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item"><a href="javascript:void(0)">User</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Profile Settings</li>
                    </ol>
                </nav>
                {/* /Breadcrumb */}
                <div className="row gutters-sm">
                    <div className="col-md-4 d-none d-md-block">
                        <div className="card">
                            <div className="card-body">
                                <div className="flex items-center gap-4 p-3 bg-white rounded-sm shadow">
                                    {/* <!-- user icon --> */}
                                    <div className="w-12 h-12 rounded-full">
                                        {/* <img draggable="false" className="h-full w-full object-cover rounded-full" src={user.avatar.url} alt="Avatar" /> */}
                                        <Avatar alt="Avatar " src={user.avatar.url} sx={{ width: 56, height: 56 }} />
                                    </div>
                                    {/* <!-- user icon --> */}
                                    <div className="flex flex-col gap-1">
                                        <p className="text-xs">Hello,</p>
                                        <h2 className="font-medium">{user.name}</h2>
                                    </div>
                                </div>

                                <nav className="nav flex-column nav-pills nav-gap-y-1">
                                    {/* <a href="#profile" data-toggle="tab" className="nav-item nav-link has-icon nav-link-faded active"> */}

                                    {/* </a> */}
                                    <a href="#profile" data-toggle="tab" className="nav-item nav-link has-icon nav-link-faded active">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user mr-2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx={12} cy={7} r={4} /></svg>Thông tin cá nhân
                                    </a>
                                    <a href="#account" data-toggle="tab" className="nav-item nav-link has-icon nav-link-faded">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-settings mr-2"><circle cx={12} cy={12} r={3} /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>Bán hàng
                                    </a>
                                    <a href="#security" data-toggle="tab" className="nav-item nav-link has-icon nav-link-faded">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-shield mr-2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>Đơn hàng
                                    </a>
                                    <a href="#notification" data-toggle="tab" className="nav-item nav-link has-icon nav-link-faded">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell mr-2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>Ví của tôi
                                    </a>
                                    <a href="#billing" data-toggle="tab" className="nav-item nav-link has-icon nav-link-faded">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-credit-card mr-2"><rect x={1} y={4} width={22} height={16} rx={2} ry={2} /><line x1={1} y1={10} x2={23} y2={10} /></svg>Đăng xuất
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header border-bottom mb-3 d-flex d-md-none">
                                <ul className="nav nav-tabs card-header-tabs nav-gap-x-1" role="tablist">
                                    <li className="nav-item">
                                        <a href="#profile" data-toggle="tab" className="nav-link has-icon active"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx={12} cy={7} r={4} /></svg></a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#account" data-toggle="tab" className="nav-link has-icon"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-settings"><circle cx={12} cy={12} r={3} /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg></a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#security" data-toggle="tab" className="nav-link has-icon"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-shield"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg></a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#notification" data-toggle="tab" className="nav-link has-icon"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg></a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#billing" data-toggle="tab" className="nav-link has-icon"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-credit-card"><rect x={1} y={4} width={22} height={16} rx={2} ry={2} /><line x1={1} y1={10} x2={23} y2={10} /></svg></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-body tab-content">
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
                                        <div className="form-group small text-muted">
                                            All of the fields on this page are optional and can be deleted at any time, and by filling them out, you're giving us consent to share this data wherever your user profile appears.
                                        </div>
                                        <Link to="/account/update" className="text-sm text-primary-blue font-medium ml-3 sm:ml-8 cursor-pointer">Edit Profile</Link>
                                        <Link to="/password/update" className="text-sm text-primary-blue font-medium ml-3 sm:ml-8">Change Password</Link>
                                    </form>
                                </div>
                                <div className="tab-pane" id="account">
                                    <h6>ACCOUNT SETTINGS</h6>
                                    <hr />
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="username">Username</label>
                                            <input type="text" className="form-control" id="username" aria-describedby="usernameHelp" placeholder="Enter your username" defaultValue="kennethvaldez" />
                                            <small id="usernameHelp" className="form-text text-muted">After changing your username, your old username becomes available for anyone else to claim.</small>
                                        </div>
                                        <hr />
                                        <div className="form-group">
                                            <label className="d-block text-danger">Delete Account</label>
                                            <p className="text-muted font-size-sm">Once you delete your account, there is no going back. Please be certain.</p>
                                        </div>
                                        <button className="btn btn-danger" type="button">Delete Account</button>
                                    </form>
                                </div>
                                <div className="tab-pane" id="security">
                                    <h6>SECURITY SETTINGS</h6>
                                    <hr />
                                    <form>
                                        <div className="form-group">
                                            <label className="d-block">Change Password</label>
                                            <input type="text" className="form-control" placeholder="Enter your old password" />
                                            <input type="text" className="form-control mt-1" placeholder="New password" />
                                            <input type="text" className="form-control mt-1" placeholder="Confirm new password" />
                                        </div>
                                    </form>
                                    <hr />
                                    <form>
                                        <div className="form-group">
                                            <label className="d-block">Two Factor Authentication</label>
                                            <button className="btn btn-info" type="button">Enable two-factor authentication</button>
                                            <p className="small text-muted mt-2">Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in.</p>
                                        </div>
                                    </form>
                                    <hr />
                                    <form>
                                        <div className="form-group mb-0">
                                            <label className="d-block">Sessions</label>
                                            <p className="font-size-sm text-secondary">This is a list of devices that have logged into your account. Revoke any sessions that you do not recognize.</p>
                                            <ul className="list-group list-group-sm">
                                                <li className="list-group-item has-icon">
                                                    <div>
                                                        <h6 className="mb-0">San Francisco City 190.24.335.55</h6>
                                                        <small className="text-muted">Your current session seen in United States</small>
                                                    </div>
                                                    <button className="btn btn-light btn-sm ml-auto" type="button">More info</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </form>
                                </div>
                                <div className="tab-pane" id="notification">
                                    <h6>NOTIFICATION SETTINGS</h6>
                                    <hr />
                                    <form>
                                        <div className="form-group">
                                            <label className="d-block mb-0">Security Alerts</label>
                                            <div className="small text-muted mb-3">Receive security alert notifications via email</div>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck1" defaultChecked />
                                                <label className="custom-control-label" htmlFor="customCheck1">Email each time a vulnerability is found</label>
                                            </div>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck2" defaultChecked />
                                                <label className="custom-control-label" htmlFor="customCheck2">Email a digest summary of vulnerability</label>
                                            </div>
                                        </div>
                                        <div className="form-group mb-0">
                                            <label className="d-block">SMS Notifications</label>
                                            <ul className="list-group list-group-sm">
                                                <li className="list-group-item has-icon">
                                                    Comments
                                                    <div className="custom-control custom-control-nolabel custom-switch ml-auto">
                                                        <input type="checkbox" className="custom-control-input" id="customSwitch1" defaultChecked />
                                                        <label className="custom-control-label" htmlFor="customSwitch1" />
                                                    </div>
                                                </li>
                                                <li className="list-group-item has-icon">
                                                    Updates From People
                                                    <div className="custom-control custom-control-nolabel custom-switch ml-auto">
                                                        <input type="checkbox" className="custom-control-input" id="customSwitch2" />
                                                        <label className="custom-control-label" htmlFor="customSwitch2" />
                                                    </div>
                                                </li>
                                                <li className="list-group-item has-icon">
                                                    Reminders
                                                    <div className="custom-control custom-control-nolabel custom-switch ml-auto">
                                                        <input type="checkbox" className="custom-control-input" id="customSwitch3" defaultChecked />
                                                        <label className="custom-control-label" htmlFor="customSwitch3" />
                                                    </div>
                                                </li>
                                                <li className="list-group-item has-icon">
                                                    Events
                                                    <div className="custom-control custom-control-nolabel custom-switch ml-auto">
                                                        <input type="checkbox" className="custom-control-input" id="customSwitch4" defaultChecked />
                                                        <label className="custom-control-label" htmlFor="customSwitch4" />
                                                    </div>
                                                </li>
                                                <li className="list-group-item has-icon">
                                                    Pages You Follow
                                                    <div className="custom-control custom-control-nolabel custom-switch ml-auto">
                                                        <input type="checkbox" className="custom-control-input" id="customSwitch5" />
                                                        <label className="custom-control-label" htmlFor="customSwitch5" />
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </form>
                                </div>
                                <div className="tab-pane" id="billing">
                                    <h6>BILLING SETTINGS</h6>
                                    <hr />
                                    <form>
                                        <div className="form-group">
                                            <label className="d-block mb-0">Payment Method</label>
                                            <div className="small text-muted mb-3">You have not added a payment method</div>
                                            <button className="btn btn-info" type="button">Add Payment Method</button>
                                        </div>
                                        <div className="form-group mb-0">
                                            <label className="d-block">Payment History</label>
                                            <div className="border border-gray-500 bg-gray-200 p-3 text-center font-size-sm">You have not made any payment.</div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}



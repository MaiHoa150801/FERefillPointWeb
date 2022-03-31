import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import MenuIcon from '@mui/icons-material/Menu';
// import TopSidebar from '../Nav/TopNavbar';
import Chart from 'chart.js/auto';
import { Doughnut, Line, Pie, Bar } from 'react-chartjs-2';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUsers } from '../../actions/userAction';
import { getSliderProducts, deleteProduct } from '../../actions/productAction';
import { getAllShops } from '../../actions/shopAction';

const Dashboard = () => {

    const dispatch = useDispatch();

    const { users } = useSelector((state) => state.users);
    const { products, error } = useSelector((state) => state.products);
    console.log(products);
    const { shops } = useSelector((state) => state.shops);
    console.log(shops);
    useEffect(() => {
        dispatch(getAllUsers());
        // dispatch(getSliderProducts());
        dispatch(getAllShops());
    }, []);


    return (
        <>
            <div className="container-fluid">
                <h2>Dashboard</h2>
                <div className="row">
                    <div className="col-xl-3 col-md-6">
                        <div className="card bg-primary text-white mb-4">
                            <div className="card-body">Total Users</div>
                            <div className="card-footer d-flex align-items-center justify-content-between">
                                <a className="small text-white stretched-link" >{users.length} </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card bg-warning text-white mb-4">
                            <div className="card-body">Total Products</div>
                            <div className="card-footer d-flex align-items-center justify-content-between">
                                <a className="small text-white stretched-link" >{users.length}</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card bg-success text-white mb-4">
                            <div className="card-body">Total Products</div>
                            <div className="card-footer d-flex align-items-center justify-content-between">
                                <a className="small text-white stretched-link" >{users.length}</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card bg-danger text-white mb-4">
                            <div className="card-body">Total Users</div>
                            <div className="card-footer d-flex align-items-center justify-content-between">
                                <a className="small text-white stretched-link" >{users.length}</a>
                            </div>
                        </div>
                    </div>
                </div>

               
            </div>

        </>
    );
};

export default Dashboard;

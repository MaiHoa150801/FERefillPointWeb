import React from "react";
import { Helmet } from "react-helmet";
import '../style/styles.css';
import AdminNavbar from "../components/Admin/AdminNavbar";
import Sidebar from "../components/Admin/Sidebar1";
// Sections
import { useEffect } from 'react';
import Chart from 'chart.js/auto'
import { Doughnut, Line, Pie, Bar } from 'react-chartjs-2';
import { useSelector, useDispatch } from 'react-redux';
import { getAdminProducts } from '../actions/productAction';
import { getAllOrders } from '../actions/orderAction';
import { getAllUsers } from '../actions/userAction';

const AdminLayout = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);

    const { users } = useSelector((state) => state.users);

    console.log(users);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const date = new Date();
    const lineState = {
        labels: months,
        datasets: [
            
        ],
    };

    const statuses = ['Processing', 'Shipped', 'Delivered'];

    
    return (
        <>
            <Helmet>
                {/* Admin Layout */}
                <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/all.min.js" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
            </Helmet>
            <div>
                <AdminNavbar />
                <div id="layoutSidenav">
                    <div id="layoutSidenav_nav">
                        <Sidebar />
                    </div>
                    <div id="layoutSidenav_content">
                        <main>
                            <div className="container-fluid px-4">
                                Dashboard
                                <div className="row">
                                    <div className="col-xl-3 col-md-6">
                                        <div className="card bg-primary text-white mb-4">
                                            <div className="card-body">Total Sales Amount</div>
                                            <div className="card-footer d-flex align-items-center justify-content-between">
                                                <a className="small text-white stretched-link" >{users.length} </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-6">
                                        <div className="card bg-warning text-white mb-4">
                                            <div className="card-body">Total Orders</div>
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

                                <div className="card mb-4">
                                    <div className="card-header">
                                        <i className="fas fa-table me-1" />
                                        DataTable
                                    </div>
                                    <div className="card-body">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">First</th>
                                                    <th scope="col">Last</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Handle</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>Otto</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>Otto</td>
                                                    <td>Otto</td>
                                                    <td>@fat</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>Larry</td>
                                                    <td>Otto</td>
                                                    <td>@fat</td>
                                                    <td>the Bird</td>
                                                    <td>@twitter</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="card mb-4">
                                    <div className="bg-white rounded-xl h-auto w-full shadow-lg p-2">
                                        <Line data={lineState} />
                                    </div>
                                </div>
                            </div>
                        </main>

                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminLayout;


import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import MenuIcon from '@mui/icons-material/Menu';
// import TopSidebar from '../Nav/TopNavbar';
import Chart from 'chart.js/auto';
import { Doughnut, Line, Pie, Bar } from 'react-chartjs-2';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUsers } from '../../actions/userAction';
import { getSliderProducts, deleteProduct } from '../../actions/productAction';
import { DataGrid } from '@mui/x-data-grid';
import Actions from '../../components/Admin/Actions';
import Paper from '@mui/material/Paper';
import { clearErrors, deleteUser } from '../../actions/userAction';
import { DELETE_USER_RESET } from '../../constants/userConstants';
import { useSnackbar } from 'notistack';

const Shippers = () => {
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();

    const { users } = useSelector((state) => state.users);
    console.log(users);
    const { products, error } = useSelector((state) => state.products);

    const { loading, isDeleted, error: deleteError } = useSelector((state) => state.profile);

    useEffect(() => {
        if (error) {
            enqueueSnackbar(error, { variant: "error" });
            dispatch(clearErrors());
        }
        if (deleteError) {
            enqueueSnackbar(deleteError, { variant: "error" });
            dispatch(clearErrors());
        }
        if (isDeleted) {
            enqueueSnackbar("User Deleted Successfully", { variant: "success" });
            dispatch({ type: DELETE_USER_RESET });
        }
        dispatch(getAllUsers());
    }, [dispatch, error, deleteError, isDeleted, enqueueSnackbar]);

    const deleteUserHandler = (id) => {
        dispatch(deleteUser(id));
    }

    const columns = [
        {
            field: "id",
            headerName: " ID ",
            minWidth: 100,
            flex: 0.1,
        },
        {
            field: "name",
            headerName: "Tên ",
            minWidth: 200,
            flex: 0.3,

        },
        {
            field: "gmail",
            headerName: "Gmail",
            minWidth: 100,
            flex: 0.2,
        },
        {
            field: "phone",
            headerName: "SĐT",
            headerAlign: "left",
            align: "left",
            minWidth: 70,
            flex: 0.1,
        },
        {
            field: "address",
            headerName: "Địa chỉ",
            type: "number",
            minWidth: 100,
            headerAlign: "left",
            align: "left",
            flex: 0.2,
        },
        {
          field: "role",
          headerName: "Vai trò",
          type: "number",
          minWidth: 100,
          headerAlign: "left",
          align: "left",
          flex: 0.2,

        },
        {
            field: "actions",
            headerName: "Actions",
            minWidth: 100,
            flex: 0.1,
            type: "number",
            sortable: false,
            renderCell: (params) => {
                return (
                    <Actions editRoute={'user'}
                    deleteHandler={deleteUserHandler}
                    id={params.row.id} name={params.row.name}/>
                );
            },
        },
    ];

    const rows = [];

    useEffect(() => {
        dispatch(getAllUsers());
        
    }, []);

    users && users.forEach((item) => {
        rows.unshift({
            id: item._id,
            name: item.name,
            gmail: item.email,
            phone: item.phone,
            address: item.address,
            role: item.role
        });

    });

    return (
        <>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    disableSelectIconOnClick
                    sx={{
                        boxShadow: 0,
                        border: 0,
                    }}
                />
            </Paper>

        </>
    );
};

export default Shippers;

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

const Produts = () => {

    const dispatch = useDispatch();

    const { users } = useSelector((state) => state.users);
    console.log(users);
    const { products, error } = useSelector((state) => state.products);

    const deleteProductHandler = (id) => {
        dispatch(deleteProduct(id));
      };
      
    const columns = [
        {
            field: 'id',
            headerName: ' ID SP',
            minWidth: 100,
            flex: 0.1,
        },
        {
            field: 'name',
            headerName: 'Tên SP',
            minWidth: 200,
            flex: 0.3,
        },
        {
            field: 'description',
            headerName: 'Mô tả',
            minWidth: 100,
            flex: 0.2,
        },
        // {
        //   field: "category",
        //   headerName: "Danh mục",
        //   minWidth: 100,
        //   flex: 0.2,
        // },
        {
            field: 'measure',
            headerName: 'Đơn vị',
            headerAlign: 'left',
            align: 'left',
            minWidth: 70,
            flex: 0.1,
        },
        {
            field: 'unit_price',
            headerName: 'Giá',
            type: 'number',
            minWidth: 100,
            headerAlign: 'left',
            align: 'left',
            flex: 0.2,
        },
        {
            field: 'sale_price',
            headerName: 'Giá đã giảm',
            type: 'number',
            minWidth: 100,
            headerAlign: 'left',
            align: 'left',
            flex: 0.2,
        },
        {
            field: 'tradeMarkName',
            headerName: 'Nhãn hàng',
            minWidth: 100,
            flex: 0.1,
            align: 'left',
            headerAlign: 'left',
        },
        {
            field: 'actions',
            headerName: 'Actions',
            minWidth: 100,
            flex: 0.1,
            type: 'number',
            sortable: false,
            renderCell: (params) => {
                return (
                    <Actions
                        editRoute={'product'}
                        deleteHandler={deleteProductHandler}
                        id={params.row.id}
                    />
                );
            },
        },
    ];
    const rows = [];

    // const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSliderProducts());
    }, [dispatch]);


    products && products.forEach((item) => {
        rows.unshift({
            id: item.id,
            name: item.name,
            measure: item.measure,
            description: item.description,
            unit_price: item.unit_price,
            sale_price: item.sale_price,
            tradeMarkName: item.trademark && item.trademark.name,
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

export default Products;

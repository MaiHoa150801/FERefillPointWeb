import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getSliderProducts } from '../../actions/productAction';
import { DataGrid } from '@mui/x-data-grid';

// const columns = [
//   { id: 'name', label: 'Name', minWidth: 170 },
//   { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
//   {
//     id: 'population',
//     label: 'Population',
//     minWidth: 170,
//     align: 'right',
//     format: (value) => value.toLocaleString('en-US'),
//   },
//   {
//     id: 'size',
//     label: 'Size\u00a0(km\u00b2)',
//     minWidth: 170,
//     align: 'right',
//     format: (value) => value.toLocaleString('en-US'),
//   },
//   {
//     id: 'density',
//     label: 'Density',
//     minWidth: 170,
//     align: 'right',
//     format: (value) => value.toFixed(2),
//   },
// ];

// function createData(name, code, population, size) {
//   const density = population / size;
//   return { name, code, population, size, density };
// }

// const rows = [
//   createData('India', 'IN', 1324171354, 3287263),
//   createData('China', 'CN', 1403500365, 9596961),
//   createData('Italy', 'IT', 60483973, 301340),
//   createData('United States', 'US', 327167434, 9833520),
//   createData('Canada', 'CA', 37602103, 9984670),
//   createData('Australia', 'AU', 25475400, 7692024),
//   createData('Germany', 'DE', 83019200, 357578),
//   createData('Ireland', 'IE', 4857000, 70273),
//   createData('Mexico', 'MX', 126577691, 1972550),
//   createData('Japan', 'JP', 126317000, 377973),
//   createData('France', 'FR', 67022000, 640679),
//   createData('United Kingdom', 'GB', 67545757, 242495),
//   createData('Russia', 'RU', 146793744, 17098246),
//   createData('Nigeria', 'NG', 200962417, 923768),
//   createData('Brazil', 'BR', 210147125, 8515767),
// ];


const ProductTable = () => {
  const { products, error } = useSelector((state) => state.products);
  console.log(products);
  const columns = [
    {
      field: "id",
      headerName: " ID SP",
      minWidth: 100,
      flex: 0.1,
    },
    {
      field: "name",
      headerName: "Tên SP",
      minWidth: 200,
      flex: 0.3,

    },
    // {
    //   field: "description",
    //   headerName: "Mô tả",
    //   minWidth: 100,
    //   flex: 0.2,
    // },
    // {
    //   field: "category",
    //   headerName: "Danh mục",
    //   minWidth: 100,
    //   flex: 0.2,
    // },
    {
      field: "measure",
      headerName: "Đơn vị",
      headerAlign: "left",
      align: "left",
      minWidth: 70,
      flex: 0.1,
    },
    {
      field: "unit_price",
      headerName: "Giá",
      type: "number",
      minWidth: 100,
      headerAlign: "left",
      align: "left",
      flex: 0.2,
    },
    {
      field: "sale_price",
      headerName: "Giá đã giảm",
      type: "number",
      minWidth: 100,
      headerAlign: "left",
      align: "left",
      flex: 0.2,

    },
    {
      field: "tradeMarkName",
      headerName: "Nhãn hàng",
      minWidth: 100,
      flex: 0.1,
      align: "left",
      headerAlign: "left",

    },
    {
      field: "actions",
      headerName: "Actions",
      minWidth: 100,
      flex: 0.3,
      type: "number",
      sortable: false,
    },
  ];

  const rows = [];
  // const [page, setPage] = React.useState(0);
  // const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };

  // products && products.forEach((item) => {
  //   rows.unshift({
  //     id: item._id,
  //     name: item.name,
  //     measure: item.measure,
  //     // description: item.description,
  //     unit_price: item.unit_price,
  //     sale_price: item.sale_price,
  //     tradeMarkName: item.tradeMarkName,
  //   });
  // });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSliderProducts());
  }, [dispatch]);

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      {/* <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
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
  );
};

export default ProductTable;
import React, { useEffect, useState } from 'react';
import MUIDataTable from 'mui-datatables';
import { getOrder, updateOrderAsyn } from '../../Service/OrderService';
import { Button } from '@mui/material';
export default function Order() {
  const [order, setOrder] = useState(null);
  const [tab, setTab] = useState('Chờ xác nhận');
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const res = await getOrder();
    setOrder(res.data.listOrder);
  };
  const updateOrder = async (orderId, status) => {
    const data = {
      status: status,
    };
    try {
      await updateOrderAsyn(orderId, data);
      getData();
    } catch (error) {
      console.log(error);
    }
  };
  const columns = [
    'ID đơn hàng',
    'Ngày đặt hàng',
    'Sản phẩm',
    'Khách hàng',
    'Ngày đổ đầy',
    'Mã giảm giá',
    'Địa chỉ',
    'Trạng thái',
    'Tổng tiền',
    '',
  ];
  const options = {
    filterType: 'checkbox',
  };
  const dataTable = [];
  order &&
    order.map((e) => {
      if (e.status == tab) {
        dataTable.push([
          e.id,
          e.date_created,
          e.list_order_id.map((p) => (
            <div>
              {p.product.name} <br /> x {p.quantity}
            </div>
          )),
          e.account_id.name,
          e.date_refill,
          e.voucher_id ? e.voucher_id.description : e.voucher_id,
          <div>
            <div>{e.shipAddress.latitude}</div>
            <div>{e.shipAddress.longitude}</div>
          </div>,
          e.status,
          e.total_money,
          e.status == 'Chờ xác nhận' && (
            <div>
              <Button
                onClick={() => {
                  updateOrder(e.id, 'Đã xác nhận');
                }}
                color="success"
                style={{ fontSize: '10px', backgroundColor: 'blue' }}
              >
                <div style={{ color: 'white' }}>Xác nhận đơn hàng</div>
              </Button>
              <Button
                onClick={() => {
                  updateOrder(e.id, 'Đã hủy');
                }}
                color="error"
                style={{ fontSize: '10px', backgroundColor: 'red' }}
              >
                <div style={{ color: 'white' }}>Hủy đơn hàng</div>
              </Button>
            </div>
          ),
        ]);
      }
    });
  return (
    <div style={{ width: '80%' }}>
      <div style={styles.tabs}>
        <div
          style={{
            ...styles.tab,
            ...(tab == 'Chờ xác nhận' ? styles.activeTab : {}),
          }}
        >
          <button
            onClick={() => setTab('Chờ xác nhận')}
            style={{
              ...styles.btnTab,
              ...(tab == 'Chờ xác nhận' ? styles.btnTabActive : {}),
            }}
          >
            Chờ xác nhận
          </button>
        </div>
        <div
          style={{
            ...styles.tab,
            ...(tab == 'Đã xác nhận' ? styles.activeTab : {}),
          }}
        >
          <button
            onClick={() => setTab('Đã xác nhận')}
            style={{
              ...styles.btnTab,
              ...(tab == 'Đã xác nhận' ? styles.btnTabActive : {}),
            }}
          >
            {' '}
            Đã xác nhận
          </button>
        </div>
        <div
          style={{
            ...styles.tab,
            ...(tab == 'Đang giao hàng' ? styles.activeTab : {}),
          }}
        >
          <button
            onClick={() => setTab('Đang giao hàng')}
            style={{
              ...styles.btnTab,
              ...(tab == 'Đang giao hàng' ? styles.btnTabActive : {}),
            }}
          >
            Đang giao hàng
          </button>
        </div>
        <div
          style={{
            ...styles.tab,
            ...(tab == 'Đã giao hàng' ? styles.activeTab : {}),
          }}
        >
          <button
            onClick={() => setTab('Đã giao hàng')}
            style={{
              ...styles.btnTab,
              ...(tab == 'Đã giao hàng' ? styles.btnTabActive : {}),
            }}
          >
            Đã giao hàng
          </button>
        </div>
        <div
          style={{
            ...styles.tab,
            ...(tab == 'Đã hủy' ? styles.activeTab : {}),
          }}
        >
          <button
            onClick={() => setTab('Đã hủy')}
            style={{
              ...styles.btnTab,
              ...(tab == 'Đã hủy' ? styles.btnTabActive : {}),
            }}
          >
            Đã hủy
          </button>
        </div>
      </div>
      <div style={{ width: '100%' }}>
        <MUIDataTable
          title={'Orders List'}
          data={dataTable}
          columns={columns}
          options={options}
        />
      </div>
    </div>
  );
}
const styles = {
  tabs: {
    justifyContent: 'center',
    display: 'flex',
    marginBottom: '20px',
  },
  tab: {
    marginRight: '10px',
    padding: '10px',
  },
  activeTab: {
    borderBottom: 'solid 2px blue',
  },
  btnTab: {
    border: 'none',
    backgroundColor: 'transparent',
  },
  btnTabActive: {
    border: 'none',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    color: 'blue',
  },
};

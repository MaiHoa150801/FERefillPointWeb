import React, { useEffect, useState } from 'react';
import MUIDataTable from 'mui-datatables';
import { Button } from '@mui/material';
import {
  createVouchers,
  deleteVoucherAsyn,
  getVouchers,
  updateVoucher,
} from '../../Service/VoucherService';
import {
  Form,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'react-bootstrap';
export default function Voucher() {
  const [form, setForm] = useState({
    code: '',
    description: '',
    expiry_date: new Date().toISOString().split('T')[0],
    discount: '',
    quantity: '',
    type: 'Saler voucher',
  });
  const [voucher, setVoucher] = useState(null);
  const [err, setErr] = useState('');
  const [typeAction, setTypeAction] = useState('add');
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const res = await getVouchers();
    setVoucher(res.data.voucher);
  };
  const setUpdate = (data) => {
    console.log(data);
    setForm(data);
    setTypeAction('update');
    setShow(true);
  };
  const deleteVoucher = async (voucherId) => {
    try {
      await deleteVoucherAsyn(voucherId);
      getData();
    } catch (error) {}
  };
  const columns = ['Mô tả', 'Mã', 'Giảm giá', 'Ngày hết hạn', 'Số lượng', ''];
  const options = {
    filterType: 'checkbox',
  };
  const dataTable = [];
  voucher &&
    voucher.map((e) => {
      dataTable.push([
        e.description,
        e.code,
        e.discount,
        e.expiry_date.split('T')[0],
        e.quantity,
        <div>
          <Button
            onClick={() => {
              setUpdate(e);
            }}
            color="success"
            style={{ fontSize: '10px', backgroundColor: 'orange' }}
          >
            <div style={{ color: 'white' }}>Cập nhật</div>
          </Button>
          <Button
            onClick={() => {
              deleteVoucher(e.id);
            }}
            color="error"
            style={{ fontSize: '10px', backgroundColor: 'red' }}
          >
            <div style={{ color: 'white' }}>Xóa</div>
          </Button>
        </div>,
      ]);
    });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (typeAction == 'add') {
        await createVouchers(form);
      } else {
        let voucherId = form.id;
        delete form.id;
        await updateVoucher(voucherId, form);
      }
      handleClose();
      deleteData();
      getData();
    } catch (error) {
      setErr('Mã đã được sử dụng');
    }
  };

  const deleteData = () => {
    setTypeAction('add');
    setForm({
      code: '',
      description: '',
      expiry_date: new Date().toISOString().split('T')[0],
      discount: '',
      quantity: '',
    });
  };

  return (
    <div style={{ width: '80%' }}>
      <div style={{ width: '100%' }}>
        <Button
          color="success"
          style={{
            backgroundColor: 'blue',
            marginLeft: 'auto',
            marginBottom: '10px',
          }}
          onClick={handleShow}
        >
          Tạo mã giảm giá
        </Button>
        <MUIDataTable
          title={'Mã giảm giá'}
          data={dataTable}
          columns={columns}
          options={options}
        />
      </div>
      <Modal
        show={show}
        onHide={() => {
          handleClose();
          deleteData();
        }}
      >
        <Form
          validated={true}
          onSubmit={handleSubmit}
          style={{ width: '100%' }}
        >
          <ModalHeader>
            {typeAction == 'add' ? 'Thêm' : 'Cập nhật'} mã giảm giá
          </ModalHeader>
          <ModalBody>
            <Form.Group controlId="formBasicDes">
              <Form.Label>Mô tả</Form.Label>
              <Form.Control
                value={form.description}
                type="text"
                name="description"
                placeholder="Mô tả"
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicCode">
              <Form.Label>Mã</Form.Label>
              <Form.Control
                value={form.code}
                type="text"
                name="code"
                placeholder="Mã"
                onChange={handleChange}
                required
              />
              {err !== '' && <div style={{ color: 'red' }}>{err}</div>}
            </Form.Group>
            <Form.Group controlId="formBasicEx">
              <Form.Label>Ngày hết hạn</Form.Label>
              <Form.Control
                value={new Date(form.expiry_date).toISOString().split('T')[0]}
                min={new Date().toISOString().split('T')[0]}
                type="date"
                name="expiry_date"
                placeholder="Ngày hết hạn"
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicDis">
              <Form.Label>Giảm giá</Form.Label>
              <Form.Control
                value={form.discount}
                type="text"
                name="discount"
                placeholder="Giảm giá"
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicQuan">
              <Form.Label>Số lượng</Form.Label>
              <Form.Control
                value={form.quantity}
                type="number"
                name="quantity"
                placeholder="Số lượng"
                onChange={handleChange}
                required
              />
            </Form.Group>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={() => {
                handleClose();
                deleteData();
              }}
              color="info"
              style={{ backgroundColor: 'gray', marginRight: '10px' }}
            >
              Thoát
            </Button>
            <Button
              type="submit"
              color="success"
              style={{ backgroundColor: 'green' }}
            >
              {typeAction == 'add' ? 'Thêm' : 'Cập nhật'}
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  );
}

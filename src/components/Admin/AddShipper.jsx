import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import {
    Badge,
    Button,
    Card,
    Form,
    Navbar,
    Nav,
    Container,
    Row,
    Col,
} from "react-bootstrap";
import Avatar from '@mui/material/Avatar';
import { clearErrors, createShipper } from '../../actions/shipperAction';
import { NEW_SHIPPER_RESET } from '../../constants/shipperConstants';

const AddShipper = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const { loading, success, error, shipper } = useSelector((state) => state.newShipper);
    console.log(loading);
    console.log(success);
    console.log(error);
    console.log(shipper);
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        password: "",
        cpassword: "",
    });

    const { name, email, address, phone, password, cpassword } = user;

    const [avatar, setAvatar] = useState();
    const [avatarPreview, setAvatarPreview] = useState("preview.png");

    const handleRegister = (e) => {
        e.preventDefault();
        if (!name && !email && !phone && !password && !cpassword && !avatar) {
            enqueueSnackbar("Không được để trống tất cả các trường", { variant: "error" });
            return;
        }
        if (!name) {
            enqueueSnackbar("Hãy nhập tên của bạn", { variant: "error" });
            return;
        }
        if (!address) {
            enqueueSnackbar("Hãy nhập địa chỉ của bạn", { variant: "error" });
            return;
        }
        if (!email) {
            enqueueSnackbar("Hãy nhập email của bạn", { variant: "error" });
            return;
        }
        if (!phone) {
            enqueueSnackbar("Hãy nhập số điện thoại của bạn", { variant: "error" });
            return;
        }
        if (!password) {
            enqueueSnackbar("Hãy nhập mật khẩu của bạn", { variant: "error" });
            return;
        }
        if (password.length < 8) {
            enqueueSnackbar("Mật khẩu ít nhất 8 kí tự nhé", { variant: "error" });
            return;
        }
        if (!cpassword) {
            enqueueSnackbar("Hãy nhập xác thực mật khẩu", { variant: "error" });
            return;
        }

        if (!avatar) {
            enqueueSnackbar("Hãy chọn hình đại diện", { variant: "error" });
            return;
        }

        const formData = new FormData();
        formData.set("name", name);
        formData.set("email", email);
        formData.set("address", address);
        formData.set("phone", phone);
        formData.set("password", password);
        formData.set("cpassword", cpassword);
        formData.set("avatar", avatar);
        dispatch(createShipper(formData));
        // enqueueSnackbar("Thêm shipper thành công", { variant: "success" });
        // navigate("/admin/shippers");
        

    }

    const handleDataChange = (e) => {
        if (e.target.name === "avatar") {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setAvatarPreview(reader.result);
                    setAvatar(reader.result);
                }
            };

            reader.readAsDataURL(e.target.files[0]);

        } else {
            setUser({ ...user, [e.target.name]: e.target.value });
        }
    }

    useEffect(() => {
        
        if (error) {
          enqueueSnackbar(error, { variant: "error" });
          dispatch(clearErrors());
        }
        if (loading == false) {
          enqueueSnackbar("Shipper Created", { variant: "success" });
          dispatch({ type: NEW_SHIPPER_RESET });
          navigate("/admin/shippers");
        }
      }, [dispatch, error, success, navigate, loading, enqueueSnackbar]);

    return (
        <>
            <Container fluid >
                <Row>
                    <Col md="8" >
                        <Card style={{ background: "LightBlue" }}>
                            <Card.Header>
                                <Card.Title as="h4">Hồ sơ Shipper</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form onSubmit={handleRegister} encType="multipart/form-data">
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Tên người vận chuyển</label>
                                                <Form.Control
                                                    name='name'
                                                    value={name} onChange={handleDataChange}
                                                    type="text"
                                                    placeholder="Tên "
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label htmlFor="exampleInputEmail1">
                                                    Email
                                                </label>
                                                <Form.Control
                                                    name='email'
                                                    value={email} onChange={handleDataChange}
                                                 
                                                    placeholder="Email"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Mật khẩu</label>
                                                <Form.Control
                                                    name='password'
                                                    value={password}
                                                    onChange={handleDataChange}
                                                    type="password"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Xác thực mật khẩu</label>
                                                <Form.Control
                                                    name='cpassword'
                                                    value={cpassword}
                                                    onChange={handleDataChange}
                                                    type="text"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md="5">
                                            <Form.Group>
                                                <label>Địa chỉ</label>
                                                <Form.Control
                                                    name='address'
                                                    value={address}
                                                    onChange={handleDataChange}
                                                    type="text"
                                                    placeholder="Số điện thoại"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col md="5">
                                            <Form.Group>
                                                <label>Số điện thoại</label>
                                                <Form.Control
                                                    name='phone'
                                                    value={phone}
                                                    onChange={handleDataChange}
                                                    type="text"
                                                    placeholder="Số điện thoại"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col md="2">
                                            <Form.Group>
                                                <label>Hình địa diện</label>
                                                <Form.Control
                                                    name='avatar'
                                                    onChange={handleDataChange}
                                                    type="file"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <br></br>
                                    <div >
                                        <span style={{ marginRight: "20px" }}>
                                            <Button
                                                className="btn-fill pull-right"
                                                type="submit"
                                                variant="info"
                                            >
                                                Thêm tài khoản
                                            </Button>
                                        </span>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="4">
                        <Card className="card-user">
                            <Card.Body>
                                <div className="author text-center " >
                                    <a href="" onClick={(e) => e.preventDefault()}>
                                        <Avatar
                                            alt="Avatar Preview"
                                            src={avatarPreview}
                                            sx={{ width: 56, height: 56 }}
                                        />
                                        <h5 className="title"></h5>
                                    </a>
                                </div>
                            </Card.Body>
                            <hr></hr>
                            <div className="button-container mr-auto ml-auto">
                                <Button
                                    className="btn-simple btn-icon"
                                    href=""
                                    onClick={(e) => e.preventDefault()}
                                    variant="link"
                                >
                                    <i className="fab fa-facebook-square"></i>
                                </Button>
                                <Button
                                    className="btn-simple btn-icon"
                                    href=""
                                    onClick={(e) => e.preventDefault()}
                                    variant="link"
                                >
                                    <i className="fab fa-twitter"></i>
                                </Button>
                                <Button
                                    className="btn-simple btn-icon"
                                    href=""
                                    onClick={(e) => e.preventDefault()}
                                    variant="link"
                                >
                                    <i className="fab fa-google-plus-square"></i>
                                </Button>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};
export default AddShipper;
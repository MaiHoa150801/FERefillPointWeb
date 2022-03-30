import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField'
import { Avatar, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { useSnackbar } from 'notistack';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, loadUser, updateProfile } from '../../actions/userAction';
import { UPDATE_PROFILE_RESET } from '../../constants/userConstants';
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

const UpdateProfile = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const { user } = useSelector((state) => state.user);
    const { error, isUpdated, loading } = useSelector((state) => state.profile);

    console.log(user + "update profile");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [avatar, setAvatar] = useState("");
    const [avatarPreview, setAvatarPreview] = useState("");
    const [address, setAddress] = useState("");


    const updateProfileHandler = (e) => {
        e.preventDefault();
        if (!email && !name && !phone && !avatar && !address) {
            enqueueSnackbar("không được để trống tất cả cả trường", { variant: "error" });
            return;
        }
        if (!email) {
            enqueueSnackbar("không được để trống email", { variant: "error" });
            return;
        }
        if (!name) {
            enqueueSnackbar("không được để trống name", { variant: "error" });
            return;
        }
        if (!phone) {
            enqueueSnackbar("không được để trống name", { variant: "error" });
            return;
        }
        if (!avatar) {
            enqueueSnackbar("không được để trống name", { variant: "error" });
            return;
        }

        const formData = new FormData();
        formData.set("name", name);
        formData.set("address", address);
        formData.set("email", email);
        formData.set("phone", phone);
        formData.set("avatar", avatar);

        dispatch(updateProfile(formData));
    }

    const handleUpdateDataChange = (e) => {
        const reader = new FileReader();
        setAvatar("");
        reader.onload = () => {
            if (reader.readyState === 2) {
                setAvatarPreview(reader.result);
                setAvatar(reader.result);
            }
        };

        reader.readAsDataURL(e.target.files[0]);
    }

    useEffect(() => {
        if (user) {
            setName(user.name);
            setEmail(user.email);
            setPhone(user.phone);
            setAddress(user.address);
            setAvatarPreview(user.avatar.url);
        }
        if (error) {
            enqueueSnackbar(error, { variant: "error" });
            dispatch(clearErrors());
        }
        if (isUpdated) {
            enqueueSnackbar("Profile Updated Successfully", { variant: "success" });
            dispatch(loadUser());
            navigate('/account');

            dispatch({ type: UPDATE_PROFILE_RESET });
        }
    }, [dispatch, user, isUpdated, navigate, enqueueSnackbar]);

    return (
        <>
            {loading}
            <Container fluid>
                <Row>
                    <Col md="8">
                        <Card fluid style={{ background: "LightBlue" }}>
                            <Card.Header>
                                <Card.Title as="h4">Cập nhật tiểu sử</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form onSubmit={updateProfileHandler} encType="multipart/form-data">
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Tên người dùng</label>
                                                <Form.Control
                                                    name='name'
                                                    value={name}
                                                    type="text"
                                                    onChange={(e) => setName(e.target.value)}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label htmlFor="exampleInputEmail1">
                                                    Địa chỉ email
                                                </label>
                                                <Form.Control
                                                    name='email'
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    type="email"

                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md="12">
                                            <Form.Group>
                                                <label>Địa chỉ</label>
                                                <Form.Control
                                                    name='address'
                                                    value={address}
                                                    onChange={(e) => setAddress(e.target.value)}
                                                    type="text"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="4">
                                            <Form.Group>
                                                <label>Số điện thoại</label>
                                                <Form.Control
                                                    name='phone'
                                                    value={phone}
                                                    onChange={(e) => setPhone(e.target.value)}
                                                    type="text"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pr-1" md="2">
                                            <Form.Group>
                                                {/* <label></label> */}
                                                <div className="avatarfield" style={{margin: "25px", width: "200px"}}>
                                                    Chọn hình đại diện
                                                    <input type="file" name="avatar" onChange={handleUpdateDataChange} className="hide_file"></input>
                                                </div>
                                                {/* <Form.Control
                                                    name="avatar"
                                                    accept="image/*"
                                                    onChange={handleUpdateDataChange}
                                                    type="file"
                                                    className="hidden"
                                                ></Form.Control> */}
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <br></br>
                                    <Button
                                        className="btn-fill pull-right"
                                        type="submit"
                                        variant="info"
                                    >
                                        Cập nhật tiểu sử
                                    </Button>

                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="4">
                        <Card className="card-user">
                            <Card.Body>
                                <div className="author text-center " >
                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                        <img
                                            alt="..."
                                            className="avatar border-gray rounded-circle"
                                            src={avatarPreview}
                                            width="150px"
                                            height="150px"
                                        ></img>
                                        <h5 className="title">{user.name}</h5>
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

export default UpdateProfile;
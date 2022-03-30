import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField'
import { Avatar, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { useSnackbar } from 'notistack';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, loadUser, updatePassword  } from '../../actions/userAction';
import { UPDATE_PASSWORD_RESET } from '../../constants/userConstants';
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

const UpdatePassword = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const { user } = useSelector((state) => state.user);
    const { error, isUpdated, loading } = useSelector((state) => state.profile);

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const updatePasswordSubmitHandler = (e) => {
        e.preventDefault();

        if (newPassword.length < 8) {
            enqueueSnackbar("Password length must be atleast 8 characters", { variant: "warning" });
            return;
        }
        if (newPassword !== confirmPassword) {
            enqueueSnackbar("Password Doesn't Match", { variant: "error" });
            return;
        }

        const formData = new FormData();
        formData.set("oldPassword", oldPassword);
        formData.set("newPassword", newPassword);
        formData.set("confirmPassword", confirmPassword);

        dispatch(updatePassword(formData));
    }

    useEffect(() => {
        if (error) {
            enqueueSnackbar(error, { variant: "error" });
            dispatch(clearErrors());
        }
        if (isUpdated) {
            enqueueSnackbar("Password Updated Successfully", { variant: "success" });
            dispatch(loadUser());
            navigate('/account');

            dispatch({ type: UPDATE_PASSWORD_RESET });
        }
    }, [dispatch, error, isUpdated, navigate, enqueueSnackbar]);

    return (
        <>
            {loading}
            <Container >
                <Row>
                    <Col md="8">
                        <Card fluid style={{  background:"LightBlue"}}>
                            <Card.Header>
                                <Card.Title as="h4">Cập nhật mật khẩu mới</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form  onSubmit={updatePasswordSubmitHandler}>
                                    <Row>
                                        <Col md="12" >
                                            <Form.Group>
                                                <label>Mật khẩu cũ</label>
                                                <Form.Control
                                                    value={oldPassword}
                                                    name="oldPassword"
                                                    type="password"
                                                    onChange={(e) => setOldPassword(e.target.value)}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label htmlFor="exampleInputEmail1">
                                                    Mật khẩu mới
                                                </label>
                                                <Form.Control
                                                    type="password"
                                                    name="newPassword"
                                                    value={newPassword}
                                                    onChange={(e) => setNewPassword(e.target.value)}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label htmlFor="exampleInputEmail1">
                                                    Xác thực mật khẩu
                                                </label>
                                                <Form.Control
                                                    type="password"
                                                    name="confirmPassword"
                                                    value={confirmPassword}
                                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                   
                                    <br></br>
                                    <Button
                                        className="btn-fill pull-right"
                                        type="submit"
                                        variant="info"
                                    >
                                        Cập nhật mật khẩu mới
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
                                            src={user.avatar.url}
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

export default UpdatePassword;
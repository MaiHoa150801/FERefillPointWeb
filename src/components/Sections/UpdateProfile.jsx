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
                        <Card>
                            <Card.Header>
                                <Card.Title as="h4">Update Profile</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form onSubmit={updateProfileHandler} encType="multipart/form-data">
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Username</label>
                                                <Form.Control
                                                    value={name}
                                                    type="text"
                                                    onChange={(e) => setName(e.target.value)}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label htmlFor="exampleInputEmail1">
                                                    Email address
                                                </label>
                                                <Form.Control
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
                                                <label>Address</label>
                                                <Form.Control
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
                                                <label>Phone</label>
                                                <Form.Control
                                                    value={phone}
                                                    onChange={(e) => setPhone(e.target.value)}
                                                    type="text"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pr-1" md="2">
                                            <Form.Group>
                                                <label>Avatar</label>
                                                <Form.Control
                                                    // value={user.phone}
                                                    onChange={handleUpdateDataChange}
                                                    type="file"
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
                                        Update Profile
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
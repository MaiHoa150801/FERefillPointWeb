import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
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

const Setting = () => {

    const navigate = useNavigate();

    const { user, loading, isAuthenticated } = useSelector(state => state.user)
    console.log(user + "account");
    console.log(user.avatar.url);
    useEffect(() => {
        if (isAuthenticated === false) {
            navigate("/login")
        }
    }, [isAuthenticated, navigate]);

    const getLastName = () => {
        const nameArray = user.name.split(" ");
        return nameArray[nameArray.length - 1];
    }

    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <>
            <Container fluid>
                <Row>
                    <Col md="8">
                        <Card>
                            <Card.Header>
                                <Card.Title as="h4">Profile</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form>
                                    <Row>
                                        {/* <Col className="pr-1" md="5">
                                            <Form.Group>
                                                <label>Company (disabled)</label>
                                                <Form.Control
                                                    defaultValue="Creative Code Inc."
                                                    disabled
                                                    placeholder="Company"
                                                    type="text"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col> */}
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Username</label>
                                                <Form.Control
                                                    value={user.name}
                                                    // placeholder="Username"
                                                    type="text"
                                                    disabled
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label htmlFor="exampleInputEmail1">
                                                    Email address
                                                </label>
                                                <Form.Control
                                                    value={user.email}
                                                    // placeholder="Email"
                                                    type="email"
                                                    disabled
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>First Name</label>
                                                <Form.Control
                                                    value={user.name && user.name.split(" ", 1)}
                                                    disabled
                                                    type="text"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Last Name</label>
                                                <Form.Control
                                                    value={getLastName()}
                                                    disabled
                                                    type="text"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <Form.Group>
                                                <label>Address</label>
                                                <Form.Control
                                                    value={user.address }
                                                    disabled
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
                                                    value={user.phone }
                                                    disabled
                                                    type="text"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    {/* <Row>
                                        <Col md="12">
                                            <Form.Group>
                                                <label>About Me</label>
                                                <Form.Control
                                                    cols="80"
                                                    defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in
                          that two seat Lambo."
                                                    placeholder="Here can be your description"
                                                    rows="4"
                                                    as="textarea"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row> */}
                                    <br></br>
                                    <Button
                                        className="btn-fill pull-right"
                                        type="submit"
                                        variant="info"
                                        href="account/update"
                                    >
                                        Update Profile
                                    </Button> 
                                    <Button
                                        className="btn-fill pull-right"
                                        type="button"
                                        href='/password/update'
                                        variant="info"
                                    >
                                        Update Password
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
                                    {/* <p className="description">michael24</p> */}
                                </div>
                                {/* <p className="description text-center">
                                    "Lamborghini Mercy <br></br>
                                    Your chick she so thirsty <br></br>
                                    I'm in that two seat Lambo"
                                </p> */}
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

export default Setting;

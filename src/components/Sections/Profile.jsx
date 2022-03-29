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
 
const Profile = () => {
 
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
            <Container fluid >
                <Row>
                    <Col md="8" >
                        <Card style={{  background:"LightBlue"}}>
                            <Card.Header>
                                <Card.Title as="h4">Hồ sơ khách hàng</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Tên người dùng</label>
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
                                                    Email
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
                                                <label>Tên</label>
                                                <Form.Control
                                                    value={user.name && user.name.split(" ", 1)}
                                                    disabled
                                                    type="text"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Họ</label>
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
                                                <label>Địa chỉ</label>
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
                                                <label>Số điện thoại</label>
                                                <Form.Control
                                                    value={user.phone }
                                                    disabled
                                                    type="text"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <br></br>
                                    <div >
                                        <span style={{ marginRight:"20px"}}>
                                            <Button
                                                className="btn-fill pull-right"
                                                type="submit"
                                                variant="info"
                                                href="account/update"
                                            >
                                                Cập nhật tiểu sử
                                            </Button>
                                        </span>
                                        <span style={{ marginRight:"20px"}}>
                                            <Button
                                                className="btn-fill pull-right"
                                                type="button"
                                                href='/password/update'
                                                variant="info"
                                            >
                                                Cập nhật mật khẩu
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
export default Profile;
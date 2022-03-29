import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useSnackbar } from 'notistack';
import Avatar from '@mui/material/Avatar';
import { clearErrors, createProduct } from '../../actions/productAction';
import TextField from '@mui/material/TextField';
import { NEW_PRODUCT_RESET } from '../../constants/productConstants';
import ImageIcon from '@mui/icons-material/Image';
import { LoadShop } from '../../actions/shopAction';
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


const AddProduct = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const { loading, success, error } = useSelector((state) => state.newProduct);
  const { user } = useSelector((state) => state.user);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [unit_price, setPrice] = useState(0);
  const [sale_price, setCuttedPrice] = useState(0);
  const [tradeMarkName, settradeMarkName] = useState("");
  const [list_images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [measure, setMeasure] = useState("");
  const [type_product_id, setProductId] = useState("");

  const [logo, setLogo] = useState("");
  const [logoPreview, setLogoPreview] = useState("");

  const handleLogoChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setLogoPreview(reader.result);
        setLogo(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  }

  const handleProductImageChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((oldImages) => [...oldImages, reader.result]);
          setImages((oldImages) => [...oldImages, reader.result]);
        }
      }
      reader.readAsDataURL(file);
    });
  }

  const newProductSubmitHandler = (e) => {
    e.preventDefault();

    if (!logo) {
      enqueueSnackbar("Add Brand Logo", { variant: "warning" });
      return;
    }

    if (list_images.length <= 0) {
      enqueueSnackbar("Add Product Images", { variant: "warning" });
      return;
    }

    const formData = new FormData();
    // console.log(shop.account_id)
    formData.set("name", name);
    formData.set("user", user._id);
    formData.set("type_product_id", type_product_id);
    formData.set("measure", measure);
    formData.set("description", description);
    formData.set("unit_price", unit_price);
    formData.set("sale_price", sale_price);
    formData.set("tradeMarkName", tradeMarkName);
    formData.set("logo", logo);

    list_images.forEach((image) => {
      formData.append("list_images", list_images);
    });

    dispatch(createProduct(formData));
  }

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: "error" });
      dispatch(clearErrors());
    }
    if (success) {
      enqueueSnackbar("Product Created", { variant: "success" });
      dispatch({ type: NEW_PRODUCT_RESET });
      navigate("/shop/products");
    }
  }, [dispatch, error, success, navigate, enqueueSnackbar]);

  return (
    <>
      {loading}
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Thêm Sản Phẩm</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={newProductSubmitHandler} encType="multipart/form-data" id="mainform">
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>ID</label>
                        <Form.Control
                          value={type_product_id}
                          onChange={(e) => setProductId(e.target.value)}
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">
                          Tên SP
                        </label>
                        <Form.Control
                          value={name}
                          type="text"
                          onChange={(e) => setName(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Mô tả</label>
                        <Form.Control
                          cols="80"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          rows="4"
                          as="textarea"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Đơn vị</label>
                        <Form.Control
                          value={measure}
                          onChange={(e) => setMeasure(e.target.value)}
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>Giá</label>
                        <Form.Control
                          value={unit_price}
                          onChange={(e) => setPrice(e.target.value)}
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>Giá đã giảm</label>
                        <Form.Control
                          value={sale_price}
                          onChange={(e) => setCuttedPrice(e.target.value)}
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>Nhãn hàng</label>
                        <Form.Control
                          value={tradeMarkName}
                          onChange={(e) => settradeMarkName(e.target.value)}
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>Ảnh nhãn hàng</label>
                        <Form.Control
                          name="logo"
                         
                          onChange={handleLogoChange}
                          type="file"
                          className="hidden"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                      {!logoPreview ? <ImageIcon /> :
                        <img draggable="false" src={logoPreview} alt="Brand Logo" className=" object-contain" width="100" height="60" />
                      }
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>Hình ảnh sản phẩm</label>
                        <Form.Control
                          name="images"
                          accept="image/*"
                          onChange={handleProductImageChange}
                          type="file"
                          multiple
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="4">
                      {imagesPreview.map((image, i) => (
                        <img draggable="false" src={image} alt="Product" key={i} className="w-full h-full object-contain" width="100" height="60" />
                      ))}
                    </Col>
                  </Row>

                  <br></br>
                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                  >
                    Thêm sản phẩm
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

export default AddProduct;

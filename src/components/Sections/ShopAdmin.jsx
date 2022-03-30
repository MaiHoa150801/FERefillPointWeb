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
import ChartistGraph from 'react-chartist';
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";


const ShopAdmin = () => {
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
      <Container fluid>
        <Row>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-chart text-warning"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Product</p>
                      <Card.Title as="h4">150GB</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-light-3 text-success"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Order</p>
                      <Card.Title as="h4">$ 1,345</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-vector text-danger"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Voucher</p>
                      <Card.Title as="h4">23</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-favourite-28 text-primary"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Followers</p>
                      <Card.Title as="h4">+45K</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ShopAdmin;

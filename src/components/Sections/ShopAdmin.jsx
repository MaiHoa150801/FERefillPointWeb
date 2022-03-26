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

const ShopAdmin = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const { loading, success, error } = useSelector((state) => state.newProduct);
  const { user } = useSelector((state) => state.user);
  // const { shop } = useSelector((state) => state.shop);
  // console.log(shop);
  // console.log(shop[].account_id);
  // useEffect(() => {
  //   dispatch(LoadShop(user._id));
  // }, [dispatch]);

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
      navigate("/saler/products");
    }
  }, [dispatch, error, success, navigate, enqueueSnackbar]);

  return (
    <>
      {loading}
      <div className="container">
        <section className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Thêm sản phẩm</h3>
          </div>
          <div className="panel-body">
            <form className="form-horizontal" onSubmit={newProductSubmitHandler} encType="multipart/form-data" id="mainform" >
              <div className="form-group">
                <label htmlFor="name" className="col-sm-3 control-label">ID sản phẩm</label>
                <TextField
                  label="ID"
                  variant="outlined"
                  size="small"
                  width="500px"
                  required
                  value={type_product_id}
                  onChange={(e) => setProductId(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name" className="col-sm-3 control-label">Tên sản phẩm</label>
                <TextField
                  label="Tên"
                  variant="outlined"
                  size="small"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div> {/* form-group // */}
              <div className="form-group">
                <label htmlFor="name" className="col-sm-3 control-label">Mô tả sản phẩm</label>
                <TextField
                  label="Mô tả"
                  multiline
                  rows={3}
                  required
                  variant="outlined"
                  size="small"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div> {/* form-group // */}
              <div className="form-group">
                <label htmlFor="name" className="col-sm-3 control-label">Đơn vị đo lường</label>
                <TextField
                  label="Đơn vị"
                  variant="outlined"
                  size="small"
                  required
                  value={measure}
                  onChange={(e) => setMeasure(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="about" className="col-sm-3 control-label">Giá</label>
                <TextField
                  label="Giá"
                  type="number"
                  variant="outlined"
                  size="small"
                  InputProps={{
                    inputProps: {
                      min: 0
                    }
                  }}
                  required
                  value={unit_price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <TextField
                  label="Giá đã giảm"
                  type="number"
                  variant="outlined"
                  size="small"
                  InputProps={{
                    inputProps: {
                      min: 0
                    }
                  }}
                  required
                  value={sale_price}
                  onChange={(e) => setCuttedPrice(e.target.value)}
                />
              </div> {/* form-group // */}
              <div className="form-group">
                <label htmlFor="about" className="col-sm-3 control-label">Hãng</label>
                <TextField
                  label="Brand"
                  type="text"
                  variant="outlined"
                  size="small"
                  required
                  value={tradeMarkName}
                  onChange={(e) => settradeMarkName(e.target.value)}
                />
                <div className="flex items-center justify-center border rounded-lg">
                  {!logoPreview ? <ImageIcon /> :
                    <img draggable="false" src={logoPreview} alt="Brand Logo" className=" object-contain" width="100" height="60" />
                  }
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-3 control-label">Logo</label>
                <label className="rounded bg-gray-400 text-center cursor-pointer text-white py-2 px-2.5 shadow hover:shadow-lg">
                  <input
                    type="file"
                    name="logo"
                    accept="image/*"
                    onChange={handleLogoChange}
                    className="hidden"
                  />
                  Choose Logo
                </label>
              </div>
              <div className="form-group">
                <div className="col-sm-3">
                  <h2 className="font-medium">Product Images</h2>
                  <div className="flex gap-2 overflow-x-auto h-32 border rounded">
                    {imagesPreview.map((image, i) => (
                      <img draggable="false" src={image} alt="Product" key={i} className="w-full h-full object-contain" width="600" height="400" />
                    ))}
                  </div>
                  <label className="rounded font-medium bg-gray-400 text-center cursor-pointer text-white p-2 shadow hover:shadow-lg my-2">
                    <input
                      type="file"
                      name="images"
                      accept="image/*"
                      multiple
                      onChange={handleProductImageChange}
                      className="hidden"
                    />
                    Choose Files
                  </label>
                </div>
              </div> {/* form-group // */}
              <hr />

              <div className="form-group">
                <div className="col-sm-offset-3 col-sm-9">
                  <button type="submit" className="btn btn-primary">Save</button>
                </div>
              </div> {/* form-group // */}

            </form>
          </div>{/* panel-body // */}
        </section>{/* panel// */}
      </div> {/* container// */}
    </>
  );
};

export default ShopAdmin;

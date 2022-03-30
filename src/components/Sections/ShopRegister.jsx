import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useSnackbar } from 'notistack';
import Avatar from '@mui/material/Avatar';
import { clearErrors, createShop } from '../../actions/shopAction';

const ShopRigister = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const { loading, success, error } = useSelector((state) => state.shop);

  const { user, isAuthenticated } = useSelector((state) => state.user);
  console.log(user);

  const [logo, setLogo] = useState();
  const [logoPreview, setLogoPreview] = useState('preview.png');

  const [shop, setShop] = useState({
    name: '',
    phone_number: '',
    email: '',
    address: '',
    latitude: '',
    longitude: '',
    description: '',
    account_id: '',
    role: '',
  });

  const { name, email, phone_number, address, latitude, longitude, description } = shop;

  const handleDataChange = (e) => {
    if (e.target.name === 'logo') {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setLogoPreview(reader.result);
          setLogo(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      // console.log(shop);
      setShop({ ...shop, [e.target.name]: e.target.value });
    }
  };

  const newShop = (e) => {

    e.preventDefault();

    // required field checks
    if (!name) {
      enqueueSnackbar('Vui lòng nhập tên', { variant: 'warning' });
      return;
    }
    if (!phone_number) {
      enqueueSnackbar('Vui lòng nhập số điện thoại', { variant: 'warning' });
      return;
    }
    if (!email) {
      enqueueSnackbar('Vui lòng nhập email', { variant: 'warning' });
      return;
    }
    if (!address) {
      enqueueSnackbar('Vui lòng nhập địa chỉ', { variant: 'warning' });
      return;
    }
    if (!latitude) {
      enqueueSnackbar('Vui lòng nhập kinh độ', { variant: 'warning' });
      return;
    }
    if (!longitude) {
      enqueueSnackbar('Vui lòng nhập vĩ độ', { variant: 'warning' });
      return;
    }
    if (!description) {
      enqueueSnackbar('Vui lòng nhập mô tả', { variant: 'warning' });
      return;
    }
    if (!logo) {
      enqueueSnackbar('Chọn hình ảnh', { variant: 'warning' });
      return;
    }

    const formData = new FormData();
    formData.set('role', user.role);
    formData.set('account_id', user._id);
    formData.set('name', name);
    formData.set('phone_number', phone_number);
    formData.set('email', email);
    formData.set('address', address);
    formData.set('latitude', latitude);
    formData.set('longitude', longitude);
    formData.set('description', description);
    formData.set('logo', logo);
    console.log(formData);

    dispatch(createShop(formData));
  };
  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: 'error' });
      dispatch(clearErrors());
    }
    if (success) {
      enqueueSnackbar('Cửa hàng của bạn đã được tạo.', { variant: 'success' });
      navigate('/shop/product');
    }
  }, [error, success, dispatch, enqueueSnackbar]);

  return (
    <>
      {isAuthenticated}
      <div id="content" className="flex" >
        <div class="container" fluid style={{  background:"LightBlue"}}>
          <div class="row justify-content-center">
            <div id="" className="col-8 col-lg-8 col-xl-8 mx-auto">
              <h4 class="text-center">Đăng kí cửa hàng của bạn</h4>
              <form
                onSubmit={newShop}
                encType="multipart/form-data"
                id="wlg_form"
              >
                <div className="row">
                  <div className="form-group col-3" control_id="country">
                    <Avatar
                      alt="Logo Preview"
                      src={logoPreview}
                      sx={{ width: 56, height: 56 }}
                    />
                  </div>
                  <div className="form-group col-6" control_id="country">
                    <div className="avatarfield">
                      Chọn hình
                      <input type="file" name="logo" onChange={handleDataChange} className="hide_file"></input>
                    </div>
                  </div>
                </div>
                <div className="wizard-steps-body">
                  <div className="wizard-steps-body-item body-1 active">
                    <fieldset className="wlg-form-group">
                      <div
                        className="wlg-form-control form-group"
                        control_id="website_name"
                      >
                        <label htmlFor="website_name">Tên trạm refill</label>
                        <input
                          className="form-control"
                          type="text"
                          name="name"
                          id="name"
                          value={name}
                          onChange={handleDataChange}
                        />
                      </div>
                    </fieldset>
                    <fieldset className="wlg-form-group">
                      <div
                        className="wlg-form-control form-group"
                        control_id="website_url"
                      >
                        <label htmlFor="website_url">Email</label>
                        <input
                          className="form-control"
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Enter..."
                          value={email}
                          onChange={handleDataChange}
                        />
                      </div>
                    </fieldset>
                    <fieldset className="wlg-form-group">
                      <div
                        className="wlg-form-control form-group"
                        control_id="website_url"
                      >
                        <label htmlFor="website_url">Phone</label>
                        <input
                          className="form-control"
                          type="text"
                          name="phone_number"
                          id="phone_number"
                          placeholder="Enter..."
                          value={phone_number}
                          onChange={handleDataChange}
                        />
                      </div>
                    </fieldset>
                    <fieldset className="wlg-form-group">
                      <div
                        className="wlg-form-control form-group"
                        control_id="country"
                      >
                        <label htmlFor="website_name">Địa chỉ</label>
                        <input
                          className="form-control"
                          type="text"
                          name="address"
                          id="address"
                          placeholder="Enter..."
                          value={address}
                          onChange={handleDataChange}
                        />
                      </div>
                    </fieldset>
                    <div>
                      <fieldset className="row">
                        <label htmlFor="address">
                          Xem trên google để biết chính xác địa chỉ của shop
                          bạn.
                        </label>
                        <div className="form-group col-6" control_id="country">
                          <label htmlFor="website_name">Kinh độ</label>
                          <input
                            className="form-control"
                            name="latitude"
                            
                            placeholder="Enter..."
                            value={latitude}
                            onChange={handleDataChange}
                          />
                        </div>
                        <div className="form-group col-6" control_id="country">
                          <label htmlFor="website_name">Vĩ độ</label>
                          <input
                            className="form-control"
                            name="longitude"
                          
                            placeholder="Enter..."
                            value={longitude}
                            onChange={handleDataChange}
                          />
                        </div>
                      </fieldset>
                    </div>
                    <fieldset className="wlg-form-group">
                      <div
                        className="wlg-form-control form-group"
                        control_id="email_address"
                      >
                        <label htmlFor="email_address">Mô tả</label>
                        <textarea
                          className="form-control"
                          type="text"
                          name="description"
                          id="description"
                          placeholder="Enter..."
                          value={description}
                          onChange={handleDataChange}
                        />
                      </div>
                    </fieldset>
                  </div>
                </div>
                {/* <FormControlLabel
                  control={<Checkbox />}
                  label="Agree with Privacy Policy of the website"
                /> */}
                <div className="wizard-steps-navigation">
                  <button
                    className="btn btn-primary active"
                    type="submit"
                    id="wlg_submit"
                  >
                    Bán hàng
                  </button>
                </div>
              </form>
            </div>
            <div class="col-6 col-lg-6 col-xl-6 mx-auto">
              { /*<div>
                <h2>
                  Privacy Policy of the app
                </h2>
                <p>
                  At <span className="website_name">Refill Point</span>, we
                  collect and manage user data according to the following
                  Privacy Policy.
                </p>
                <h3>Data Collected</h3>
                <p>
                  We collect information you provide directly to us. For
                  example, we collect information when you create an account,
                  subscribe, participate in any interactive features of our
                  services, fill out a form, request customer support or
                  otherwise communicate with us. The types of information we may
                  collect include your name, email address, postal address,
                  credit card information and other contact or identifying
                  information you choose to provide.
                </p>
                <p>
                  We collect anonymous data from every visitor of the Website to
                  monitor traffic and fix bugs. For example, we collect
                  information like web requests, the data sent in response to
                  such requests, the Internet Protocol address, the browser
                  type, the browser language, and a timestamp for the request.
                </p>
                <p>
                  We also use various technologies to collect information, and
                  this may include sending cookies to your computer. Cookies are
                  small data files stored on your hard drive or in your device
                  memory that helps us to improve our services and your
                  experience, see which areas and features of our services are
                  popular and count visits. We may also collect information
                  using web beacons (also known as "tracking pixels"). Web
                  beacons are electronic images that may be used in our services
                  or emails and to track count visits or understand usage and
                  campaign effectiveness. Our Privacy Policy was created with
                  the help of the{' '}
                  <a href="https://www.privacy-policy-template.com">
                    Privacy Policy Template Generator
                  </a>
                  .
                </p>
                <h3>Use of the Data</h3>
                <p>
                  We only use your personal information to provide you the{' '}
                  <span className="website_name">Refill Point</span> services or
                  to communicate with you about the Website or the services.
                </p>
                <p>
                  We employ industry standard techniques to protect against
                  unauthorized access of data about you that we store, including
                  personal information.
                </p>
                <p>
                  We do not share personal information you have provided to us
                  without your consent, unless:
                </p>
                <ul>
                  <li>Doing so is appropriate to carry out your own request</li>
                  <li>
                    We believe it's needed to enforce our legal agreements or
                    that is legally required
                  </li>
                  <li>
                    We believe it's needed to detect, prevent or address fraud,
                    security or technical issues
                  </li>
                </ul>
                <h3>Sharing of Data</h3>
                <p>
                  We don't share your personal information with third parties.
                  Aggregated, anonymized data is periodically transmitted to
                  external services to help us improve the Website and service.
                </p>
                <p>
                  We may allow third parties to provide analytics services.
                  These third parties may use cookies, web beacons and other
                  technologies to collect information about your use of the
                  services and other websites, including your IP address, web
                  browser, pages viewed, time spent on pages, links clicked and
                  conversion information.
                </p>
                <p>
                  We also use social buttons provided by services like Twitter,
                  Google+, LinkedIn and Facebook. Your use of these third party
                  services is entirely optional. We are not responsible for the
                  privacy policies and/or practices of these third party
                  services, and you are responsible for reading and
                  understanding those third party services' privacy policies.
                </p>
                <h3>Cookies</h3>
                <p>
                  We may use cookies on our site to remember your preferences.
                </p>
                <p>
                  For more general information on cookies, please read{' '}
                  <a href="https://www.generateprivacypolicy.com/#cookies">
                    "Cookies" article from the Privacy Policy Generator
                  </a>
                  .
                </p>
                <h3>Opt-Out, Communication Preferences</h3>
                <p>
                  You may modify your communication preferences and/or opt-out
                  from specific communications at any time. Please specify and
                  adjust your preferences.
                </p>
                <h3>Security</h3>
                <p>
                  We take reasonable steps to protect personally identifiable
                  information from loss, misuse, and unauthorized access,
                  disclosure, alteration, or destruction. But, you should keep
                  in mind that no Internet transmission is ever completely
                  secure or error-free. In particular, email sent to or from the
                  Sites may not be secure.
                </p>
                <h3>About Children</h3>
                <p>
                  The Website is not intended for children under the age of 13.
                  We do not knowingly collect personally identifiable
                  information via the Website from visitors in this age group.
                </p>
                <h3>Changes to the Privacy Policy</h3>
                <p>
                  We may amend this Privacy Policy from time to time. Use of
                  information we collect now is subject to the Privacy Policy in
                  effect at the time such information is used.
                </p>
                <p>
                  If we make major changes in the way we collect or use
                  information, we will notify you by posting an announcement on
                  the Website or sending you an email.
                </p>
              </div>*/}
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ShopRigister;

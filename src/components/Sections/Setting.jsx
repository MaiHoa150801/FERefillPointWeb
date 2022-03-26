import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Setting = () => {

    const navigate = useNavigate();

    const { user, loading, isAuthenticated } = useSelector(state => state.user)
    console.log(user + "account");

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
            <div id="content" className="flex">

                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-12 col-lg-10 col-xl-8 mx-auto">
                            <h2 class="h3 mb-4 page-title">Settings</h2>
                            <div class="my-4">
                                <ul class="nav nav-tabs mb-4" id="myTab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="false">Profile</a>
                                    </li>
                                </ul>
                                <form>
                                    <div class="row mt-5 align-items-center">
                                        <div class="col-md-3 text-center mb-5">
                                            <div class="avatar avatar-xl">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="..." class="avatar-img rounded-circle" />
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="row align-items-center">
                                                <div class="col-md-7">
                                                    <h4 class="mb-1">Hello,{user.name}</h4>
                                                    <p class="small mb-3"><span class="badge badge-dark">New York, USA</span></p>
                                                </div>
                                            </div>
                                            <div class="row mb-4">
                                                <div class="col-md-7">
                                                    <p class="text-muted">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit nisl ullamcorper, rutrum metus in, congue lectus. In hac habitasse platea dictumst. Cras urna quam, malesuada vitae risus at,
                                                        pretium blandit sapien.
                                                    </p>
                                                </div>
                                                <div class="col">
                                                    <p class="small mb-0 text-muted">Nec Urna Suscipit Ltd</p>
                                                    <p class="small mb-0 text-muted">P.O. Box 464, 5975 Eget Avenue</p>
                                                    <p class="small mb-0 text-muted">(537) 315-1481</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr class="my-4" />
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="firstname">Firstname</label>
                                            <input type="text" id="firstname" class="form-control" value={user.name && user.name.split(" ", 1)} disabled />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="lastname">Lastname</label>
                                            <input type="text" id="lastname" class="form-control" value={getLastName()} disabled />
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <label for="inputEmail4">Email</label>
                                        <input type="email" class="form-control" id="inputEmail4" value={user.email} disabled />
                                    </div>
                                    <div class="form-row">
                                        <label for="inputAddress5">Phone</label>
                                        <input type="text" class="form-control" id="inputAddress5" value={user.phone} disabled />
                                    </div>
                                    <div class="form-row">
                                        <label for="inputAddress5">Address</label>
                                        <input type="text" class="form-control" id="inputAddress5" value={user.address} disabled />
                                    </div>
                                    <hr class="my-4" />
                                    <div class="row mb-4">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="inputPassword4">Old Password</label>
                                                <input type="password" class="form-control" id="inputPassword5" />
                                            </div>
                                            <div class="form-group">
                                                <label for="inputPassword5">New Password</label>
                                                <input type="password" class="form-control" id="inputPassword5" />
                                            </div>
                                            <div class="form-group">
                                                <label for="inputPassword6">Confirm Password</label>
                                                <input type="password" class="form-control" id="inputPassword6" />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <p class="mb-2">Password requirements</p>
                                            <p class="small text-muted mb-2">To create a new password, you have to meet all of the following requirements:</p>
                                            <ul class="small text-muted pl-4 mb-0">
                                                <li>Minimum 8 character</li>
                                                <li>At least one special character</li>
                                                <li>At least one number</li>
                                                <li>Can’t be the same as a previous password</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Save Change</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
};

export default Setting;
import { Link, useNavigate } from 'react-router-dom';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import InventoryIcon from '@mui/icons-material/Inventory';
import GroupIcon from '@mui/icons-material/Group';
import ReviewsIcon from '@mui/icons-material/Reviews';
import AddBoxIcon from '@mui/icons-material/AddBox';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CloseIcon from '@mui/icons-material/Close';
import Avatar from '@mui/material/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import './Sidebar.css';
import { useSnackbar } from 'notistack';
import { logoutUser } from '../../actions/userAction';
import React from 'react';

const navMenu = [
    {
        icon: <EqualizerIcon />,
        label: "Dashboard",
        ref: "/admin/dashboard",
    },
    {
        icon: <InventoryIcon />,
        label: "Products",
        ref: "/admin/products",
    },
    {
        icon: <ShoppingBagIcon />,
        label: "Orders",
        ref: "/admin/orders",
    },
    {
        icon: <AddBoxIcon />,
        label: "Add Product",
        ref: "/admin/new_product",
    },
    {
        icon: <GroupIcon />,
        label: "Users",
        ref: "/admin/users",
    },
    {
        icon: <ReviewsIcon />,
        label: "Reviews",
        ref: "/admin/reviews",
    },
    {
        icon: <AccountBoxIcon />,
        label: "My Profile",
        ref: "/account",
    },
    {
        icon: <LogoutIcon />,
        label: "Logout",
    },
];

const Sidebar = ({ activeTab, setToggleSidebar }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const { user } = useSelector((state) => state.user);

    const handleLogout = () => {
        dispatch(logoutUser());
        enqueueSnackbar("Logout Successfully", { variant: "success" });
        navigate("/login");
    }

    return (
        <>
            <nav className="sb-sidenav accordion sb-sidenav-dark fixed" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav">
                        {navMenu.map((item, index) => {
                            const { icon, label, ref } = item;
                            return (
                                <>
                                    {label === "Logout" ? (
                                        <button onClick={handleLogout} className="bg-gray-700">
                                            <span>{icon}</span>
                                            <span>{label}</span>
                                        </button>
                                    ) : (
                                        <Link to={ref} className={`${activeTab === index ? "bg-gray-700" : "hover:bg-gray-700"} nav-link`}>
                                            <span>{icon}</span>
                                            <span>{label}</span>
                                        </Link>
                                    )}
                                </>
                            )
                        }
                        )}
                    </div>
                </div>
            </nav>
            
        </>
    )
};

export default Sidebar;

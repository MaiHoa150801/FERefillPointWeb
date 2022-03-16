import { useDispatch, useSelector } from 'react-redux';
import FolderIcon from '@mui/icons-material/Folder';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ChatIcon from '@mui/icons-material/Chat';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Link, useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { logoutUser } from '../../actions/userAction';
import React from 'react';
const Sidebar = ({ activeTab }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const { user } = useSelector(state => state.user);

    const handleLogout = () => {
        dispatch(logoutUser());
        enqueueSnackbar("Logout Successfully", { variant: "success" });
        navigate("/login");
    }

    return (
        <nav>
            <a>account1</a>
            <a>account2</a>
            <a>account3</a>
        </nav>
    );
};

export default Sidebar;

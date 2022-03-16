import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import MenuIcon from '@mui/icons-material/Menu';
import TopSidebar from '../Nav/TopNavbar';

const Dashboard = ({ activeTab, children }) => {

    const [onMobile, setOnMobile] = useState(false);
    const [toggleSidebar, setToggleSidebar] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 600) {
            setOnMobile(true);
        }
    }, [])

    return (
        <>
            <TopSidebar />
            <main className="flex min-h-screen mt-14 sm:min-w-full">
                {!onMobile && <Sidebar activeTab={activeTab} />}
                {children}
            </main>
            
        </>
    );
};

export default Dashboard;

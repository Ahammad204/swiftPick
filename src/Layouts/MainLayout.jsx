import React from 'react';
import {Outlet} from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar.jsx";
import Footer from "../Pages/Shared/Footer/Footer.jsx";

const MainLayout = () => {
    return (
        <>
            <Navbar  />
            <Outlet></Outlet>
            <Footer />
        </>
    );
};

export default MainLayout;
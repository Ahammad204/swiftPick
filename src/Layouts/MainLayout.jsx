import React from 'react';
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <Outlet></Outlet>
        </>
    );
};

export default MainLayout;
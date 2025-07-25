import React from 'react';
import Banner from "../Banner/Banner.jsx";
import HowItWorks from '../HowItWorks/HowItWorks.jsx';
import OurServices from '../OurServices/OurServices.jsx';
import Brands from '../Brands/Brands.jsx';

const Home = () => {
    return (
        <div>
            <Banner />
            <HowItWorks/>
            <OurServices/>
            <Brands/>
        </div>
    );
};

export default Home;
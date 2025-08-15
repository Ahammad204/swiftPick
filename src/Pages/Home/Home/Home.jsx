import React from 'react';
import Banner from "../Banner/Banner.jsx";
import HowItWorks from '../HowItWorks/HowItWorks.jsx';
import OurServices from '../OurServices/OurServices.jsx';
import Brands from '../Brands/Brands.jsx';
import Features from '../Features/Features.jsx';
import BMarchant from '../BMarchant/BMarchant.jsx';

const Home = () => {
    return (
        <div>
            <Banner />
            <HowItWorks/>
            <OurServices/>
            <Brands/>
            <Features></Features>
            <BMarchant ></BMarchant>
        </div>
    );
};

export default Home;
import React from 'react';
import Banner from "../Banner/Banner.jsx";
import HowItWorks from '../HowItWorks/HowItWorks.jsx';
import OurServices from '../OurServices/OurServices.jsx';

const Home = () => {
    return (
        <div>
            <Banner />
            <HowItWorks/>
            <OurServices/>
        </div>
    );
};

export default Home;
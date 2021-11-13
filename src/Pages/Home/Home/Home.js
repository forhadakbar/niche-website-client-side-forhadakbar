import React from 'react';
import Apartments from '../Apartments/Apartments';
import Banner from '../Banner/Banner';
import Pricing from '../Pricing/Pricing';
import Reviews from '../Reviews/Reviews';
import Subscription from '../Subscription/Subscription';


const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Apartments></Apartments>
            <Reviews></Reviews>
            <Pricing></Pricing>
            <Subscription></Subscription>

        </div>
    );
};

export default Home;
import React from 'react';
import Banner from '../Banner/Banner';
import PopularClass from '../PopularClass/PopularClass';
import PopularInstructors from '../PopularClass/PopularInstructors';
import { Fade } from "react-awesome-reveal";

const Home = () => {
    return (
        <Fade>
            <div>
                <Banner></Banner>
                <PopularClass></PopularClass>
                <PopularInstructors></PopularInstructors>
            </div>
        </Fade>
    );
};

export default Home;
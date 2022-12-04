import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div className='bg-white dark:bg-info px-10 md:px-0 duration-500'>
            <Banner></Banner>
            <About></About>
        </div>
    );
};

export default Home;
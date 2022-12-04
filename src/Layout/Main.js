import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Shared/Header/Header';

const Main = () => {
    return (
        <div className='relative'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;
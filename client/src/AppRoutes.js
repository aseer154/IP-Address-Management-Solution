import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/pages/HomeComponent';
import Login from './components/pages/LoginComponent';
import CreateIpAddress from './components/pages/AddIpAddressComponent';

import Header from './components/layouts/Header';

function AppRoutes()
{
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/user/login" element={ <Login /> } />

                <Route path="/create-ip-address" element={ <CreateIpAddress /> } />
            </Routes>
        </>
    );
}

export default AppRoutes;
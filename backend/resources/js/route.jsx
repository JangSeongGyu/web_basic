import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import PracticeMain from './practice/PracticeMain';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={`/home`} element={<Home />} />
                <Route path={`/practice/:number`} element={<PracticeMain />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;

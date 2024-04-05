import React from 'react';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LifeCycle from './practice/Hooks/Hooks';
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

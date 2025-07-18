import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import AppNav from './AppNav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route element={<AppNav />} >
                        <Route path="/" element={<Home />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

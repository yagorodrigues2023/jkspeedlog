
import React from 'react';
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import Login from '../login';
//import Home
import ResetPass from '../resetpass';

export default function App(){
    
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/reset-password" element={<ResetPass />} />
            </Routes>
        </Router>

    )   
}
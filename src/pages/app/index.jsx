import React from 'react';
import { HashRouter  as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../home';
import Login from '../login';
import ResetPass from '../resetpass';
//import styles from "./styles.module.css"

export default function App() {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<ResetPass />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

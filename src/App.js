import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

import Home from './pages/Home'
import Links from './pages/Links'
import Error from './pages/Error'

import './App.css';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/links" element={<Links />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;

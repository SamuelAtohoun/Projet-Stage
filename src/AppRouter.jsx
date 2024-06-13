import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js'
import Hotel from './pages/Hotel.js';
// import AboutPage from './pages/AboutPage';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/Hotel' element={<Hotel />}></Route>
      {/* <Route path="/about" element={<AboutPage />} /> */}
    </Routes>
  </Router>
);

export default AppRouter;

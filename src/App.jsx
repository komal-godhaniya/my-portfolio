import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Portfolio from './Component/Portfolio';
import Contact from './Component/Contact';
import Blog from './Component/Blog';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

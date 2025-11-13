import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; 
import Products from "./pages/Product";
import News  from "./pages/News";
import Contact from "./pages/Contact";
import AboutUs from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product" element={<Products />} /> 
          <Route path="news" element={<News />} />
          <Route path="contact" element={<Contact />} />
          <Route path="aboutus" element={<AboutUs />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

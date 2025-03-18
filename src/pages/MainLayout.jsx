import React from 'react'
import Blog from './Blog';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import ErrPage from './ErrPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainHeader from './MainHeader';
import MainFooter from './MainFooter';
import Home from './Home';
import BlogDetails from './BlogDetails';
import ServiceDetails from './ServiceDetails';

function MainLayout() {
    return (
        <BrowserRouter>
            <MainHeader />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/service" element={<Service />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog/details" element={<BlogDetails />} />
                <Route path="/service/details" element={<ServiceDetails />} />
                <Route path="*" element={<ErrPage />} />
            </Routes>
            <MainFooter />
        </BrowserRouter>
    )
}

export default MainLayout
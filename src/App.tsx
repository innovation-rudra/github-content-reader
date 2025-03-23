import React from "react";
import "./App.css";
import MainLayout from "./pages/MainLayout";
import { Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import ErrPage from "./pages/ErrPage";
import Home from "./pages/Home";
import BlogDetails from "./pages/BlogDetails";
import ServiceDetails from "./pages/ServiceDetails";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import ResetPassword from "@/pages/auth/ResetPassword";

const App: React.FC = () => {
  return (
    <Routes>
      {/* Wrap all pages inside MainLayout */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="service" element={<Service />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog/details" element={<BlogDetails />} />
        <Route path="service/details" element={<ServiceDetails />} />
        <Route path="admin" element={<Admin />} />
        <Route path="login" element={<Login />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="*" element={<ErrPage />} />
      </Route>
    </Routes>
  );
};

export default App;
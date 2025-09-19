import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Donations from "../pages/Donations";
import Volunteers from "../pages/Volunteers";
import Header from "../components/Header";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/volunteers" element={<Volunteers />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

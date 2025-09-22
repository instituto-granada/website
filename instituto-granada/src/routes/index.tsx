import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { routesMap } from "./routesMap";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {Object.values(routesMap).map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;

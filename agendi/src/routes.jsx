import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout/Layout";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
            <Route index element={Home} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default AppRoutes;
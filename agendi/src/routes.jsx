import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Schedules from "./pages/Schedules";
import Layout from "./Layout/Layout";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
            <Route index element={Home} />
            <Route path="/agendamentos" element={Schedules} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default AppRoutes;
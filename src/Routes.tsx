import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./widgets/layout/layout";
import { Home } from "./pages/Home";

export const PrivateRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <main>
      <div className="pattern" />
      <Outlet />
    </main>
  );
};

export default MainLayout;

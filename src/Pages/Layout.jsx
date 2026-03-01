import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer"; // path sahi ho

const Layout = () => {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Nav />

      <main style={{ paddingTop: "80px", flex: 1 }}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;

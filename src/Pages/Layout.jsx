import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Components/Nav'; // Nav ka sahi path check kar lein

const Layout = () => {
  return (
    <div>
      {/* Navbar hamesha upar rahega */}
      <Nav />
      
      {/* Pages yahan render honge */}
      <main style={{ paddingTop: '80px', minHeight: '100vh' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
import React from "react";

function Header() {
  return (
    <>
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-primary fixed">
        {/* Navbar Brand*/}
        <a className="navbar-brand ps-3" href="/">RefillPoint</a>
        {/* Sidebar Toggle*/}
        <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="/"><i className="fas fa-bars" /></button>
        {/* Navbar Search*/}
        
      </nav>
    </>
  );
}

export default Header;

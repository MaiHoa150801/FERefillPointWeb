import React from "react";


function Sidebar() {
  return (

    <nav className="sb-sidenav accordion sb-sidenav-dark fixed" id="sidenavAccordion">
      <div className="sb-sidenav-menu">
        <div className="nav">
          <div className="sb-sidenav-menu-heading">Core</div>
          <a className="nav-link" href="index.html">
            <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt" /></div>
            Dashboard
          </a>
          <a className="nav-link collapsed" href="/" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
            <div className="sb-nav-link-icon"><i className="fas fa-columns" /></div>
            Order
          </a>
          <a className="nav-link collapsed" href="/" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
            <div className="sb-nav-link-icon"><i className="fas fa-book-open" /></div>
            Product
          </a>
          <a className="nav-link" href="/">
            <div className="sb-nav-link-icon"><i className="fas fa-chart-area" /></div>
            Add Product
          </a>
          <a className="nav-link" href="/">
            <div className="sb-nav-link-icon"><i className="fas fa-table" /></div>
            User
          </a>
          <a className="nav-link" href="/">
            <div className="sb-nav-link-icon"><i className="fas fa-table" /></div>
            My Profile
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;

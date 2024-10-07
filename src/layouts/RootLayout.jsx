import React from "react";
import "./rootLayout.css"
import { Link,Outlet } from "react-router-dom"


const RootLayout = () => {
  return (
    <div className="rootLayout">
      <header>
        <Link to="/">
          <img src="logo.png" alt="" />
          <span>ABHI AI</span>
        </Link>
      </header>
      <main>
        <React.Fragment>
          <Outlet />
        </React.Fragment>
      </main>
    </div>
  );
};

export default RootLayout

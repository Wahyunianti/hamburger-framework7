import { Link, Panel, Toolbar } from "framework7-react";
import React from 'react';

const Bottombar: React.FC = () => {
  return (

    <Toolbar bottom tabbar style={{ zIndex: 1000 }}>
      <Link tabLink="#home" tabLinkActive>
        <i className="icon material-icons">home</i>
      </Link>
      <Link tabLink="#favorite">
        <i className="icon material-icons">favorite</i>
      </Link>
      <Link tabLink="#cart">
        <i className="icon material-icons">shopping_cart</i>
      </Link>
    </Toolbar>

  );
}

export default Bottombar;

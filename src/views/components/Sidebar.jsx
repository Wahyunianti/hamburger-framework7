import { Link, Panel, Toolbar } from "framework7-react";

function Sidebar() {
  return (
   
      <div className="sidebar">
        <Link tabLink="#home" tabLinkActive>
          <i className="icon material-icons">home</i>
        </Link>
        <Link tabLink="#favorite">
          <i className="icon material-icons">favorite</i>
        </Link>
        <Link tabLink="#cart">
          <i className="icon material-icons">shopping_cart</i>
        </Link>
      </div>
     
  );
}

export default Sidebar;

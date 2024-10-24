import React, { useState } from "react";
import { Link, Panel, Page, Block } from "framework7-react";

const Panels: React.FC = () => {
  const [activeLink, setActiveLink] = useState("#home");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <Panel left cover containerEl="#panel-page" id="panel-nested">
      <Page>
        <Block strongIos outlineIos className="blockpage">
          <div className="warnablock"></div>
          <div className="isiblock">
            <div className="row-isi">
              <Link
                tabLink="#home"
                onClick={() => handleLinkClick("#home")}
              >
                <i className="icon material-icons"
                style={{ color: activeLink === "#home" ? 'white' : '#D36A72' }}
                >home</i>
                <svg
                  width="9"
                  height="64"
                  viewBox="0 0 9 64"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ display: 'block', fill: activeLink === "#home" ? '#BA1924' : 'white' }}
                >
                  <path d="M-2.64842e-05 61.982C-2.73021e-05 64.2205 -2.8595e-05 64.5383 -3.05176e-05 62C-3.05176e-05 61.994 -2.91773e-05 61.988 -2.64842e-05 61.982C-2.31245e-05 52.7865 -2.77805e-05 11.1798 -2.97298e-05 2.00794C-3.0255e-05 2.00529 -3.05176e-05 2.00264 -3.05176e-05 1.99999C-3.05176e-05 -0.534521 -3.02037e-05 -0.221455 -2.97298e-05 2.00794C0.00304393 17.5014 9 21.5018 9 32C9 42.4959 0.0069261 46.4969 -2.64842e-05 61.982Z M-2.97298e-05 2.00794C-3.02037e-05 -0.221455 -3.05176e-05 -0.534521 -3.05176e-05 1.99999C-3.05176e-05 2.00264 -3.0255e-05 2.00529 -2.97298e-05 2.00794Z" />
                </svg>
              </Link>
            </div>

            <div className="row-isi">
              <Link
                tabLink="#favorite"
                onClick={() => handleLinkClick("#favorite")}
              >
                <i className="icon material-icons"
                style={{ color: activeLink === "#favorite" ? 'white' : '#D36A72' }}                
                >favorite</i>
                <svg
                  width="9"
                  height="64"
                  viewBox="0 0 9 64"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ display: 'block', fill: activeLink === "#favorite" ? '#BA1924' : 'white' }}
                >
                  <path d="M-2.64842e-05 61.982C-2.73021e-05 64.2205 -2.8595e-05 64.5383 -3.05176e-05 62C-3.05176e-05 61.994 -2.91773e-05 61.988 -2.64842e-05 61.982C-2.31245e-05 52.7865 -2.77805e-05 11.1798 -2.97298e-05 2.00794C-3.0255e-05 2.00529 -3.05176e-05 2.00264 -3.05176e-05 1.99999C-3.05176e-05 -0.534521 -3.02037e-05 -0.221455 -2.97298e-05 2.00794C0.00304393 17.5014 9 21.5018 9 32C9 42.4959 0.0069261 46.4969 -2.64842e-05 61.982Z M-2.97298e-05 2.00794C-3.02037e-05 -0.221455 -3.05176e-05 -0.534521 -3.05176e-05 1.99999C-3.05176e-05 2.00264 -3.0255e-05 2.00529 -2.97298e-05 2.00794Z" />
                </svg>
              </Link>
            </div>

            <div className="row-isi">
              <Link
                tabLink="#cart"
                onClick={() => handleLinkClick("#cart")}
              >
                <i className="icon material-icons"
                style={{ color: activeLink === "#cart" ? 'white' : '#D36A72' }}
                >shopping_cart</i>
                <svg
                  width="9"
                  height="64"
                  viewBox="0 0 9 64"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ display: 'block', fill: activeLink === "#cart" ? '#BA1924' : 'white' }}
                >
                  <path d="M-2.64842e-05 61.982C-2.73021e-05 64.2205 -2.8595e-05 64.5383 -3.05176e-05 62C-3.05176e-05 61.994 -2.91773e-05 61.988 -2.64842e-05 61.982C-2.31245e-05 52.7865 -2.77805e-05 11.1798 -2.97298e-05 2.00794C-3.0255e-05 2.00529 -3.05176e-05 2.00264 -3.05176e-05 1.99999C-3.05176e-05 -0.534521 -3.02037e-05 -0.221455 -2.97298e-05 2.00794C0.00304393 17.5014 9 21.5018 9 32C9 42.4959 0.0069261 46.4969 -2.64842e-05 61.982Z M-2.97298e-05 2.00794C-3.02037e-05 -0.221455 -3.05176e-05 -0.534521 -3.05176e-05 1.99999C-3.05176e-05 2.00264 -3.0255e-05 2.00529 -2.97298e-05 2.00794Z" />
                </svg>
              </Link>
            </div>
          </div>
        </Block>
      </Page>
    </Panel>
  );
};

export default Panels;

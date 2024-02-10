import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import "../layoutStyle.scss";
import { Link } from "react-router-dom";
import avtr from "../../assets/avtr.svg";
const Header = (): React.JSX.Element => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <header className="header">
      <div className="container header-container">
        <img className="logo" src={logo} alt="logo" />

        <div className="nav-container">
          <nav className="nav">
            <ul className="nav-list-container">
              <li className="nav-list">
                <Link className="nav-link" to="">
                  Home
                </Link>
              </li>

              <li className="nav-list">
                <Link className="nav-link" to="">
                  Dashboard
                </Link>
              </li>
              <li className="nav-list">
                <Link className="nav-link" to="">
                  Products
                </Link>
              </li>
              <li className="nav-list">
                <Link className="nav-link" to="">
                  Transactions
                </Link>
              </li>
              <li className="nav-list">
                <Link className="nav-link" to="">
                  Journal
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="account">
          <img src={avtr} alt={avtr} />
          <p>Hi, Joseph</p>
          <div onClick={()=>setActive(true)} className="ham">
          <svg
            width="15"
            height="11"
            viewBox="0 0 15 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="0.5" x2="15" y2="0.5" stroke="#434343" />
            <line y1="10.5" x2="15" y2="10.5" stroke="#434343" />
            <line y1="5.5" x2="15" y2="5.5" stroke="#434343" />
          </svg>
        </div>
        </div>
        
      </div>

      <div className={`nav-container-mobile ${active ? 'active' :''}`}>
        <nav className="nav">
          <ul className="nav-list-container">
            <li className="nav-list">
              <Link className="nav-link" to="">
                Home
              </Link>
            </li>

            <li className="nav-list">
              <Link className="nav-link" to="">
                Dashboard
              </Link>
            </li>
            <li className="nav-list">
              <Link className="nav-link" to="">
                Products
              </Link>
            </li>
            <li className="nav-list">
              <Link className="nav-link" to="">
                Transactions
              </Link>
            </li>
            <li className="nav-list">
              <Link className="nav-link" to="">
                Journal
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={`overlay ${active ? 'show':''}`} onClick={()=>setActive(false)}></div>
    </header>
  );
};

export default Header;

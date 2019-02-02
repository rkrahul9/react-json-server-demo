import React from 'react';
import { Avatar } from "../avatar";
import './Header.css';

const breadcrumb = { 
  "/index": "Dashboard", 
  "/portfolio": "Assets",
  "/contacts": "Contacts",
  "/achievements": "Achievements",
  "/help": "Help Center",
  "/balance-sheet": "Balance Sheet",
  "/transactions": "TxN History",
  "/buy": "Buy",
  "/sell": "Sell",
  "/transfer": "Transfer",
  "/account": "Account",
}

const Header = (props) => (
  <header className="breadcrumb-bar navbar bg-white sticky-top">
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <span><b>APP</b></span>
        </li>
        <li className="breadcrumb-item active" aria-current="page">{breadcrumb[window.location.pathname]}</li>
      </ol>
    </nav>
    <div className="d-none d-lg-block">
      <div className="dropdown">
        <span className="user_email">{props.users.email}</span>
        <Avatar image={ props.users.imgUrl } click={props.Logout} mode="Header"/>
      </div>
    </div>
  </header>
);

export default Header;
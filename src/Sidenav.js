import React from 'react';
import { Link } from 'react-router-dom';

export const Sidenav = (props) => (
  <div className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">    
    <a className="navbar-brand">
      <img src="logo.png" height="44px" alt="" />
    </a>    
    <div className="navbar-collapse flex-column collapse">
      <ul className="navbar-nav d-lg-block">
        <li><Link to='/index'>Dashboard</Link></li>
        <li><Link to='/portfolio'>Portfolio</Link></li>
        <li><Link to='/contacts'>Contacts</Link></li>
        <li><Link to='/achievements'>Achievements</Link></li>
      </ul>
      <hr/>
      <div className="d-none d-lg-block w-100"> 
        <span className="text-small text-muted text-left d-block">Quick Links</span>
        <ul className="nav nav-small flex-column mt-2">
          <li><Link to='/help'>Help Center</Link></li>
          <li><Link to='/balance-sheet'>Balance Sheet</Link></li>
          <li><Link to='/transactions'>Tnx History</Link></li>
        </ul>
        <hr/>
      </div>
      <div className="mt-2 btn-block">
        <Link className="btn btn-primary btn-block sidenav-btn" to='/buy'>Buy</Link>
      </div>
      <div className="mt-1 btn-block">
        <Link className="btn btn-info btn-block sidenav-btn" to='/sell'>Sell</Link>
      </div>
      <div className="mt-1 btn-block">
        <Link className="btn btn-secondary btn-block sidenav-btn" to='/transfer'>Transfer</Link>
      </div>
    </div>
  </div>
);
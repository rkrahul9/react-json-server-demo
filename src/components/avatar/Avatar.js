import React from 'react';
import './avatar.css';
import { Link } from 'react-router-dom'; 

export class Avatar extends React.Component {
 
  render() {
    return(
      <div className="d-inline-block">
          {
            this.props.mode === "Header" ?
            <div className="d-inline-block" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img src={this.props.image} className="img-circle avatar" alt="" width="40" height="40"/>
            </div>
            :<img src={this.props.image} className="img-circle" alt="" width="72" height="72"/>
          }                
        <ul className="dropdown-menu dropdown-menu-right text-right">
          <li><Link to="/account">Account</Link></li>
          <li>Security</li>
          <div className="dropdown-divider"></div>
          <li onClick={this.props.click}><a className="text-danger" href="#">Log Out</a></li>
        </ul>                
      </div>
    );
  }
}
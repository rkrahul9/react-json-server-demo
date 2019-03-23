import React from 'react';
import { Avatar } from '../avatar';
import './Account.css';

export class Account extends React.Component {

  handleAccount = (e) => {
    const firstName = this.refs.fname.value;
    const lastName = this.refs.lname.value;
    const email = this.refs.email.value;
    const imgUrl = this.props.users.imgUrl;
    const password = this.props.users.password;
    const isLoggedIn = this.props.users.isLoggedIn;
    this.props.updateUser({ firstName, lastName, email, imgUrl, password, isLoggedIn });
  }

  render(){
    return(
      <div className="right-content text-left">
        <div className="card">
          <div className="card-body portfolio">
            <div className="d-inline-block mr-3">
              <Avatar image={this.props.users.imgUrl}/>
            </div>
            <h2 className="d-inline-block">Update Account</h2>
            <div className="clearfix"></div>
            <div className="form-group mt-4">
              <input type="text" className="form-control" ref="fname" placeholder="First Name" />
            </div>
            <div className="form-group mt-4">
              <input type="text" className="form-control" ref="lname" placeholder="Last Name" />
            </div>
            <div className="form-group mt-4">
              <input type="email" className="form-control" ref="email" placeholder="email" defaultValue={this.props.users.email}/>
            </div>
            <div className="form-group mt-4">
              <button className="btn btn-success btn-lg" onClick={() => this.handleAccount}>Save</button>          
            </div>
          </div>
        </div>
      </div>      
    );
  }
}
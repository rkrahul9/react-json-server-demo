import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

export class Signup extends React.Component {
  constructor(props){
    super(props);
    this.handleSignup = this.handleSignup.bind(this);
  }

  handleSignup(e){
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    const isLoggedIn = true;
    this.props.signup({ email, password, isLoggedIn })
  }

  render(){
    return(
      <div className="container">
        <div className="fullscreen">
          <div className="row justify-content-center w-100">
            <div className="col-xl-5 col-lg-6 col-md-7 signup-form">
              <div className="mb-3 d-flex justify-content-center ml-2">
                <img alt="sadcas" src="droplet.png" height="100px" />
                <div className="beta_badge">
                  <a><span className="badge badge-success">BETA</span></a>
                </div>
              </div>
              <h1 className="heading">Create Account</h1>
              <h4 className="lead">Put your money to work, instantly.</h4>
              <hr/>
              <div className="form-group">
                <input type="email" className="form-control" ref="email" placeholder="Email Address" />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" ref="password" placeholder="Password" />
                <div className="text-left">
                  <small className="text-gray">Your password should be at least 8 characters</small>
                </div>
              </div>
              <div className="form-group">
                <button className="btn btn-lg btn-block btn-primary" onClick={this.handleSignup}>Create Account</button>
                <small className="mt-1">Already have an account <Link to='/'>Log In</Link></small>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
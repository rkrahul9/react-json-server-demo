import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

export class Login extends React.Component {
  constructor(props){
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e){
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    const isLoggedIn = true;
    this.props.login({ email, password, isLoggedIn })
  }

  render(){
    return(
      <div className="container">
        <div className="fullscreen">
          <div className="row justify-content-center w-100">
            <div className="col-xl-5 col-lg-6 col-md-7 login-form">
              <div className="mb-3 d-flex justify-content-center ml-2">
                <img src="droplet.png" height="100px" alt="" />
                <div className="beta_badge">
                  <a href="https://dripfoundation.io/beta-user-guide.html"><span className="badge badge-success">BETA</span></a>
                </div>
              </div>
              <h1>Welcome Back!</h1>
              <h4>Login to your account to continue.</h4>
              <hr/>
              <div className="form-group">
                <input type="email" className="form-control" ref="email" placeholder="Email Address" />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" ref="password" placeholder="Password" />
              </div>
              <div className="form-group">
                <button className="btn btn-lg btn-block btn-primary" onClick={this.handleLogin}>Log In</button>              
                <small className="mt-1">Don't have an account <Link to='/signup'>SignUp</Link></small>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
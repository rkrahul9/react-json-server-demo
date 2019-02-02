import React from 'react';
import { Avatar } from '../avatar';
import './Contacts.css';

export class Contacts extends React.Component {

  constructor(props){
    super(props);
    this.handleFilter = this.handleFilter.bind(this);
  }

  componentDidMount() {
    this.props.getUserList();
  }

  handleFilter(){
    const value = this.refs.filter.value;
    if(value){
      this.props.filterUser({ value });
    }
    else{
      this.props.getUserList();
    }
  }

  render(){
    return(
      <div className="right-content text-left">
        <div className="card">
          <div className="card-body">
            <div className="d-inline-block mr-3 contact-img">
              <Avatar image={this.props.users.imgUrl}/>
            </div>
            <h2 className="d-inline-block">Welcome to Contacts Section</h2>
            <div className="clearfix"></div>
            <input type="text" ref="filter" onChange={this.handleFilter} placeholder="Enter here to filter" className="contact-search mt-3 mb-3" />
            <ul className="contact-list">
              {
                this.props.userList.map((value, index) => (
                <li className="mb-3" key={index}>
                  <div className="d-inline-block mr-3 align-top">
                    <Avatar image={value.imgUrl} mode="Header"/>
                  </div>
                  <div className="d-inline-block align-top">
                    <span className="d-block username">{value.firstName} {value.lastName}</span>
                    <span className="d-block useremail">{value.email}</span>                  
                  </div>
                </li>))
              }
            </ul>         
          </div>
        </div>
      </div>
    );
  }
}
import React from 'react';
import { Avatar } from '../avatar';
import './Dashboard.css';

export const Dashboard = (props) =>(
  <div className="right-content text-left">
    <div className="card">
      <div className="card-body">
        <h2>Welcome to Dashboard Section</h2>
        <hr/>
        <ul className="dashboard-list">
          {            
            props.userList.map((value, index) => (
              <li className="mb-3" key={index}>
                <div className="d-inline-block mr-3">
                  <Avatar image={value.imgUrl} mode="Header"/>
                </div>
                <span className="d-inline-block">{value.email}</span>
              </li>))            
          }
        </ul>
      </div>
    </div>
  </div>
);
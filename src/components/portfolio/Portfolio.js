import React from 'react';
import { Avatar } from '../avatar';

export const Portfolio = (props) =>
  (
    <div className="right-content text-left">
      <div className="card">
        <div className="card-body portfolio">
          <div className="d-inline-block mr-3">
            <Avatar image={props.users.imgUrl}/>          
          </div>
          <h2 className="d-inline-block">Welcome to Portfolio Section</h2>
        </div>
      </div>
    </div>
  );
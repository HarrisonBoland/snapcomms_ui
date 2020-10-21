import React from 'react';

import './Users.css';

function Users(props) {
  return (
    <div className="users">
      <span></span>
      <span>{props.title}</span>
    </div>
    );
}

export default Users;

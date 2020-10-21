import React from 'react';

import './Users.css';

function Users(props) {
  return (
    <div className="users">
      <label className="container">
        {props.title}
        <input type="checkbox" />
        <span className="checkmark"></span>
      </label>
    </div>
  );
}

export default Users;

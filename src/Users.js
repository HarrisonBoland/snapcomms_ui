import React from 'react';

import './Users.css';

function Users(props) {
  return (
    <div className="users">
      <label class="container">
        {props.title}
        <input type="checkbox" />
        <span class="checkmark"></span>
      </label>
    </div>
  );
}

export default Users;

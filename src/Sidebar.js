import React from 'react';

import './Sidebar.css';
import Users from './Users';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <h1>Users</h1>
        <select name="selection" className="selection">
          <option value="allusers">All Users</option>
          <option value="drivers">Drivers</option>
          <option value="developers">Developers</option>
          <option value="sales">Sales</option>
        </select>
        <Users title="John Doe" />
        <Users title="Sally Ranger" />
        <Users title="Matt Smith" />
      </div>
    </div>
  );
}

export default Sidebar;

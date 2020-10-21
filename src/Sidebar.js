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
        <Users title="Amy White" id="1" />
        <Users title="Dan The Man" id="2" />
        <Users title="Erlich Bachman" id="3" />
        <Users title="Harrison Boland" id="4" />
        <Users title="John Doe" id="5" />
        <Users title="Keanu Reeves" id="6" />
        <Users title="Kelly Hunter" id="7" />
        <Users title="Lilly Bee" id="8" />
        <Users title="Matt Smith" id="9" />
        <Users title="Max Green" id="10" />
        <Users title="Sally Ranger" id="11" />
        <Users title="Sam Brown" id="12" />
        <Users title="Tom Low" id="13" />
      </div>
    </div>
  );
}

export default Sidebar;

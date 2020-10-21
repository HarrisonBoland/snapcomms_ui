import React, { useState } from 'react';

import './Sidebar.css';
import UserList from './UserList';

function Sidebar() {
  const [ show, setShow ] = useState('allusers')

  const selectionHandler = (event) => {
    let type = event.target.value
    setShow(type)
  }
  //console.log(show)

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <h1>Users</h1>
        <select name="selection" className="sidebar__selection" onChange={selectionHandler}>
          <option value="allusers">All Users</option>
          <option value="driver">Drivers</option>
          <option value="developer">Developers</option>
          <option value="sales">Sales</option>
        </select>
        <UserList show={show}/>
      </div>
    </div>
  );
}

export default Sidebar;

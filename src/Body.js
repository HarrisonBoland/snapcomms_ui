import React from 'react';

import './Body.css';

function Body() {
  return (
    <div className="body">
      <div className="body__container">
        <h2 className="title">Choose a template</h2>
        <select name="selection" className="body__selection">
          <option value="outage">IT Planned Outage</option>
          <option value="halloween">Halloween</option>
          <option value="dcompliance">Compliance</option>
          <option value="newemployee">New Employee</option>
          <option value="emergencyalert">Emergency Alert</option>
        </select>
        <h2 className="title">Write Message</h2>
        <input type="text" placeholder="Give your message a title" className="name" />
        <textarea rows="20" cols="50" className="message" />
        <button className="body__send">SEND</button>
      </div>
    </div>
  );
}

export default Body;

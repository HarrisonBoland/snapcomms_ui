import React, { useState } from 'react';

import './Body.css';
import Modal from './Modal';

function Body() {
  const [show, setShow] = useState(false)
  const [type, setType] = useState('IT Planned Outage')
  const [inputValue, setInputValue] = useState(false)
  const [textareaValue, setTextareaValue] = useState(false)
  const [error, setError] = useState(false)

  const onSendHandler = () => {
    console.log('Message sent!!')
    setShow(false)
  }

  const inputChangedHandler = (event) => {
    let value = event.target.value
    if (value.trim().length === 0) {
      setInputValue(false)
    } else {
      setInputValue(value)
    }
  }

  const textareaChangedHandler = (event) => {
    let value = event.target.value
    if (value.trim().length === 0) {
      setTextareaValue(false)
    } else {
      setTextareaValue(value)
    }
  }

  const sendMessageHandler = () => {
    if (inputValue && textareaValue) {
      setShow(true)
      setError(false)
    } else {
      setError(true)
    }
  }

  return (
    <React.Fragment>
    <div className="modal__container">
      <Modal show={show} onClose={() => setShow(false)} send={onSendHandler} title={'Are you sure you would like to send the message'}>
        {inputValue ? `${inputValue} using the ${type} template` : 'Please enter a title'}
      </Modal>
    </div>
    <div className="body">
      <div className="body__container">
        <h2 className="title">Choose a template</h2>
        <select name="selection" className="body__selection" onChange={e => setType(e.target.value)}>
          <option value="IT Planned Outage">IT Planned Outage</option>
          <option value="Halloween">Halloween</option>
          <option value="Compliance">Compliance</option>
          <option value="New Employee">New Employee</option>
          <option value="Emergency Alert">Emergency Alert</option>
        </select>
        <h2 className="title">Write message</h2>
        <input type="text" placeholder="Give your message a title" className="name" onChange={inputChangedHandler} />
        <textarea rows="20" cols="50" className="message" onChange={textareaChangedHandler} />
        {error && <h4>Please enter a valid title and a message</h4>}
        <button className="body__send" onClick={sendMessageHandler}>SEND</button>
      </div>
    </div>
    </React.Fragment>
  );
}

export default Body;

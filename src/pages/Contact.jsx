import '../styles/Contacts.css';
import React, { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isEntry, setIsEntry] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateEntry = (value) => {
    const notemptyRegex = /^.+$/;
    return notemptyRegex.test(value);
  };
//_________________________________________________________________
  function handleSubmit(e) {
    e.preventDefault();

    const isValid = validateEmail(email);
    setIsValidEmail(isValid);

    const isNameEntry = validateEntry(name);
    const isMessageEntry = validateEntry(message);
    setIsEntry(isNameEntry && isMessageEntry);

    // Check if there are any validation errors
    if (!isValid || !isNameEntry || !isMessageEntry) {
      return;
    }

    // Continue with form submission
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }
//___________________________________________________________________
  return (
    <form id="myForm" method="post" onSubmit={handleSubmit}>
      <div className="concontainer">


        <h1>Contact Me</h1>
        <label>
          Name:<br></br>
          <input
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br></br>
        <label>
          Email:<br></br>
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br></br>
        <label>
          Message:<br></br>
          <textarea
            name="message"
            rows={10}
            cols={100}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <br></br>
        <button type="submit">SUBMIT</button>
        {!isValidEmail && <p>Please enter a valid email.</p>}
        {!isEntry && <p>Please fill in all required fields.</p>}


      </div>
    </form>
  );
}
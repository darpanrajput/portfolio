import React from "react";
import "./contacts.scss";
import { useState } from "react";
const Contacts = () => {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contacts">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Want To Get In Touch</h2>
        <br />
        <h3>You Contact Me on Below Email</h3>
        <p style={{ margin: "10px", cursor: "pointer" }}>
          Email to: darpanrajput412@gmail.com
        </p>
        {/* <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form> */}
      </div>
    </div>
  );
};

export default Contacts;

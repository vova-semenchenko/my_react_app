import { useState } from "react";

import "./form.css";

function Form() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Send: ", { name, message });
  };

  return (
    <div className="formContainer">
        <h1 className="formContainerTitle">Send Message</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="formName formItem"
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
        <textarea
          className="formMessage formItem"
          placeholder="Enter Message"
          value={message}
          onChange={handleMessageChange}
        />
        <button className="formButton" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default Form;

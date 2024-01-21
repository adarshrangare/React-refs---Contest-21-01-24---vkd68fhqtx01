import React, { useState, useEffect, useRef } from "react";
import '../styles/App.css';
const App = () => {
  //code here

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = () => {
    if (
      emailRef.current.value.trim().length != 0 &&
      passwordRef.current.value.trim().length != 0
    ) {
      setEmail(emailRef.current.value);
      setPassword(passwordRef.current.value);

      emailRef.current.value = "";
    passwordRef.current.value = "";
      
    } else {
      setEmail("");
      setPassword("");
      if (emailRef.current.value.trim().length == 0) {
        emailRef.current.focus();
      } else {
        passwordRef.current.focus();
      }
    }
     
  };

  return (
    <div id="main">
      Email
      <input id="inputEmail" type="text" ref={emailRef} />
      <br />
      Password
      <input id="inputPassword" type="text" ref={passwordRef} />
      <br />
      <button id="submitButton" onClick={handleSubmit}>
        Submit
      </button>
      <br />
      <p id="emailText">Your Email : {email}</p>
      <p id="passwordText">Your Password : {password}</p>
    </div>
  );
};

export default App;

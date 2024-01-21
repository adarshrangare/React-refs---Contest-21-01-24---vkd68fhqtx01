import React,{useState,useEffect,useRef} from 'react'
import '../styles/App.css';
const App = () => {

//code here 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = ()=>{

    if(email.trim().length != 0 && password.trim().length != 0 ){

      setEmail(emailRef.current.value);    
      setPassword(passwordRef.current.value);    
      
    }
    
  }
  
  return (
    <div id="main">
      Email
      <input id="inputEmail" type="text" value={} ref={emailRef} onChange={}/><br/>
      Password
      <input id="inputPassword" type="text" value={password} ref={passwordRef} onChange={}/><br/>
      <button id="submitButton" onClick={handleSubmit}>Submit</button><br/>
      <p id="emailText">Your Email : {email}</p>
      <p id ="passwordText">Your Password : {password}</p>
      
    </div>
  )
}


export default App;

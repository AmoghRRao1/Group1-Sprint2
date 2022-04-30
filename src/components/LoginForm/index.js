import React , { useState } from 'react'
import { useHistory } from 'react-router-dom';
import './login.css'

const LoginForm = () => {

    const [name,setName] = useState("");
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [role,setRole] = useState("");
    const [Token,setToken] = useState("");

    const [slide, setSlide] = useState(false);
     const toggleClass = () => {
    setSlide(!slide);
  };
let history= useHistory();
  
const clickLogin = (e) => {
    e.preventDefault();
    //Admin
    fetch ("http://127.0.0.1:8081/api/admin/login", {
       method: "POST",
       headers: {'Content-Type':'application/json','Accept': 'application/json'},
       body: JSON.stringify({
        username: username,
         password: password
      }),
  })
    .then((response) => response.json())
    .then((result) => {
      if(result.Status === "Successful"){
        setToken(result.Token);             
        setRole("Admin");
        localStorage.setItem('Admin', true);
        // alert("You are logged in as :"+role+"\n Token: "+Token);
        //go to Dash Board
        history.push("/dashboard");
        window.location.reload();
        

       }
        
       else {
        //Bidder
        console.log("Test B");
        fetch ("http://127.0.0.1:8081/api/bidder/login", {
       method: "POST",
       headers: {'Content-Type':'application/json','Accept': 'application/json'},
       body: JSON.stringify({
         email: username,
         password: password
      }),
  })
    .then((response) => response.json())
    .then((result) => {
      if(result.Status === "Successful"){
        setToken(result.Token);
        localStorage.setItem('Admin', false);
        localStorage.setItem('BidderID', result.BidderID);
        console.log( result.BidderID);
        


        //alert("You are logged in.:"+Token);
        //go to Dash Board
        history.push("/dashboard");  
        window.location.reload();   

       } else {
           alert(result.Error);
       }
    });

       }
    });
    
    
}

const clickSignUp = (e) => {
    e.preventDefault();
    fetch ("http://127.0.0.1:8081/api/bidder/register", {
       method: "POST",
       headers: {'Content-Type':'application/json','Accept': 'application/json'},
       body: JSON.stringify({
         email: username,
         name: name,
         password: password
      }),
  })
    .then((response) => response.json())
    .then((result) => {
      if(result.Status === "Successful"){
        //setToken(result.Token);
        
        localStorage.setItem('Admin', false);
        localStorage.setItem('BidderID', result.BidderID);        
        history.push("/dashboard");
        window.location.reload();
        

       } else {
           alert(result.Error);
       }
    });
}

    return (
        <div className={slide ? 'container1 right-panel-active': 'container1'} id="container">
            <div className="form-container sign-up-container">
                <form className='form' action="#">
                    <h1>Create Account</h1>
                    <br></br>
                    <input className='input' type="text" placeholder="Name" 
                    value={name} onChange={(event)=>setName(event.target.value)}/>
                    <input className='input' type="email" placeholder="Email" 
                    value={username} onChange={(event)=>setUsername(event.target.value)}/>
                    <input className='input' type="password" placeholder="Password" 
                    value={password} onChange={(event)=>setPassword(event.target.value)}/>
                    <button className='button'  onClick={clickSignUp}>Sign Up</button>
                </form>
            </div>
            <div className="form-container sign-in-container">
                <form className='form' action="/dashboard">
                    <h1>Sign in</h1>
                    <br></br>
                    <input className='input' type="email" placeholder="Email" 
                     value={username} onChange={(event)=>setUsername(event.target.value)} />
                    <input className='input' type="password" placeholder="Password"
                    value={password} onChange={(event)=>setPassword(event.target.value)} />
                    <button className='button' onClick={clickLogin} >Sign In</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>Please login with your personal info</p>
                        <button onClick={()=> setSlide(0)} className="button ghost" id="signIn">Sign In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>New User!</h1>
                        <p>Register with us</p>
                        <button onClick={()=> setSlide(1)} className="button ghost" id="signUp">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default LoginForm
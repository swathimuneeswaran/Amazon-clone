import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {auth} from "../firebase.js"

const Login = () => {

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const Navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
   auth
   .signInWithEmailAndPassword(email, password) 
   .then((auth) => {
     Navigate("/")
    })
   .catch(error=>alert(error.message))
  }

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email,password)
      .then((auth) => 
      {
       
        if(auth)
        {
          Navigate("/")
        }
      })
      .catch(error=>alert(error.message))
  }

  return (
    <>
      
        <div className="login">
        <Link to="/">
          <img
            className="login__logo"
            src="https://images.crowdspring.com/blog/wp-content/uploads/2023/07/03162944/amazon-logo-1.png"
          ></img>
      </Link>

      <div className="login__container">
        <h1>Sign-In</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={e=>setEmail(e.target.value)}></input>
          <h5>Password</h5>
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)}></input>
          <button type="submit" className="login__signInButton" onClick={signIn}>
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button className="login__registerButton" onClick={register}>Create your Amazon Account</button>
      </div>
      </div>
    </>
  );
};

export default Login;

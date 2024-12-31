import React, { useContext, useState } from 'react'
import {signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase-config'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
function Login() {
 
 const[error,setError] = useState(false);
 const[email,setEmail] = useState("");
 const[password,setPassword]= useState("");

 const navigate = useNavigate();

 const{ dispatch } = useContext(AuthContext)

 const handleLogin = (e)=>{
  e.preventDefault();

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    dispatch({type:"LOGIN", payload:user})
    navigate('/app')
  })
  .catch((error) => {
    setError(true);
  });

 }
  return (
    <section className='register'> 
        <div className="register-container">
          
          <form onSubmit={handleLogin} className="form register-form">
          {error && <p className="form-error-msg ">wrong password or email</p>}
           
            <input type="email" placeholder='Email Address' name='email' onChange={e=> setEmail(e.target.value)} required/>
            <input type="password" placeholder='Enter your Password' name='password' onChange={e=> setPassword(e.target.value)}/>
           
            <button className='category-btn login-btn' >Login</button>
          
          </form>
        </div>
    </section>
  )
}

export default Login
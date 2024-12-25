import React, { useState } from 'react'

function Login() {
  const [userData, setUserData] = useState({
    
    email:'',
    password:''
  })
  const changeInputHandler = (e) =>{
    setUserData(prevState => {
      return{...prevState, [e.target.name]: e.target.value}
    })
  }
  return (
    <section className='register'> 
        <div className="register-container">
          <h2>Login</h2>
          <form action="" className="form register-form">
            <p className="form-error-msg red">This is the error message</p>
           
            <input type="email" placeholder='Email Address' name='email' value={userData.email} onChange={changeInputHandler} required/>
            <input type="password" placeholder='Enter your Password' name='password' value={userData.password} onChange={changeInputHandler}/>
           
            <button className='category-btn'>Login</button>
          
          </form>
        </div>
    </section>
  )
}

export default Login
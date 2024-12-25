import React, { useState } from 'react'

function Register() {
  const [userData, setUserData] = useState({
    name:'',
    email:'',
    password:'',
    password2:''
  })
  const changeInputHandler = (e) =>{
    setUserData(prevState => {
      return{...prevState, [e.target.name]: e.target.value}
    })
  }
  return (
    <section className='register'> 
        <div className="register-container">
          <h2>Sign up</h2>
          <form action="" className="form register-form">
            <p className="form-error-msg red">This is the error message</p>
            <input type="text" placeholder='Full Name' name='name' value={userData.name} onChange={changeInputHandler} autoFocus required/>
            <input type="email" placeholder='Email Address' name='email' value={userData.email} onChange={changeInputHandler} required/>
            <input type="password" placeholder='Enter your Password' name='password' value={userData.password} onChange={changeInputHandler}/>
            <input type="password" placeholder='Repeat your password' name='password2' value={userData.password2} onChange={changeInputHandler}/>
            <button className='category-btn'>Register</button>
          
          </form>
        </div>
    </section>
  )
}

export default Register
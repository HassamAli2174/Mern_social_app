import React, { useState } from 'react'
import { Box, Typography, TextField, Button } from "@mui/material"
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import { useDispatch } from 'react-redux'
import { authActions } from '../redux/authSlice'
import "../designing/login_page.css"

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  })

  const goToRegister = () => {
    navigate('/register');
  };

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handlechange = (e) => {
    setInputs(prevInputs => ({
      ...prevInputs,
      [e.target.name]: e.target.value
    }))
  }

  const HandleSubmit = async (e) => {
    e.preventDefault()
    console.log(inputs)
    try {
      const { data } = await axios.post('/api/v1/user/login',
        {
          email: inputs.email,
          password: inputs.password
        })

      if (data.success) {
        localStorage.setItem('USERID', data?.user._id)
        dispatch(authActions.login())
        alert("User Login successfully!")
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className='login_background_image'>
        <div className='login_form_data'>
          <div className='login_heading'>
            <h1 className='login_heading'>
              Login
            </h1>
          </div>
          <form className='login_form'>
            <input type='email' className='login_input' placeholder='Email' />
            <input type='password' className='login_input' placeholder='Password' />
            <button className='login_submit_button'>Login</button>
          </form>
          <h5 className='line'>Don’t have an account ? <button className='transparent-button' onClick={goToRegister}>SIGN UP</button> instead</h5>
        </div>
      </div>

    </>
  )
}

export default Login
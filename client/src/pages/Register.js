
import React, { useState } from 'react'
import { Box, Typography, TextField, Button } from "@mui/material"
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import "../designing/register_page.css"

const Register = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  })

  const goToLogin = () => {
    navigate('/login');
  };
  const navigate = useNavigate()
  const handlechange = (e) => {
    setInputs(prevInputs => ({
      ...prevInputs,
      [e.target.name]: e.target.value
    }))
  }

  const HandleSubmit = async (e) => {
    e.preventDefault()
    // console.log(inputs)
    try {
      const { data } = await axios.post('/api/v1/user/register',
        {
          username: inputs.name,
          email: inputs.email,
          password: inputs.password
        })

      if (data.success) {
        alert("User Register successfully!")
        navigate('/login')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className='signup_page'>
        <div className='slogan_div'>
          <h1 className='h1'>LETS</h1>
          <h4 className='h4'>Connect</h4>
        </div>
        <div className='signup_background_image'>
        <div className='signup_form_data'>  
        <div className='signup_heading'>
            <h1 className='signup_heading'>
            Create Account
            </h1>
          </div>
        <form className='signup_form'>
            <input className='signup_input' type='text' placeholder='Name' />
            <input className='signup_input' type='email' placeholder='Email' />
            <input className='signup_input' type='password' placeholder='Password' />
            <input className='signup_input' type='password' placeholder='Confirm password' />
            <button className='signup_submit_button'>Sign Up</button>
          </form>
          <h5 className='line'>Already have an account ? <button className='transparent-button' onClick={goToLogin}>LOGIN</button> instead</h5>
          </div>
        </div>
      </div>


    </>
  )
}

export default Register

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
      {/* <form onSubmit={HandleSubmit}>
        <Box
          maxWidth={450}
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          justifyContent={'center'}
          margin={'auto'}
          marginTop={5}
          boxShadow={'0px 15px 20px #ccc'}
          padding={3}
          borderRadius={6}
        >
          <Typography variant='h3' padding={3} textAlign={'center'}>Register</Typography>
          <TextField onChange={handlechange} value={inputs.name} placeholder='name' name='name' margin='normal' type={'name'} required />
          <TextField onChange={handlechange} value={inputs.email} placeholder='email' name='email' margin='normal' type={'email'} required />
          <TextField onChange={handlechange} value={inputs.password} placeholder='password' name='password' margin='normal' type={'password'} required />
          <Button type='submit' color='primary' variant='contained' sx={{ borderRadius: 3, marginTop: 3 }}>Submit</Button>
          <Button onClick={() => navigate('/login')} color='primary' variant='contained' sx={{ borderRadius: 3, marginTop: 3 }}>Already have a account? Please login</Button>
        </Box>
      </form> */}

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
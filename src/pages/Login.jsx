import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import logo from '../assets/images/logo.svg'
import { FromRow } from '../components'

const Login = () => {
  return (
    <Wrapper>
      <form className='form'>
          <img src={logo} alt="jobify" className='logo'/>
          <h4>Login</h4>
          <FromRow type='email' name='email' defaultValue='ankit@gmail.com'/>
          <FromRow type='password' name='password' defaultValue='secret'/>
          <button type='submit' className='btn btn-block'>Submit</button>
          <button type='button' className='btn btn-block'>Explore the app</button>
          <p>
              Not a member yet?
              <Link to='/register' className='member-btn'>Register</Link>
          </p>
      </form>
    </Wrapper>
  )
}

export default Login

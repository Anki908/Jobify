import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import logo from '../assets/images/logo.svg'
import { FromRow } from '../components'

const Register = () => {
  return (
    <Wrapper>
        <form className='form'>
            <img src={logo} alt="jobify" className='logo'/>
            <h4>Register</h4>
            <FromRow type='text' name='name' />
            <FromRow type='text' name='lastName' labelText='last name'/>
            <FromRow type='text' name='location' />
            <FromRow type='email' name='email' />
            <FromRow type='password' name='password' />
            <button type='submit' className='btn btn-block'>
                submit
            </button>
            <p>
                Already a member?
                <Link to='/login' className='member-btn'>Login</Link>
            </p>
        </form>
    </Wrapper>
  )
}

export default Register

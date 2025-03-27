import React from 'react';
import { Link } from 'react-router-dom';

const RegisterForm = ({
  name, email, password,
  handleSignupSubmit,
  setName, setEmail, setPassword
}) => {
  return (
    <div className="flex justify-center items-center h-full">
      <form onSubmit={handleSignupSubmit} className='min-[760px]:w-1/3 max-[761px]:w-full'>
        <h4 className='text-center text-[#068b4fc2] text-[1.5rem] font-bold'>
          Register
        </h4>
        <div className='flex flex-col gap-[15px]'>
          <input type="text" value={name} placeholder='Full name' required
            onChange={(e) => setName(e.target.value)}/>
          {/* <input type="text" placeholder='Last name' required/> */}
          <input type="email" value={email} placeholder='Email' required autoComplete='username'
            onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" value={password} placeholder='Password' required autoComplete='current-password'
            onChange={(e) => setPassword(e.target.value)}/>
          <p className='flex items-center'>
            <input type="checkbox" required/>
            <Link className="policy-btn"
              to={"/policy"}>
              I Agree to terms and conditions
            </Link>
          </p>
          <button type='submit'>
            Sign up
          </button>
          <Link className='register hover:underline text-[#2c0202] cursor-pointer font-bold' to={"/login"}>
            Alredy have account? Login
          </Link>
        </div>
      </form>
    </div>
  )
}

export default RegisterForm

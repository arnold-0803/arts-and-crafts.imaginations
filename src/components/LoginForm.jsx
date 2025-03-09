import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = ({
  setShowLogin, 
  setShowRecovery,
  email, password,
  handleLoginSubmit,
  setEmail, setPassword
}) => {
  return (
    <div className='login-wrapper'>
      <div className="flex justify-center items-center h-full">
        {<form onSubmit={handleLoginSubmit} className='min-[760px]:w-1/3 max-[761px]:w-full'>
          <h4 className='text-center text-[#068b4fc2] text-[1.5rem] font-bold'>
            Login
          </h4>
          <div className='flex flex-col gap-[15px]'>
            <input type="email" value={email} placeholder='Email' required
              onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" value={password} placeholder='Password' required
              onChange={(e) => setPassword(e.target.value)}/>
            <span className='hover:underline text-[#2c0202] cursor-pointer font-medium'
              onClick={() => setShowRecovery(true)}>
              Forgot your password?
            </span>
            <button type='submit'>
              Login
            </button>
            <span className='register hover:underline text-[#2c0202] cursor-pointer font-bold'
              onClick={() => setShowLogin(false)}>
              Don't have account? Register
            </span>
            <Link to={"/register"}>
              Don't have account? Register
            </Link>
          </div>
        </form>}
      </div>
    </div>
  )
}

export default LoginForm;

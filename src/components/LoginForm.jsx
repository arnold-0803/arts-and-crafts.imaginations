import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = ({setShowLogin, setShowRecovery}) => {
  return (
    <div className='login-wrapper'>
      <div className="flex justify-center items-center h-full">
        {<form className='min-[760px]:w-1/3 max-[761px]:w-full'>
          <h1 className='text-center text-[#068b4fc2] text-[1.5rem] font-bold'>
            Login
          </h1>
          <div className='flex flex-col gap-[15px]'>
            <input type="email" placeholder='Email' required/>
            <input type="password" placeholder='Password' required/>
            <span className='hover:underline text-[#2c0202] cursor-pointer font-medium'
              onClick={() => setShowRecovery(true)}>
              Forgot your password?
            </span>
            <button>
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

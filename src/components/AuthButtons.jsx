import React from 'react';
import { Link } from 'react-router-dom';

const AuthButtons = () =>{
  return (
    <div className='auth-btn-wrapper'>
      <div>
        <h3 className='text-[1.3rem] font-bold text-[#068b4fbb]'>
          My Acount
        </h3>
      </div>
      <div className='flex flex-col gap-[10px]'>
        <Link className='login-link bg-[#068b50]'
          to={"/login"}
        >
          Login
        </Link>
        <Link className='signup-link bg-[#ff811c]'
          to={"/signup"}
        >
          Sign up
        </Link>
      </div>
    </div>
  )
}

export default AuthButtons;
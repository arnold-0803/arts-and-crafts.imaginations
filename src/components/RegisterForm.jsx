import React from 'react';
import { Link } from 'react-router-dom';

const RegisterForm = ({setShowLogin}) => {
  return (
    <div className="flex justify-center items-center h-full">
      <form className='min-[760px]:w-1/3 max-[761px]:w-full'>
        <h1 className='text-center text-[#068b4fc2] text-[1.5rem] font-bold'>
          Register
        </h1>
        <div className='flex flex-col gap-[15px]'>
          <input type="text" placeholder='First name' required/>
          <input type="text" placeholder='Last name' required/>
          <input type="email" placeholder='Email' required/>
          <input type="password" placeholder='Password' required/>
          <p>
            <input type="checkbox" required/> I Agree to terms and condition
          </p>
          <button>
            Sign up
          </button>
          <span className='register hover:underline text-[#2c0202] cursor-pointer font-bold'
            onClick={() => setShowLogin(true)}>
            Alredy have account? Login
          </span>
          <Link to={"/login"}>
            Alredy have account? Login
          </Link>
        </div>
      </form>
    </div>
  )
}

export default RegisterForm

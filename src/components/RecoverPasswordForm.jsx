import React from 'react';

const RecoverPasswordForm = ({setShowRecovery}) => {
  return (
    <div className="password-recovery flex justify-center items-center h-full">
      <form className='min-[760px]:w-1/3 max-[761px]:w-full flex flex-col'>
        <h4 className='text-center text-[#068b4fc2] text-[1.5rem] font-bold'>
          Recover Your Password
        </h4>
        <input type="email" placeholder='Email' required/>
        <div className='flex gap-[20px]'>
          <button>Submit</button>
          <button className='cancel-btn'
            onClick={() => setShowRecovery(false)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default RecoverPasswordForm;

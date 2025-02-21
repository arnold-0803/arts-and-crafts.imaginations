import React, { useState } from 'react';
import RegisterForm from '../../components/RegisterForm';

const RegisterPage = () => {

  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      <div className='auth-wrapper'>
        {showLogin && (
          <RegisterForm 
            setShowLogin={setShowLogin}
          />
        )}
      </div>
    </div>
  )
}

export default RegisterPage;

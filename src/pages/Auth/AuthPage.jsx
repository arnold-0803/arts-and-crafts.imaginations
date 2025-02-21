import React, { useState } from 'react';
import LoginForm from '../../components/LoginForm';
import RecoverPasswordForm from '../../components/RecoverPasswordForm';
import RegisterForm from '../../components/RegisterForm';

const AuthPage = () => {

  const [showLogin, setShowLogin] = useState(true);
  const [showRecovery, setShowRecovery] = useState(false);

  return (
    <div>
      <div className="auth-wrapper">
        {showLogin && !showRecovery && (
          <LoginForm 
            setShowLogin={setShowLogin}
            setShowRecovery={setShowRecovery}
          />
        )}

        {showRecovery && (
          <RecoverPasswordForm 
            setShowRecovery={setShowRecovery}
          />
        )}

        {!showLogin && !showRecovery && (
          <RegisterForm 
            setShowLogin={setShowLogin}
          />
        )}
      </div>
    </div>
  )
}

export default AuthPage;

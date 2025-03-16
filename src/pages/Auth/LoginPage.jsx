import React, { useState } from 'react';
import LoginForm from '../../components/LoginForm';
import RecoverPasswordForm from '../../components/RecoverPasswordForm';
import RegisterForm from '../../components/RegisterForm';
import { useAuth } from '../../context/AuthContext';

const LoginPage = () => {

  const [showLogin, setShowLogin] = useState(true);
  const [showRecovery, setShowRecovery] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login, error} = useAuth();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div>
      <div className='auth-wrapper'>
        {showLogin && !showRecovery && (
          <LoginForm 
            setShowRecovery={setShowRecovery}
            email={email}
            password={password}
            handleLoginSubmit={handleLoginSubmit}
            setEmail={setEmail}
            setPassword={setPassword}
          />
        )}

        {showRecovery && (
          <RecoverPasswordForm setShowRecovery={setShowRecovery}/>
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

export default LoginPage;

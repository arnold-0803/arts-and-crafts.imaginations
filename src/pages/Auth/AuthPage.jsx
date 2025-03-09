import React, { useState } from 'react';
import LoginForm from '../../components/LoginForm';
import RecoverPasswordForm from '../../components/RecoverPasswordForm';
import RegisterForm from '../../components/RegisterForm';
import { useAuth } from '../../context/AuthContext';

const AuthPage = () => {

  const [showLogin, setShowLogin] = useState(true);
  const [showRecovery, setShowRecovery] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login, register, error} = useAuth();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
    console.log("Email", email);
    console.log("Password", password);
    
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    await register(email, password);
  };

  return (
    <div>
      <div className="auth-wrapper">
        {showLogin && !showRecovery && (
          <LoginForm 
            setShowLogin={setShowLogin}
            setShowRecovery={setShowRecovery}
            email={email}
            password={password}
            handleLoginSubmit={handleLoginSubmit}
            setEmail={setEmail}
            setPassword={setPassword}
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
            email={email}
            password={password}
            handleSignupSubmit={handleSignupSubmit}
            setEmail={setEmail}
            setPassword={setPassword}
          />
        )}
      </div>
    </div>
  )
}

export default AuthPage;

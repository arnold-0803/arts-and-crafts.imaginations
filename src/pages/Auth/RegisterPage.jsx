import React, { useState } from 'react';
import RegisterForm from '../../components/RegisterForm';
import { useAuth } from '../../context/AuthContext';

const RegisterPage = () => {

  const [showLogin, setShowLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {register, error} = useAuth();

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    await register(email, password);
  };

  return (
    <div>
      <div className='auth-wrapper'>
        {showLogin && (
          <RegisterForm
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

export default RegisterPage;

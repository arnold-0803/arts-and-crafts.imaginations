import React, { useState } from 'react';
import RegisterForm from '../../components/RegisterForm';
import { useAuth } from '../../context/AuthContext';

const RegisterPage = () => {

  // const [showLogin, setShowLogin] = useState(true);
  const showLogin = true;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {register, error} = useAuth();

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    await register(name, email, password);
  };

  return (
    <div>
      <div className='auth-wrapper'>
        {showLogin && (
          <RegisterForm
            name={name}
            email={email}
            password={password}
            handleSignupSubmit={handleSignupSubmit}
            setName={setName}
            setEmail={setEmail}
            setPassword={setPassword}
          />
        )}
      </div>
    </div>
  )
}

export default RegisterPage;

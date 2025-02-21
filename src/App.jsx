import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TopBar from './components/TopBar';
import HomePage from './pages/home/HomePg';
import AboutTeamPg from './pages/about/AboutTeamPg';
import AboutFaqPg from './pages/about/AboutFaqPg';
import ContactsPg from './pages/contacts/ContactsPg';
import AuthPage from './pages/Auth/AuthPage';
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';

function App() {
  return (
    <div>
      <Router>
        <TopBar/>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about/our-team' element={<AboutTeamPg/>}/>
          <Route path='/about/faq' element={<AboutFaqPg/>}/>
          <Route path='/contact' element={<ContactsPg/>}/>
          <Route path='/login/register' element={<AuthPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;

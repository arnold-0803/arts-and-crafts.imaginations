import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TopBar from './components/TopBar';
import HomePage from './pages/home/HomePg';
import AboutTeamPg from './pages/about/AboutTeamPg';
import AboutFaqPg from './pages/about/AboutFaqPg';

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
        </Routes>
      </Router>
    </div>
  )
}

export default App;

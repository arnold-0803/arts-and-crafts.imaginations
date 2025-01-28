import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TopBar from './components/TopBar';
import HomePage from './pages/home/HomePg';

function App() {
  return (
    <div>
      <Router>
        <TopBar/>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;

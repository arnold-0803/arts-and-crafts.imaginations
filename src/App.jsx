import React from 'react';
import { BrowserRouter as Router, Routes, } from 'react-router-dom';
import Navbar from './components/Navbar';
import TopBar from './components/TopBar';

function App() {
  return (
    <div>
      <Router>
        <TopBar/>
        <Navbar/>
        <Routes>
         {/* route goes here */}
        </Routes>
      </Router>
    </div>
  )
}

export default App;

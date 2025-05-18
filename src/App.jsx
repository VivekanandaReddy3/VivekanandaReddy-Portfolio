import React from 'react';
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
import Information from './pages/Information';
import Writing from './pages/Writing';
import Contact from './pages/Contact';
import { Routes, Route } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    
    <div>
      <CustomCursor/>
            <Navbar />
            <Routes>
              <Route path='/' element={<LandingPage/>}/> 
              <Route path='/info' element={<Information/>}/> 
              <Route path='/writing' element={<Writing/>}/> 
              <Route path='/contact' element={<Contact/>}/> 
            </Routes>
            
    </div>

  );
}

export default App;

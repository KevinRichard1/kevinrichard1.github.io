import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';
import Project from './Pages/Project';
import { Footer } from './Components/Footer/Footer';
import Contact from './Pages/Contact';
import Sidebar from './Components/Navbar/Sidebar';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar setMenuStatus={setIsMenuOpen}/>
        <Sidebar isOpen={isMenuOpen}/>
        <Routes>
          <Route path ='/' element={<Homepage/>}/>
          <Route path ='/projects' element={<Project/>}/>
          <Route path ='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

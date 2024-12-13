import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';
import Project from './Pages/Project';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path ='/' element={<Homepage/>}/>
          <Route path ='/projects' element={<Project/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

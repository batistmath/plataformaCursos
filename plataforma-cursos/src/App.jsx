import React, { useState } from 'react'; 
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [alunos, setAlunos] = useState([]);
  const [professores, setProfessores] = useState([]);

  return (
    <div className="app-container">
      <Navbar/>
      <main className="content-wrap">
        {
          
        }
        <Outlet context={{ 
          alunos, setAlunos, 
          professores, setProfessores 
        }} />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
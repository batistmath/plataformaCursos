import React, { useState } from 'react'; 
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  const [alunos, setAlunos] = useState([]);
  const [professores, setProfessores] = useState([]);

  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        {
          
        }
        <Outlet context={{ 
          alunos, setAlunos, 
          professores, setProfessores 
        }} />
      </main>
    </div>
  );
}

export default App;
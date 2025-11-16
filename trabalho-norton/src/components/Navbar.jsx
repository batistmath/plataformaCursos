import React from 'react';
import { NavLink } from 'react-router-dom';

const navStyle = {
  background: '#333',
  padding: '1rem',
  display: 'flex',
  gap: '1.5rem',
  justifyContent: 'center'
};

const linkStyle = {
  textDecoration: 'none',
  color: '#ddd',
  fontWeight: 'bold',
  fontSize: '1.1rem',
  padding: '0.5rem'
};

const getActiveStyle = ({ isActive }) => ({
  ...linkStyle,
  color: isActive ? '#007bff' : '#ddd',
  borderBottom: isActive ? '2px solid #007bff' : 'none'
});

function Navbar() {
  return (
    <nav style={navStyle}>
      <NavLink to="/home" style={getActiveStyle}>
        Página Inicial
      </NavLink>
      <NavLink to="/alunos" style={getActiveStyle}>
        Gerenciar Alunos
      </NavLink>
      <NavLink to="/professores" style={getActiveStyle}>
        Gerenciar Professores
      </NavLink>
      <NavLink to="/cursos/player" style={getActiveStyle}>


      
        Curso
      </NavLink>
    </nav>
  );
}

export default Navbar;
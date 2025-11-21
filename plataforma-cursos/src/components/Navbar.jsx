import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50; 
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">
        Fechamentos<span className="highlight">Cursos</span>
      </div>

      <div className="navbar-links">
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Dashboard
        </NavLink>
        <NavLink to="/alunos" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Alunos
        </NavLink>
        <NavLink to="/professores" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Professores
        </NavLink>
        <NavLink to="/cursos/player" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Sala de Aula
        </NavLink>
        
     
        <NavLink to="/gerenciar-aulas" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Administração
        </NavLink>
      </div>

    <NavLink to="/perfil" className="navbar-profile" style={{ textDecoration: 'none' }}>
        <div className="profile-info">
            <span className="profile-name">Aluno Teste</span>
            <small className="profile-role">Iniciante</small>
        </div>
        <div className="profile-avatar">
            <span>AT</span> 
        </div>
      </NavLink>
    </nav>
  );
}

export default Navbar;
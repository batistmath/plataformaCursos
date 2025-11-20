import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>&copy; 2025 Plataforma de Cursos. Todos os direitos reservados.</p>
        <div className="footer-links">
          <a href="#">Sobre nós</a>
          <a href="#">Contato</a>
          <a href="#">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
<<<<<<< HEAD
// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Strona Główna</Link></li>
        <li><Link to="/register">Zarejestruj Temat</Link></li>
        <li><Link to="/topics">Lista Tematów</Link></li>
        <li><Link to="/admin">Panel Administracyjny</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
=======
// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Strona Główna</Link></li>
        <li><Link to="/register">Zarejestruj Temat</Link></li>
        <li><Link to="/topics">Lista Tematów</Link></li>
        <li><Link to="/admin">Panel Administracyjny</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
>>>>>>> 83e75301c131f73ece5c632243153a9072ad27e0

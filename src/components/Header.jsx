// Here we are importing a CSS file as a dependency
import '../styles/Header.css';
import React from 'react';
import NavTabs from './NavTabs';

function Header() {
  return (
    <header className="header">
        <h1>Pam Willis</h1>
      <nav><NavTabs/></nav>
    </header>
  );
}

export default Header;
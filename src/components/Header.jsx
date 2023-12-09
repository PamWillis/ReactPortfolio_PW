// Here we are importing a CSS file as a dependency
import { Outlet } from 'react-router-dom';
import '../styles/Header.css';
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
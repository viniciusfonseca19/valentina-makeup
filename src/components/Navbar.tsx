import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import '../styles/navbar.css';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#" className="navbar-logo" onClick={closeMobileMenu}>
          Valentina Makeup
        </a>
        
        <div className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#hero" className="navbar-link" onClick={closeMobileMenu}>Início</a>
          <a href="#catalog" className="navbar-link" onClick={closeMobileMenu}>Catálogo</a>
          <a href="#location" className="navbar-link" onClick={closeMobileMenu}>Onde Estamos</a>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Menu">
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
}

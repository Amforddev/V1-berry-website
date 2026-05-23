import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ navigate }: { navigate: (page: string, anchor?: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (page: string, anchor?: string) => {
    setIsOpen(false);
    navigate(page, anchor);
  };

  return (
    <nav className="topnav" id="topnav">
      <a href="#" className="nav-brand" onClick={(e) => { e.preventDefault(); handleNav('home'); }}>
        <svg width="32" height="32"><use href="#coin"/></svg>
        <span>berry</span>
      </a>

      {/* Desktop Links */}
      <div className="nav-links">
        <a href="#" onClick={(e) => { e.preventDefault(); handleNav('home','how'); }}>How it works</a>
        <a href="#" onClick={(e) => { e.preventDefault(); handleNav('home','voices'); }}>Voices</a>
        <a href="#" onClick={(e) => { e.preventDefault(); handleNav('about'); }}>About</a>
      </div>

      <div className="nav-actions">
        <a href="#" className="btn btn-primary btn-get-app" data-ripple style={{ padding: '11px 20px', fontSize: '13px', borderRadius: '12px' }} onClick={(e) => { e.preventDefault(); handleNav('home','cta'); }}>Get the App</a>
        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} color="var(--on-indigo)" /> : <Menu size={24} color="var(--on-indigo)" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
        <div className="mobile-nav-inner">
          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('home','how'); }}>How it works</a>
          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('home','voices'); }}>Voices</a>
          <a href="#" onClick={(e) => { e.preventDefault(); handleNav('about'); }}>About</a>
        </div>
      </div>
    </nav>
  );
}

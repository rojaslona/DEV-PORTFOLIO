import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BsLinkedin } from 'react-icons/bs';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`transition-all duration-300 ${
        scrolled ? 'bg-dark-custom shadow-lg' : 'bg-transparent'
      }`}
      variant="dark"
    >
      <Container>
        <Navbar.Brand 
          href="#hero"
          className="gradient-text fw-bold"
        >
          Jose Alejandro Rojas Lona
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link href="#hero" className="text-light-custom">Home</Nav.Link>
            <Nav.Link href="#bio" className="text-light-custom">About</Nav.Link>
            <Nav.Link href="#skills" className="text-light-custom">Skills</Nav.Link>
            <Nav.Link href="#projects" className="text-light-custom">Projects</Nav.Link>
            <Nav.Link href="#contact" className="text-light-custom">Contact</Nav.Link>
            {/* External links */}
            <div className="d-flex align-items-center ms-lg-3 gap-2">
              <a
                href="https://www.linkedin.com/in/rojaslona"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link px-2 nav-icon-link"
                aria-label="LinkedIn profile"
                title="LinkedIn"
              >
                <BsLinkedin size={18} />
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

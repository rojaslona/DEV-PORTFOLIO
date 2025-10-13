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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          href="#home" 
          className="gradient-text fw-bold"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}
        >
          Jose Alejandro Rojas Lona
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link
              className="text-light-custom"
              onClick={() => scrollToSection('hero')}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              className="text-light-custom"
              onClick={() => scrollToSection('bio')}
            >
              About
            </Nav.Link>
            {/* Skills section link */}
            <Nav.Link
              className="text-light-custom"
              onClick={() => scrollToSection('skills')}
            >
              Skills
            </Nav.Link>
            {/* Projects link */}
            <Nav.Link
              className="text-light-custom"
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </Nav.Link>
            <Nav.Link 
              className="text-light-custom"
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </Nav.Link>
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
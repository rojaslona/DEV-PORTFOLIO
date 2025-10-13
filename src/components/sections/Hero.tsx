import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { BsCodeSlash, BsEnvelope } from 'react-icons/bs';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <div className="fade-in-up">
              <h1 className="display-2 fw-bold mb-4">
                <span className="gradient-text">Jose Alejandro Rojas Lona</span>
                <br />Fullstack Developer
              </h1>
              <p className="lead text-light-custom mb-5 fs-4">
                Building robust backends with Python/Java & Django, and engaging frontends with React, TypeScript, and modern web standards.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <Button 
                  variant="purple" 
                  size="lg" 
                  className="px-4 py-3 fw-semibold"
                  onClick={() => scrollToSection('skills')}
                >
                  <BsCodeSlash className="me-2" />
                  View Skills
                </Button>
                <Button 
                  variant="outline-light" 
                  size="lg" 
                  className="px-4 py-3 fw-semibold"
                  onClick={() => scrollToSection('contact')}
                >
                  <BsEnvelope className="me-2" />
                  Contact Me
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        
        {/* Floating elements for visual interest */}
        <div className="position-absolute top-50 start-0 translate-middle-y d-none d-lg-block">
          <div 
            className="bg-purple-custom rounded-circle opacity-25 float-animation" 
            style={{ width: '200px', height: '200px' }}
          />
        </div>
        <div className="position-absolute bottom-0 end-0 d-none d-lg-block">
          <div 
            className="bg-purple-custom rounded-circle opacity-15 float-animation-reverse" 
            style={{ 
              width: '300px', 
              height: '300px', 
              transform: 'translate(50%, 50%)'
            }}
          />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
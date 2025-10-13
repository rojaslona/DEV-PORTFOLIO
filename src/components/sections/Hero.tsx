import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { BsCodeSlash, BsEnvelope } from 'react-icons/bs';

const Hero: React.FC = () => {
  // Scroll helper that respects a fixed navbar by subtracting its height
  const scrollToSection = (sectionId: string, evt?: React.MouseEvent | MouseEvent) => {
    console.debug('[hero] scrollToSection called for:', sectionId);
    const element = document.getElementById(sectionId);
    console.debug('[hero] element found:', !!element, element);
    if (!element) return;

    if (evt && typeof (evt as any).clientX === 'number') {
      try {
        const clientX = (evt as any).clientX as number;
        const clientY = (evt as any).clientY as number;
        const elems = document.elementsFromPoint(clientX, clientY);
        const info = elems.slice(0, 8).map((el) => {
          const rect = (el as HTMLElement).getBoundingClientRect ? (el as HTMLElement).getBoundingClientRect() : null;
          const style = window.getComputedStyle(el as Element);
          return {
            tag: (el as Element).tagName,
            classes: (el as Element).className,
            pointerEvents: style.pointerEvents,
            zIndex: style.zIndex,
            rect: rect ? { x: rect.x, y: rect.y, w: rect.width, h: rect.height } : null,
          };
        });
        console.debug('[hero] elementsFromPoint at click:', info);
      } catch (err) {
        console.debug('[hero] elementsFromPoint error:', err);
      }
    }

    const navEl = document.querySelector('nav');
    const navHeight = navEl ? (navEl as HTMLElement).offsetHeight : 0;
    console.debug('[hero] navHeight:', navHeight);

    const elementTop = element.getBoundingClientRect().top + window.scrollY;
    const offset = 10; // small gap between section and navbar
    const targetPosition = Math.max(elementTop - navHeight - offset, 0);
    console.debug('[hero] elementTop:', elementTop, 'targetPosition:', targetPosition);

    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
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
                  as="a"
                  href="#skills"
                  variant="purple"
                  size="lg" 
                  className="px-4 py-3 fw-semibold"
                  onClick={(e) => { console.log('[hero] View Skills click handler'); e.preventDefault(); scrollToSection('skills', e); }}
                >
                  <BsCodeSlash className="me-2" />
                  View Skills
                </Button>
                <Button 
                  as="a"
                  href="#contact"
                  variant="outline-light"
                  size="lg" 
                  className="px-4 py-3 fw-semibold"
                  onClick={(e) => { console.log('[hero] Contact Me click handler'); e.preventDefault(); scrollToSection('contact', e); }}
                >
                  <BsEnvelope className="me-2" />
                  Contact Me
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        
        {/* Floating elements for visual interest */}
        <div className="position-absolute top-50 start-0 translate-middle-y d-none d-lg-block" style={{ pointerEvents: 'none' }}>
          <div
            className="bg-purple-custom rounded-circle opacity-25 float-animation"
            style={{ width: '200px', height: '200px' }}
          />
        </div>
        <div className="position-absolute bottom-0 end-0 d-none d-lg-block" style={{ pointerEvents: 'none' }}>
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
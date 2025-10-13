import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-dark-custom text-light-custom">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="d-flex align-items-center mb-3 mb-md-0">
              <h5 className="gradient-text mb-0 me-3">Fullstack Developer</h5>
              <div className="d-flex gap-3">
                <a 
                  href="https://github.com/rojaslona"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="platform-link"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <BsGithub size={18} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/rojaslona"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="platform-link"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <BsLinkedin size={18} />
                </a>
              </div>
            </div>
          </Col>
          <Col md={6} className="text-md-end">
            <p className="text-muted-custom mb-0">
              © {currentYear} Fullstack Developer. All rights reserved.
            </p>
            <p className="text-muted-custom mb-0">
              Crafted with care using React & TypeScript
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
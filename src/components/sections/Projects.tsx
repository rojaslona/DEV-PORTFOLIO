import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { BsGithub, BsBoxArrowUpRight } from 'react-icons/bs';
import { SiReact, SiDjango, SiPython, SiTypescript, SiPostgresql, SiDocker, SiVite, SiPostman } from 'react-icons/si';

type Project = {
  id: string;
  name: string;
  description: string;
  tech: Array<{
    name: string;
    icon: React.ReactNode;
  }>;
  links: {
    github?: string;
    demo?: string;
  };
};

const projects: Project[] = [
  {
    id: 'p1',
    name: 'Portfolio Platform',
    description:
      'Fullstack portfolio app built with React, TypeScript, and Django REST. Features dark mode, responsive UI, and CMS-like project management.',
    tech: [
      { name: 'React', icon: <SiReact color="#61DAFB" /> },
      { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
      { name: 'Django', icon: <SiDjango color="#0C4B33" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql color="#336791" /> },
    ],
    links: {
      github: 'https://github.com/rojaslona',
      demo: 'https://www.linkedin.com/in/rojaslona',
    },
  },
  {
    id: 'p2',
    name: 'API Gateway & Auth',
    description:
      'Token-based API with Django REST Framework, JWT auth, rate limiting, and Postman collection for automated testing.',
    tech: [
      { name: 'Django', icon: <SiDjango color="#0C4B33" /> },
      { name: 'Python', icon: <SiPython color="#3776AB" /> },
      { name: 'Postman', icon: <SiPostman color="#FF6C37" /> },
    ],
    links: {
      github: 'https://github.com/rojaslona',
    },
  },
  {
    id: 'p3',
    name: 'Real-time Dashboard',
    description:
      'Interactive analytics dashboard with WebSocket updates, React charts, and Dockerized services for easy deployment.',
    tech: [
      { name: 'React', icon: <SiReact color="#61DAFB" /> },
      { name: 'Vite', icon: <SiVite color="#646CFF" /> },
      { name: 'Docker', icon: <SiDocker color="#2496ED" /> },
    ],
    links: {
      github: 'https://github.com/rojaslona',
      demo: 'https://www.linkedin.com/in/rojaslona',
    },
  },
];

const Projects: React.FC = () => {
  const openLink = (url?: string) => {
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="py-5">
      <Container>
        <Row className="justify-content-center mb-5 text-center">
          <Col lg={8}>
            <h2 className="display-4 fw-bold mb-3">
              Tech <span className="gradient-text">Projects</span>
            </h2>
            <p className="lead text-muted-custom">
              Selected work across fullstack web development, APIs, and infrastructure.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {projects.map((p) => (
            <Col key={p.id} md={6} lg={4}>
              <Card className="card-custom h-100">
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="h4 text-light-custom">{p.name}</Card.Title>
                  <Card.Text className="text-muted-custom mb-3">{p.description}</Card.Text>

                  <div className="mb-3 d-flex flex-wrap gap-2">
                    {p.tech.map((t, i) => (
                      <Badge key={i} bg="" className="d-inline-flex align-items-center gap-1 px-2 py-1" style={{ background: 'var(--medium-gray)', color: 'var(--text-light)' }}>
                        <span style={{ display: 'inline-flex', alignItems: 'center' }}>{t.icon}</span>
                        <span className="small">{t.name}</span>
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-auto d-flex gap-2">
                    <Button
                      variant="outline-purple"
                      className="fw-semibold"
                      onClick={() => openLink(p.links.github)}
                    >
                      <BsGithub className="me-2" /> Code
                    </Button>
                    {p.links.demo && (
                      <Button
                        variant="purple"
                        className="fw-semibold"
                        onClick={() => openLink(p.links.demo)}
                      >
                        <BsBoxArrowUpRight className="me-2" /> Live
                      </Button>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;


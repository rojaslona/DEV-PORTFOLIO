import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { BsCodeSlash, BsServer, BsCloud } from 'react-icons/bs';

const Bio: React.FC = () => {
  const achievements = [
    {
      icon: <BsCodeSlash className="text-purple-custom" size={40} />,
      title: "Fullstack Projects Delivered",
      description: "React + Django/Java applications shipped end-to-end"
    },
    {
      icon: <BsServer className="text-purple-custom" size={40} />,
      title: "APIs Designed & Deployed",
      description: "Secure RESTful services with auth, docs, and monitoring"
    },
    {
      icon: <BsCloud className="text-purple-custom" size={40} />,
      title: "Cloud & CI/CD",
      description: "Dockerized deployments with automated pipelines"
    }
  ];

  const experience = [
    {
      period: "2025 - Present",
      title: "Fullstack Developer",
      company: "H&B Spa Website",
      description: "Building web apps with React & JavaScript, Django REST APIs, and SQL. End-to-end delivery from UX to deployment."
    },
    {
      period: "2025 - Present",
      title: "Audio Plugin Developer",
      company: "Personal/Freelance",
      description: "Creating VST/AU plugins with C++ and JUCE framework, implementing Rust as innovation. Focus on performance, usability, and cross-platform support."
    },
    {
      period: "2025 - Present",
      title: "Fullstack Developer",
      company: "Personal Projects",
      description: "Architected and built this portfolio with React and TypeScript, focusing on responsive design, accessibility, reusable components and performance optimizations."
    }
  ];

  return (
    <section id="bio" className="py-5">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="display-4 fw-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="lead text-muted-custom">
              Fullstack developer focused on building scalable backends and delightful frontends. I work with Python, Java, Django, React, TypeScript, and modern tooling. Constantly learning and improving.
            </p>
          </Col>
        </Row>

        <Row className="align-items-center mb-5">
                <Col lg={6} className="mb-4 mb-lg-0">
                  <div className="fade-in-left">
                    <h3 className="h2 fw-bold mb-4 gradient-text">My Journey</h3>
                    <p className="text-light-custom mb-4">
                      Early in my career with strong fundamentals: I focus on shipping reliable features, learning modern best practices, and iterating quickly to improve code quality and user experience.
                    </p>
                    <p className="text-light-custom mb-4">
                      On the backend I build pragmatic REST APIs with Django (and Java when appropriate), prioritizing security, testing, clear contracts, and observability so systems remain maintainable as they scale.
                    </p>
                    <p className="text-light-custom">
                      On the frontend I use React and TypeScript to create accessible, performant UIs and reusable components, and I embrace CI\/CD, containerization, and cloud deployments as part of delivering production-ready software.
                    </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="fade-in-right">
              <div className="position-relative">
                <div 
                  className="bg-gradient-custom rounded-4 mx-auto"
                  style={{ width: '400px', height: '500px', maxWidth: '100%' }}
                >
                  <div className="position-absolute top-50 start-50 translate-middle text-center">
                    <BsCodeSlash size={100} className="text-white opacity-75" />
                    <p className="text-white mt-3 mb-0">Professional Headshot</p>
                    <p className="text-white opacity-75 small">Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col>
            <h3 className="h2 fw-bold text-center mb-5 gradient-text">Highlights</h3>
            <Row>
              {achievements.map((achievement, index) => (
                <Col lg={4} md={6} className="mb-4" key={index}>
                  <Card className="card-custom h-100 text-center p-4">
                    <Card.Body>
                      <div className="mb-3">
                        {achievement.icon}
                      </div>
                      <Card.Title className="h4 text-light-custom">
                        {achievement.title}
                      </Card.Title>
                      <Card.Text className="text-muted-custom">
                        {achievement.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        <Row>
          <Col>
            <h3 className="h2 fw-bold text-center mb-5 gradient-text">Experience</h3>
            <Row>
              {experience.map((exp, index) => (
                <Col lg={4} md={6} className="mb-4" key={index}>
                  <Card className="card-custom h-100">
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <span className="badge bg-purple-custom">{exp.period}</span>
                      </div>
                      <Card.Title className="h5 text-light-custom">
                        {exp.title}
                      </Card.Title>
                      <Card.Subtitle className="mb-3 text-purple-custom">
                        {exp.company}
                      </Card.Subtitle>
                      <Card.Text className="text-muted-custom">
                        {exp.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Bio;
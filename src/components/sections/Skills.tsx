import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  SiPython,
  SiDjango,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiPostman,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import type { IconType } from 'react-icons';

interface SkillItem {
  name: string;
  Icon: IconType;
  color?: string;
}

const skills: SkillItem[] = [
  { name: 'Python', Icon: SiPython, color: '#3776AB' },
  { name: 'Java', Icon: FaJava, color: '#E76F00' },
  { name: 'Django', Icon: SiDjango, color: '#0C4B33' },
  { name: 'React', Icon: SiReact, color: '#61DAFB' },
  { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
  { name: 'HTML5', Icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', Icon: SiCss3, color: '#1572B6' },
  { name: 'Postman', Icon: SiPostman, color: '#FF6C37' },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-5">
      <Container>
        <Row className="justify-content-center mb-5 text-center">
          <Col lg={8}>
            <h2 className="display-4 fw-bold mb-3">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="lead text-muted-custom">
              A focused set of tools I use to design, build, and deliver scalable web applications.
            </p>
          </Col>
        </Row>
        <Row className="g-4">
          {skills.map(({ name, Icon, color }) => (
            <Col key={name} xs={6} sm={4} md={3} lg={3} className="d-flex">
              <div className="card-custom w-100 p-4 d-flex align-items-center justify-content-center text-center">
                <Icon size={36} className="mb-2" color={color} />
                <span className="fw-semibold text-light-custom">{name}</span>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;

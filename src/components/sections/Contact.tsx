import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { BsEnvelope, BsPhone, BsGeoAlt, BsClock } from 'react-icons/bs';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    service: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setShowAlert(true);
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        service: ''
      });
      
      setTimeout(() => setShowAlert(false), 5000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <BsEnvelope size={24} />,
      title: "Email",
      value: "jrojaslona@gmail.com",
      link: "mailto:jrojaslona@gmail.com"
    },
    {
      icon: <BsPhone size={24} />,
      title: "Phone",
      value: "+52 33 2720 6701",
      link: "tel:+523327206701"
    },
    {
      icon: <BsGeoAlt size={24} />,
      title: "Location",
      value: "Guadalajara, Jalisco, Mexico",
      link: null
    },
    {
      icon: <BsClock size={24} />,
      title: "Response Time",
      value: "Within 24 hours",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-5">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="display-4 fw-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="lead text-muted-custom">
              Ready to build your next web application or API? Share a bit about your goals and I’ll follow up with a plan, timeline, and estimate.
            </p>
          </Col>
        </Row>

        <Row>
          <Col lg={8} className="mb-5 mb-lg-0">
            <Card className="contact-form border-0 shadow-lg">
              <Card.Body className="p-4">
                <h3 className="h4 fw-bold text-light-custom mb-4">Send Me a Message</h3>
                
                {showAlert && (
                  <Alert variant="success" className="mb-4">
                    Thanks for your message! I'll get back to you within 24 hours.
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label className="text-light-custom">Name *</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label className="text-light-custom">Email *</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label className="text-light-custom">Service Interest</Form.Label>
                        <Form.Select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                        >
                          <option value="">Select a service</option>
                          <option value="fullstack">Fullstack Web App</option>
                          <option value="frontend">Frontend (React/TypeScript)</option>
                          <option value="backend">Backend/API (Python/Django/Java)</option>
                          <option value="integration">Integration & Automation</option>
                          <option value="optimization">Performance & Bug Fixes</option>
                          <option value="consultation">Technical Consultation</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label className="text-light-custom">Subject</Form.Label>
                        <Form.Control
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="Project inquiry"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-4">
                    <Form.Label className="text-light-custom">Message *</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                      required
                    />
                  </Form.Group>

                  <Button 
                    type="submit" 
                    variant="purple" 
                    size="lg" 
                    className="w-100 fw-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="loading-spinner me-2"></span>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4}>
            <div className="h-100">
              <h3 className="h4 fw-bold text-light-custom mb-4">Contact Information</h3>
              
              {contactInfo.map((info, index) => (
                <div key={index} className="d-flex align-items-start mb-4">
                  <div className="text-purple-custom me-3 mt-1">
                    {info.icon}
                  </div>
                  <div>
                    <h6 className="text-light-custom mb-1">{info.title}</h6>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        className="text-muted-custom text-decoration-none"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-muted-custom">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}

              <div className="mt-5 p-4 rounded-3 bg-gradient-custom">
                <h5 className="text-white mb-3">Quick Response Guarantee</h5>
                <p className="text-white opacity-75 mb-0">
                  I pride myself on quick communication. Expect a detailed response 
                  to your inquiry within 24 hours, including project timeline and pricing.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
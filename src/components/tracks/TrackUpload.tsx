import React, { useState, useRef } from 'react';
import { Modal, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { BsCloudUpload } from 'react-icons/bs';
import type { Track, TrackRole } from '../../types';

interface TrackUploadProps {
  show: boolean;
  onHide: () => void;
  onSave: (track: Omit<Track, 'id'>) => void;
  editTrack?: Track | null;
}

const TrackUpload: React.FC<TrackUploadProps> = ({ show, onHide, onSave, editTrack }) => {
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    year: new Date().getFullYear(),
    genre: '',
    description: '',
    role: [] as TrackRole[],
    tags: '',
    links: {
      github: '',
      liveDemo: '',
      docs: ''
    }
  });

  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const coverInputRef = useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (editTrack) {
      setFormData({
        title: editTrack.title,
        artist: editTrack.artist,
        year: editTrack.year || new Date().getFullYear(),
        genre: editTrack.genre || '',
        description: editTrack.description || '',
        role: editTrack.role,
        tags: editTrack.tags.join(', '),
        links: {
          github: editTrack.links.github || '',
          liveDemo: editTrack.links.liveDemo || '',
          docs: editTrack.links.docs || ''
        }
      });
      setCoverFile(null);
    } else {
      resetForm();
    }
  }, [editTrack, show]);

  const resetForm = () => {
    setFormData({
      title: '',
      artist: '',
      year: new Date().getFullYear(),
      genre: '',
      description: '',
      role: [],
      tags: '',
      links: {
        github: '',
        liveDemo: '',
        docs: ''
      }
    });
    setCoverFile(null);
    setErrors([]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name.startsWith('links.')) {
      const linkKey = name.split('.')[1] as 'github' | 'liveDemo' | 'docs';
      setFormData(prev => ({
        ...prev,
        links: {
          ...prev.links,
          [linkKey]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: name === 'year' ? parseInt(value) || new Date().getFullYear() : value
      }));
    }
  };

  const handleRoleChange = (role: TrackRole, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      role: checked 
        ? [...prev.role, role]
        : prev.role.filter(r => r !== role)
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCoverFile(file);
    }
  };

  const validateForm = (): boolean => {
    const newErrors: string[] = [];
    
    if (!formData.title.trim()) newErrors.push('Project title is required');
    if (!formData.artist.trim()) newErrors.push('Project owner/organization is required');
    if (formData.role.length === 0) newErrors.push('Select at least one role');

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    setTimeout(() => {
      const track: Omit<Track, 'id'> = {
        title: formData.title,
        artist: formData.artist,
        year: formData.year,
        genre: formData.genre || undefined,
        description: formData.description || undefined,
        role: formData.role,
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(Boolean),
        links: {
          github: formData.links.github || undefined,
          liveDemo: formData.links.liveDemo || undefined,
          docs: formData.links.docs || undefined
        },
        coverImage: coverFile ? URL.createObjectURL(coverFile) : undefined
      };
      
      onSave(track);
      setIsSubmitting(false);
      onHide();
      resetForm();
    }, 600);
  };

  const roles: { value: TrackRole; label: string }[] = [
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'fullstack', label: 'Fullstack' },
    { value: 'devops', label: 'DevOps' }
  ];

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton className="bg-dark-custom text-light-custom">
        <Modal.Title>{editTrack ? 'Edit Project' : 'Add New Project'}</Modal.Title>
      </Modal.Header>
      
      <Modal.Body className="bg-dark-custom text-light-custom">
        {errors.length > 0 && (
          <Alert variant="danger">
            <ul className="mb-0">
              {errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Project Title *</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="e.g., Real-time Dashboard"
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Owner / Organization *</Form.Label>
                <Form.Control
                  type="text"
                  name="artist"
                  value={formData.artist}
                  onChange={handleInputChange}
                  placeholder="Client, Company, or Personal"
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Year</Form.Label>
                <Form.Control
                  type="number"
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  min="2000"
                  max={new Date().getFullYear() + 1}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Domain / Category</Form.Label>
                <Form.Control
                  type="text"
                  name="genre"
                  value={formData.genre}
                  onChange={handleInputChange}
                  placeholder="e.g., SaaS, Fintech, E-commerce"
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Your Role(s) *</Form.Label>
            <div className="d-flex flex-wrap gap-3">
              {roles.map(role => (
                <Form.Check
                  key={role.value}
                  type="checkbox"
                  id={`role-${role.value}`}
                  label={role.label}
                  checked={formData.role.includes(role.value)}
                  onChange={(e) => handleRoleChange(role.value, e.target.checked)}
                />
              ))}
            </div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Brief description of the project and your contribution"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Tags</Form.Label>
            <Form.Control
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleInputChange}
              placeholder="Separate with commas (e.g., Django, React, PostgreSQL)"
            />
            <Form.Text className="text-muted">Separate multiple tags with commas</Form.Text>
          </Form.Group>

          {/* Project Image upload */}
          <Row className="mb-4">
            <Col md={12}>
              <Form.Group>
                <Form.Label>Project Image</Form.Label>
                <div
                  className="file-upload-area"
                  onClick={() => coverInputRef.current?.click()}
                >
                  <BsCloudUpload size={40} className="text-purple-custom mb-2" />
                  <p className="mb-1">
                    {coverFile ? coverFile.name : 'Click to upload an optional project cover image'}
                  </p>
                  <small className="text-muted">JPG, PNG supported</small>
                </div>
                <input
                  ref={coverInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="d-none"
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Tech Links */}
          <h6 className="text-light-custom mb-3">Links</h6>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>GitHub URL</Form.Label>
                <Form.Control
                  type="url"
                  name="links.github"
                  value={formData.links.github}
                  onChange={handleInputChange}
                  placeholder="https://github.com/rojaslona/..."
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Live Demo URL</Form.Label>
                <Form.Control
                  type="url"
                  name="links.liveDemo"
                  value={formData.links.liveDemo}
                  onChange={handleInputChange}
                  placeholder="https://..."
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Label>Documentation URL</Form.Label>
                <Form.Control
                  type="url"
                  name="links.docs"
                  value={formData.links.docs}
                  onChange={handleInputChange}
                  placeholder="https://... (API docs, README, etc.)"
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      
      <Modal.Footer className="bg-dark-custom">
        <Button variant="outline-secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button 
          variant="purple" 
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="loading-spinner me-2"></span>
              Saving...
            </>
          ) : (
            editTrack ? 'Update Project' : 'Add Project'
          )}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TrackUpload;


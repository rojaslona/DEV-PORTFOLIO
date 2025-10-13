import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import { BsGithub, BsBoxArrowUpRight, BsBook } from 'react-icons/bs';
import type { Track, TrackRole } from '../../types';
import './TrackCard.css';

interface TrackCardProps {
  track: Track;
  onEdit?: (track: Track) => void;
  onDelete?: (trackId: string) => void;
  isAdmin?: boolean;
}

const TrackCard: React.FC<TrackCardProps> = ({ track, onEdit, onDelete, isAdmin = false }) => {
  const getRoleBadgeColor = (role: TrackRole): string => {
    switch (role) {
      case 'frontend': return 'info';
      case 'backend': return 'primary';
      case 'fullstack': return 'success';
      case 'devops': return 'warning';
      default: return 'secondary';
    }
  };

  const getRoleLabel = (role: TrackRole): string => {
    switch (role) {
      case 'frontend': return 'Frontend';
      case 'backend': return 'Backend';
      case 'fullstack': return 'Fullstack';
      case 'devops': return 'DevOps';
      default: return role;
    }
  };

  const openLink = (url?: string) => {
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
  };

  const defaultCover = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMUExQTFBIi8+CjxwYXRoIGQ9Ik0xMDAgNTBDMTI1IDUwIDEzNSA2NSAxMzUgODBDMTM1IDk1IDEyNSAxMTAgMTAwIDExMEM3NSAxMTAgNjUgOTUgNjUgODBDNjUgNjUgNzUgNTAgMTAwIDUwWiIgZmlsbD0iIzZGNDJDMSIvPgo8Y2lyY2xlIGN4PSIxMDAiIGN5PSIxMDAiIHI9IjMwIiBzdHJva2U9IiM2RjQyQzEiIHN0cm9rZS13aWR0aD0iMyIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4K';

  return (
    <Card className="track-card h-100">
      <div className="position-relative">
        <Card.Img 
          variant="top" 
          src={track.coverImage || defaultCover}
          alt={`${track.title} cover`}
          style={{ height: '200px', objectFit: 'cover' }}
        />
      </div>

      <Card.Body className="d-flex flex-column">
        <div className="mb-3">
          <Card.Title className="h5 text-light-custom mb-2">{track.title}</Card.Title>
          <Card.Subtitle className="text-purple-custom mb-2">{track.artist}</Card.Subtitle>
          {track.year && (
            <small className="text-muted-custom">{track.year}</small>
          )}
        </div>

        {/* Role badges */}
        <div className="mb-3">
          {track.role.map((role, index) => (
            <Badge 
              key={index}
              bg={getRoleBadgeColor(role)}
              className="me-2 mb-1"
            >
              {getRoleLabel(role)}
            </Badge>
          ))}
        </div>

        {/* Description */}
        {track.description && (
          <Card.Text className="text-muted-custom small mb-3 flex-grow-1">
            {track.description}
          </Card.Text>
        )}

        {/* Tags */}
        {track.tags && track.tags.length > 0 && (
          <div className="mb-3">
            {track.tags.map((tag, index) => (
              <span 
                key={index}
                className="badge bg-secondary me-1 mb-1"
                style={{ fontSize: '0.7rem' }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Project links */}
        <div className="platform-links mt-auto">
          {track.links.github && (
            <button
              className="platform-link me-2"
              onClick={() => openLink(track.links.github)}
              title="GitHub Repository"
            >
              <BsGithub size={18} />
            </button>
          )}
          {track.links.liveDemo && (
            <button
              className="platform-link me-2"
              onClick={() => openLink(track.links.liveDemo)}
              title="Live Demo"
            >
              <BsBoxArrowUpRight size={18} />
            </button>
          )}
          {track.links.docs && (
            <button
              className="platform-link me-2"
              onClick={() => openLink(track.links.docs)}
              title="Documentation"
            >
              <BsBook size={18} />
            </button>
          )}
        </div>

        {/* Admin controls */}
        {isAdmin && (
          <div className="mt-3 pt-3 border-top">
            <Button 
              variant="outline-primary" 
              size="sm" 
              className="me-2"
              onClick={() => onEdit?.(track)}
            >
              Edit
            </Button>
            <Button 
              variant="outline-danger" 
              size="sm"
              onClick={() => onDelete?.(track.id)}
            >
              Delete
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default TrackCard;

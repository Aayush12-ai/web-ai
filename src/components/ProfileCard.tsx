import React from 'react';
import './ProfileCard.css';

interface ProfileCardProps {
  name: string;
  title: string;
  handle: string;
  status: string;
  contactText: string;
  avatarUrl: string;
  showUserInfo: boolean;
  enableTilt: boolean;
  enableMobileTilt: boolean;
  onContactClick: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  title,
  handle,
  status,
  contactText,
  avatarUrl,
  showUserInfo,
  enableTilt,
  enableMobileTilt,
  onContactClick,
}) => {
  const cardClassName = `profile-card ${enableTilt ? 'tilt' : ''} ${enableMobileTilt ? 'mobile-tilt' : ''}`;

  return (
    <div className={cardClassName}>
      <div className="profile-card-header">
        <img src={avatarUrl} alt={`${name}'s avatar`} className="profile-avatar" />
        {showUserInfo && (
          <div className="profile-user-info">
            <h2>{name}</h2>
            <p>{title}</p>
            <p className="profile-handle">@{handle}</p>
          </div>
        )}
      </div>
      <div className="profile-card-body">
        <div className="profile-status">
          <span className={`status-indicator ${status.toLowerCase()}`}></span>
          <p>{status}</p>
        </div>
        <button className="contact-button" onClick={onContactClick}>
          {contactText}
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;

import React from 'react';
import '../stylesheets/layout/SavedMeetings.scss';
import { Link } from 'react-router-dom';
import { FaMicrophone } from 'react-icons/fa';

const SavedMeetings = () => {
  const meetings = [
    { 
      id: 1, 
      type: 'mp4', 
      name: 'Reunión N°1 de negocios.mp4', 
      startTime: '10:00 AM', 
      endTime: '11:00 AM', 
      location: 'Sala de conferencias A' 
    },
    { 
      id: 2, 
      type: 'wav', 
      name: 'Reunión N°2 de negocios.wav', 
      startTime: '1:00 PM', 
      endTime: '2:00 PM', 
      location: 'Sala de conferencias B' 
    },
    { 
      id: 3, 
      type: 'mp3', 
      name: 'Reunión N°3 de negocios.mp3', 
      startTime: '3:00 PM', 
      endTime: '4:00 PM', 
      location: 'Sala de juntas principal' 
    },
  ];

  return (
    <div className="saved-meetings">
      <header className="header">
        <Link to="/home/perfil" className="profile-icon">👤</Link>
        <h1>Reuniones guardadas</h1>
        <Link to="/home" className="close-icon">✖</Link>
      </header>
      <div className="meeting-list">
        {meetings.map((meeting) => (
          <div key={meeting.id} className="meeting-card">
            <div className="icon">
              <FaMicrophone size={40} />
            </div>
            <p className="meeting-name">{meeting.name}</p>
            <p className="meeting-time">
              <strong>Hora:</strong> {meeting.startTime} - {meeting.endTime}
            </p>
            <p className="meeting-location">
              <strong>Ubicación:</strong> {meeting.location}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedMeetings;

import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/layout/ProfileMenu.scss';

const ProfileMenu = () => {
  return (
    <div className="profile-menu">
      <div className="profile-menu__header">
        <Link to="/home" className="profile-menu__close">✖️</Link>
        <div className="profile-menu__avatar">👤</div>
        <h2 className="profile-menu__name">[Nombre]</h2>
      </div>

      <div className="profile-menu__options">
        <SettingItem icon="👤" label="Información Personal" path="/home/configuracion" />
        <SettingItem icon="📅" label="Calendario" path="/home/calendario" />
        <SettingItem icon="🎙️" label="Grabaciones guardadas" path="/home/audios_guardados" />
        <SettingItem icon="❤️" label="Actas guardadas" path="/home/acta_guardada" />
      </div>
    </div>
  );
};

const SettingItem = ({ icon, label, path }) => (
  <Link to={path} className="setting-item">
    <span className="setting-item__icon">{icon}</span>
    <span className="setting-item__label">{label}</span>
  </Link>
);

export default ProfileMenu;
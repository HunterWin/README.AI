import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/layout/AccountSettings.scss';

const AccountSettings = () => {
  return (
    <div className="account-settings">
      <div className="account-settings__header">
        {/* Enlace para cerrar el menú y volver al perfil */}
        <Link to="/home/perfil" className="account-settings__close">✖️</Link>
        
        <div className="account-settings__avatar">👤</div>
        <h2 className="account-settings__name">[Nombre]</h2>
      </div>
      
      <div className="account-settings__options">
        {/* Información de perfil, no clickeable */}
        <SettingItem icon="👤" label="[Nombre]"/>
        <SettingItem icon="📩" label="[Correo]"/>
        <SettingItem icon="🔑" label="[Contraseña]"/>
      </div>
    </div>
  );
};

// Componente SettingItem para cada opción del menú, mostrando información estática
const SettingItem = ({ icon, label, info }) => (
  <div className="setting-item">
    <span className="setting-item__icon">{icon}</span>
    <span className="setting-item__label">{label}</span>
    <span className="setting-item__info">{info}</span>
  </div>
);

export default AccountSettings;

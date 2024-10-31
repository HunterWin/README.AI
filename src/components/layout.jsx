import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import InicioSesion from '../pages/Inicio_sesion';
import GenerarActa from '../pages/Generar_acta';
import SavedActs from '../pages/SavedActs';
import SavedMeetings from '../pages/SavedMeetings';
import CalendarPage from '../pages/calendar_page';
import ProfileMenu from '../pages/ProfileMenu';
import GrabarReunion from '../pages/Grabar_audio';
import HomePage from '../pages/home_page';
import ReunionActa from '../pages/reunion_acta';
import AccountSettings from '../pages/AccountSettings';

import NavBar from '../components/nav_bar';

const AppContent = () => {
  const location = useLocation();
  const showNavBar = location.pathname !== '/';

  return (
    <div className='layout'>
      <h1 className='layout__title'>README.AI</h1>
      {showNavBar && <NavBar />}
      <div className='layout__page'>
        <Routes>
          <Route path='/' element={<InicioSesion />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/home/grabar_reunion' element={<GrabarReunion />} />
          <Route path='/home/reunion_acta' element={<ReunionActa />} />
          <Route path='/home/generar_acta' element={<GenerarActa />} />
          <Route path='/home/acta_guardada' element={<SavedActs />} />
          <Route path='/home/audios_guardados' element={<SavedMeetings />} />
          <Route path='/home/calendario' element={<CalendarPage />} />
          <Route path='/home/perfil' element={<ProfileMenu />} />
          <Route path='/home/configuracion' element={<AccountSettings />} />
          <Route path="*" element={<h2>Página no encontrada</h2>} />
        </Routes>
      </div>
    </div>
  );
};

const Layout = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default Layout;

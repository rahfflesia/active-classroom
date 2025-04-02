import React from 'react';
import './roles.css';
import estudianteIcon from './estudiante.png';
import profesorIcon from './profesor.jpg';
import adminIcon from './adm.png';
import Navbar from '../RoleSelection/Navbar/navbarRoles';

const Roles = () => {
  return (

    <div className="roles-container">
      <div className="navbar-wrapper">
        <Navbar />
      </div>
      
      <main className="main-content">
        <div className="roles">
          <div className="role-card">
            <img src={estudianteIcon} alt="Estudiante" className="role-icon" />
            <h2 className="role-title">Un estudiante</h2>
            <p className="role-description">para participar en actividades divertidas en el aula</p>
          </div>
          
          <div className="role-card">
            <img src={profesorIcon} alt="Profesor" className="role-icon" />
            <h2 className="role-title">Un profesor</h2>
            <p className="role-description">instruir, involucrar y evaluar a mis alumnos</p>
          </div>
          
          <div className="role-card">
            <img src={adminIcon} alt="Administrador" className="role-icon" />
            <h2 className="role-title">Un administrador</h2>
            <p className="role-description">entrenador de instrucción, currículo o líder escolar</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Roles;
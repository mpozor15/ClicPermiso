import { NavLink } from 'react-router-dom';
import '../App.css'; // Importamos estilos que definiremos luego

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo-container">
         {/* Si tienes el logo, úsalo. Si no, texto simple por ahora */}
         <h1 className="logo-text">I.E.S Albarregas</h1>
      </div>
      
      <nav>
        <ul className="nav-list">
          <li>
            <NavLink to="/diurno" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              📅 Sol. día diurno
            </NavLink>
          </li>
          <li>
            <NavLink to="/vespertino" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              📅 Sol. día vespertino
            </NavLink>
          </li>
          <li>
            <NavLink to="/perfil" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              👤 Mi Perfil
            </NavLink>
          </li>
          <li>
            <NavLink to="/mis-dias" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              📂 Mis días Solicitados
            </NavLink>
          </li>
          <li>
            <NavLink to="/ausencias" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              ❌ Mis ausencias
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
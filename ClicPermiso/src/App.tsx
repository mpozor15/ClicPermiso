import { Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { SolicitudDiurno } from './pages/SolicitudDiurno';
import { SolicitudVespertino } from './pages/SolicitudVespertino';
import { Perfil } from './pages/Perfil';
import { MisDias } from './pages/MisDias';
import { Ausencias } from './pages/Ausencias';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Sidebar fijo a la izquierda */}
      <Sidebar />
      
      {/* Contenedor principal a la derecha */}
      <div className="main-content">
        <Header />
        
        {/* Aquí se carga la página correspondiente */}
        <main className="page-content">
          <Routes>
            {/* Redirigir la raíz "/" a "/diurno" por defecto */}
            <Route path="/" element={<Navigate to="/diurno" replace />} />
            
            <Route path="/diurno" element={<SolicitudDiurno />} />
            <Route path="/vespertino" element={<SolicitudVespertino />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/mis-dias" element={<MisDias />} />
            <Route path="/ausencias" element={<Ausencias />} />
            
            {/* Ruta 404 */}
            <Route path="*" element={<h2>Página no encontrada</h2>} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
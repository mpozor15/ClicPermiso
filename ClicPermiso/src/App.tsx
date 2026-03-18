import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import SolicitarDia from './pages/SolicitarDia';
import EditarPerfil from './pages/EditarPerfil';
import MisAusencias from './pages/MisAusencias';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/solicitar-dia" />} />
          <Route path="solicitar-dia" element={<SolicitarDia />} />
          <Route path="editar-perfil" element={<EditarPerfil />} />
          <Route path="mis-ausencias" element={<MisAusencias />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ScrollToHash } from './components/ScrollToHash'
import Home from './pages/Home.jsx'
import Construccion from './pages/services/Construccion.jsx'
import Remodelaciones from './pages/services/Remodelaciones.jsx'
import DisenoArquitectonico from './pages/services/DisenoArquitectonico.jsx'
import Avaluos from './pages/services/Avaluos.jsx'
import Permisos from './pages/services/Permisos.jsx'
import Asesoria from './pages/services/Asesoria.jsx'
import Portfolio from './pages/Portfolio.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import './App.css'

function App() {
  return (
    <Router>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/construccion" element={<Construccion />} />
        <Route path="/remodelaciones" element={<Remodelaciones />} />
        <Route path="/diseno" element={<DisenoArquitectonico />} />
        <Route path="/avaluos" element={<Avaluos />} />
        <Route path="/permisos" element={<Permisos />} />
        <Route path="/asesoria" element={<Asesoria />} />
        <Route path="/portafolio" element={<Portfolio />} />
        <Route path="/proyecto/:id" element={<ProjectDetail />} />
        <Route path="/servicios/construccion" element={<Navigate to="/construccion" replace />} />
        <Route path="/servicios/remodelaciones" element={<Navigate to="/remodelaciones" replace />} />
        <Route path="/servicios/diseno-arquitectonico" element={<Navigate to="/diseno" replace />} />
        <Route path="/servicios/avaluos" element={<Navigate to="/avaluos" replace />} />
        <Route path="/servicios/permisos" element={<Navigate to="/permisos" replace />} />
        <Route path="/servicios/asesoria" element={<Navigate to="/asesoria" replace />} />
      </Routes>
    </Router>
  )
}

export default App

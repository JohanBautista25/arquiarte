import { HashRouter as Router, Routes, Route } from 'react-router-dom'
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
        <Route path="/servicios/construccion" element={<Construccion />} />
        <Route path="/servicios/remodelaciones" element={<Remodelaciones />} />
        <Route path="/servicios/diseno-arquitectonico" element={<DisenoArquitectonico />} />
        <Route path="/servicios/avaluos" element={<Avaluos />} />
        <Route path="/servicios/permisos" element={<Permisos />} />
        <Route path="/servicios/asesoria" element={<Asesoria />} />
        <Route path="/portafolio" element={<Portfolio />} />
        <Route path="/proyecto/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  )
}

export default App

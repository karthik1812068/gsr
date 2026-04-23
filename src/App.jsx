import { Navigate, Route, Routes } from 'react-router-dom'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import Process from './pages/Process.jsx'
import Services from './pages/Services.jsx'
import Gallery from './pages/Gallery.jsx'
import Testimonials from './pages/Testimonials.jsx'
import { ConsultationProvider } from './components/BookConsultationModal/ConsultationContext.jsx'
import SeoJsonLd from './seo/SeoJsonLd.jsx'

export default function App() {
  return (
    <ConsultationProvider>
      <SeoJsonLd />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/process" element={<Process />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </ConsultationProvider>
  )
}

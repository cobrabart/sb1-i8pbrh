import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import { ServiceDetail } from './pages/services/ServiceDetail';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { TeamMemberDetail } from './pages/team/TeamMemberDetail';
import NotFound from './pages/NotFound';
import { VoiceRecordingService } from './pages/services/VoiceRecordingService';
import { TranslationService } from './pages/services/TranslationService';
import { AIAutomationService } from './pages/services/AIAutomationService';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/voice-recording" element={<VoiceRecordingService />} />
          <Route path="services/translation" element={<TranslationService />} />
          <Route path="services/ai-automation" element={<AIAutomationService />} />
          <Route path="services/:id" element={<ServiceDetail />} />
          <Route path="projects" element={<Projects />} />
          <Route path="team/:id" element={<TeamMemberDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
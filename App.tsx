
import React, { useState, useCallback } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider, LanguageContext } from './contexts/LanguageContext';
import HomePage from './pages/HomePage';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ServicesPage from './pages/ServicesPage';
import PlansPage from './pages/PlansPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import ClientDashboard from './pages/dashboards/ClientDashboard';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

const AppContent: React.FC = () => {
  const { language, direction } = React.useContext(LanguageContext);
  
  React.useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
  }, [language, direction]);

  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/plans" element={<PlansPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard/client" element={<ClientDashboard />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import DashboardLayout from './layout/DashboardLayout';

// Lazy loading components
const Login = lazy(() => import('./LoginOrRegister/Login'));
const Register = lazy(() => import('./LoginOrRegister/Register'));
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="flex items-center justify-center h-screen text-xl">Loading...</div>}>
        <Routes>
          {/* Auth Routes */}
          <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} />
          <Route path="/register" element={<AuthLayout><Register /></AuthLayout>} />
          
          {/* Dashboard Routes */}
          <Route path="/home" element={<DashboardLayout><HomePage /></DashboardLayout>} />
          <Route path="/about" element={<DashboardLayout><AboutPage /></DashboardLayout>} />
          <Route path="/services" element={<DashboardLayout><ServicesPage /></DashboardLayout>} />
          <Route path="/contact" element={<DashboardLayout><ContactPage /></DashboardLayout>} />
          
          {/* Default Route */}
          <Route path="/" element={<DashboardLayout><HomePage /></DashboardLayout>} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

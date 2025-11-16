import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import './styles/App.css';
import AboutMe from './pages/AboutMe';
import Header from './components/sections/Header';
import PageTransition from './components/common/PageTransition';

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/about-me"
          element={
            <PageTransition>
              <AboutMe />
            </PageTransition>
          }
        />
        <Route
          path="/resume"
          element={
            <PageTransition>
              <AboutMe />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="App bg-primary-dark min-h-screen">
        <Header />
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;

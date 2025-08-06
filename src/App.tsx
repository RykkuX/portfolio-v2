import React from 'react';
import Home from './pages/Home';
import './styles/App.css';
import AboutMe from './pages/AboutMe';

//Todo: Enable Routing
function App() {
  return (
    <div className="App">
      <Home />
      <AboutMe />
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Visualization from './components/Visualization';
import Prediction from './components/Prediction';

function App() {
  return (
    <Router>
      <div>
        <header className="header">
          <h1>Visual Analysis of COVID-19 Epidemic</h1>
        </header>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/visualization" element={<Visualization />} />
            <Route path="/prediction" element={<Prediction />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

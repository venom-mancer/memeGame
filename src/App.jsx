import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './components/Welcome';
import Signup from './pages/Signup';

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App; 
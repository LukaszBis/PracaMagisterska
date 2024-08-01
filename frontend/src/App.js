// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import RegisterTopic from './components/RegisterTopic';
import TopicsList from './components/TopicsList';
import AdminPanel from './components/AdminPanel';
import Navbar from './components/Navbar';
import './style.css';  // Dodanie stylów

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={<RegisterTopic />} />
          <Route path="/topics" element={<TopicsList />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

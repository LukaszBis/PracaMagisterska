// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import RegisterTopic from './components/RegisterTopic';
import TopicsList from './components/TopicsList';
import AdminPanel from './components/AdminPanel';
import Navbarmenu from './components/Navbarmenu';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import './style.css';  // Dodanie stylów

function App() {
  return (
    <Router>
      <div className="container">
        <Navbarmenu />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/registertopic" element={<RegisterTopic />} />
          <Route path="/topics" element={<TopicsList />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

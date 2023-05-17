import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import ChatPage from './components/ChatPage';
import LoginPage from './components/LoginPage';
import Nav from './components/Nav';

const App = () => (
  <div className="d-flex flex-column h-100">
    <Nav />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChatPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;

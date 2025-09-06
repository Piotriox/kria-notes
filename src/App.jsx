import { useState } from 'react';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main.jsx';
import Notes from './pages/Notes.jsx';
import Settings from './pages/Settings.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';

function App() {
  const [count, setCount] = useState(0)


  return (
    <div>
      <Routes>
        <Route path="/" element={<Main></Main>} />
        <Route path="/notes" element={<Notes></Notes>} />
        <Route path="/settings" element={<Settings></Settings>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
      </Routes>
    </div>
  );
}

export default App

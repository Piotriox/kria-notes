import './index.css';
import { Notebook, ListChecks, Cog } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

function Footer() {
  const todoRef = useRef(null);
  const notesRef = useRef(null);
  const settingsRef = useRef(null);
  const [todo, setActiveTodo] = useState(false);
  const [notes, setActiveNotes] = useState(false);
  const [settings, setActiveSettings] = useState(false);
  const handleTodoClick= () => {
    setActiveTodo(prev => !prev);
  };
  const handleNotesClick = () => {
    setActiveNotes(prev => !prev);
  };
  const handleSettingsClick = () => {
    setActiveSettings(prev => !prev);
  };

  useEffect(() => {
    if (todoRef.current, notesRef.current, settingsRef.current) {
      if (todo) {
        todoRef.current.style.transform = 'scale(1.3)';
        todoRef.current.style.color = 'rgba(255, 255, 255, 1)';
        todoRef.current.style.animation = 'bounce 1s infinite';
      } else {
        todoRef.current.style.transform = '';
        todoRef.current.style.color = '';
        todoRef.current.style.animation = '';
      }

      if (notes) {
        notesRef.current.style.transform = 'scale(1.3)';
        notesRef.current.style.color = 'rgba(255, 255, 255, 1)';
        notesRef.current.style.animation = 'bounce 1s infinite';
      } else {
        notesRef.current.style.transform = '';
        notesRef.current.style.color = '';
        notesRef.current.style.animation = '';
      }

      if (settings) {
        settingsRef.current.style.transform = 'rotate(360deg)';
        settingsRef.current.style.color = 'rgba(255, 255, 255, 1)';
        settingsRef.current.style.animation = 'spin 2s linear infinite';
      } else {
        settingsRef.current.style.transform = '';
        settingsRef.current.style.color = '';
        settingsRef.current.style.animation = '';
      }
    }
  }, [todo, notes, settings]);   

  return (
    <div className="footer">
      <ListChecks className="button" ref={todoRef} onClick={handleTodoClick}></ListChecks>
      <Notebook className="buttonMid" ref={notesRef} onClick={handleNotesClick}></Notebook>
      <Cog className="buttonSet" ref={settingsRef} onClick={handleSettingsClick}></Cog>
    </div>
  )
}

export default Footer
import './index.css';
import { Notebook, ListChecks, Cog } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
 
function Footer() {
  function notesButton () {
    const navigate = useNavigate();
    const setPage = () => {
      navigate('/notes');
    };
  }
  const todoRef = useRef(null);
  const notesRef = useRef(null);
  const settingsRef = useRef(null);
  const [active, setActive] = useState(null);
  const handleClick= (type) => {
    setActive(prev => (prev === type ? null : type));
  };

  useEffect(() => {
    const resetStyle = (ref) => {
     if (!ref.current) return;
      ref.current.style.transform = '';
      ref.current.style.color = '';
      ref.current.style.animation = '';
      
    };

    resetStyle(todoRef);
    resetStyle(notesRef);
    resetStyle(settingsRef);
    
    if (active === "todo" && todoRef.current) {
      todoRef.current.style.transform = 'scale(1.3)';
      todoRef.current.style.color = 'wheat';
      todoRef.current.style.animation = 'bounce 1s infinite';
    }
    if (active === "notes" && notesRef.current) {
      notesRef.current.style.transform = 'scale(1.3)';
      notesRef.current.style.color = 'wheat';
      notesRef.current.style.animation = 'bounce 1s infinite';
    }
    if (active === "settings" && settingsRef.current) {
      settingsRef.current.style.transform = 'scale(1.3)';
      settingsRef.current.style.color = 'wheat';
      settingsRef.current.style.animation = 'spin 2s linear infinite';
    }
  }, [active]);   

  return (
    <div className="footer">
      <ListChecks className="button" ref={todoRef} onClick={() => handleClick("todo")}></ListChecks>
      <Notebook className="buttonMid" ref={notesRef} onClick={() => {handleClick("notes"); notesButton();}}></Notebook>
      <Cog className="buttonSet" ref={settingsRef} onClick={() => handleClick("settings")}></Cog>
    </div>
  )
}

export default Footer
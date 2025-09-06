import './index.css';
import { Menu } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import Preferences from './Webmenu.jsx'

function Header() {
  const menuRef = useRef(null);
  const prefRef = useRef(null);
  const [active, setActive] = useState(false);

  const handleMenuClick = () => {
    setActive(prev => !prev);

  };

  useEffect(() => {
    if (menuRef.current, prefRef.current) {
      if (active) {
        menuRef.current.style.transform = 'scale(1.3)';
        menuRef.current.style.color = 'rgba(117, 124, 253, 1)';
        prefRef.current.style.right = '0vw';
      } else {
        menuRef.current.style.transform = '';
        menuRef.current.style.color = '';
        prefRef.current.style.right = '';
      }
    }
  }, [active]);
  
  return (
    <div className="header-container">
      <h1 className="logo-header">Kria Notes</h1>
      <Menu ref={menuRef} className='menu-icon' onClick={handleMenuClick}></Menu>
      <Preferences ref={prefRef}></Preferences>
      <button className="login">Login</button>
      <button className="register">Register</button>
    </div>
  )
}

export default Header
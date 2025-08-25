import './index.css'
import { Menu } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

function Header() {
  const menuRef = useRef(null);
  const [active, setActive] = useState(false);

  const handleMenuClick = () => {
    setActive(prev => !prev);
  };

  useEffect(() => {
    if (menuRef.current) {
      if (active) {
        menuRef.current.style.transform = 'scale(1.3)';
        menuRef.current.style.color = 'rgba(117, 124, 253, 1)';
      } else {
        menuRef.current.style.transform = '';
        menuRef.current.style.color = '';
      }
    }
  }, [active]);
  
  return (
    <div className="header-container">
      <h1 className="logo-header">Kria Notes</h1>
      <Menu ref={menuRef} className='menu-icon' onClick={handleMenuClick}></Menu>
    </div>
  )
}

export default Header
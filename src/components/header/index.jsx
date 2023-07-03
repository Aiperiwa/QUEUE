import React, { useState, useEffect } from 'react';
import './Header.css';
import Logo from '../img/image 14.png'

const Header = () => {
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const dateTime = date.toLocaleString([], { hour: '2-digit', minute: '2-digit', month: 'long', day: 'numeric' });
      
      setCurrentDateTime(dateTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header>
      <img src={Logo} className='logo' alt="" />
      <div className="datetime">{currentDateTime}</div>
    </header>
  );
};

export default Header;

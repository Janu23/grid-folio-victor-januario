
import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<string>('');
  
  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = { 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric' 
      };
      const dateString = now.toLocaleDateString('en-US', options);
      setCurrentDate(dateString);
    };
    
    updateDate();
    // Update once per minute
    const interval = setInterval(updateDate, 60000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="flex justify-end p-6">
      <div className="font-mono text-sm md:text-base">{currentDate}</div>
    </header>
  );
};

export default Header;

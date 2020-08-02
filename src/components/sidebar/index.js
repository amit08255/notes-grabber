import React from 'react';
import './index.css';

function Sidebar({children}) {
  return (
    <div className="app-sidebar-column">
        {children}
    </div>
  );
}

export default Sidebar;

import React from 'react';
import './index.css';

function Sidebar({children, show}) {
  return (
    <div className={`app-sidebar-column ${show ? "" : "hide-sidebar"}`}>
        {children}
    </div>
  );
}

export default Sidebar;

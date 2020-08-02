import React from 'react';
import './index.css';

export const Sidebar = ({children, show}) => {
  return (
    <div className={`app-sidebar-column ${show ? "" : "hide-sidebar"}`}>
        {children}
    </div>
  );
}

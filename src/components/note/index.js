import React from 'react';
import './index.css';

export const Note = ({children, show}) => {
  return (
    <div className={`note-column border-grey ${show ? "" : "hide-column"}`}>
      {children}
    </div>
  );
}

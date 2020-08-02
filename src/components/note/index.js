import React from 'react';
import './index.css';

function App({children, show}) {
  return (
    <div className={`note-column border-grey ${show ? "" : "hide-column"}`}>
      {children}
    </div>
  );
}

export default App;

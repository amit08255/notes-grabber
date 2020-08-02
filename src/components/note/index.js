import React from 'react';
import './index.css';

function App({children}) {
  return (
    <div className="note-column border-grey">
      {children}
    </div>
  );
}

export default App;

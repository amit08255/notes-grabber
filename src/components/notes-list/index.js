import React from 'react';
import './index.css';

function App() {
  return (
    <div className="note-list">
        <div className="note-list-items">
            <div className="note-list-items-w">
                <div className="note-list-main">
                    <div className="note-list-main-w">
                        <div className="note-list-item note-item">
                            <div className="note-list-item-pinner"></div>
                            <div className="note-list-item-text border-grey">
                                <div className="note-list-item-title">
                                    <span>Welcome to Simplenote!</span>
                                </div>
                                <div className="note-list-item-excerpt">To create a new note, click on the new note button.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;

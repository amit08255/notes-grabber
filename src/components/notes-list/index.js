import React from 'react';
import './index.css';

export const NotesList = ({children}) => {
  return (
    <div className="note-list">
        <div className="note-list-items">
            <div className="note-list-items-w">
                <div className="note-list-main">
                    <div className="note-list-main-w">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

import React from 'react';
import './index.css';

export const NotesEditor = ({content, onNotesChange}) => {
  return (
    <div className="note-editor border-grey">
      <div className="note-detail-wrapper">
        <div className="note-detail">
          <textarea 
            className="note-content" 
            onChange={onNotesChange}
            value={content}
          />
        </div>
      </div>
    </div>
  );
}

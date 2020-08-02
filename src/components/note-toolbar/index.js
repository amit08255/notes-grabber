import React from 'react';
import './index.css';

export const NotesToolbar = ({title, onTitleChange, onGoButtonClick}) => {
  return (
    <div className="note-toolbar-wrapper border-grey">
      <div className="note-toolbar__column-right">
        <div className="note-toolbar__button note-toolbar-back">
          <button onClick={onGoButtonClick} className="icon-button" type="button" title="Back">
            <svg className="icon-back" xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 22 22">
              <path d="M19 10H6.414l5.293-5.293-1.414-1.414L2.586 11l7.707 7.707 1.414-1.414L6.414 12H19z"></path>
            </svg>
          </button>
        </div>
        <input 
          className="note-toolbar__title" 
          value={title}
          onChange={onTitleChange}
        />
      </div>
    </div>
  );
}


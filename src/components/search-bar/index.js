import React from 'react';
import './index.css';

export const SearchBar = ({onNewNotesClick, onSearch}) => {
  return (
    <div className="search-bar border-grey">
        <div className="search-field">
            <input 
                type="search" 
                placeholder="Search" 
                spellCheck="false" 
                onChange={onSearch}
            />
        </div>
        <button onClick={onNewNotesClick} className="icon-button" type="button" title="Add New Note">
            <svg className="icon-new-note" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                <path d="M19 10v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7v2H5v12h12v-7h2zm3-7h-3V0h-2v3h-3v2h3v3h2V5h3V3zm-7 5H7v2h8V8zm0 4H7v2h8v-2z"></path>
            </svg>
        </button>
    </div>
  );
}

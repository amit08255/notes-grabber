import React from 'react';
import './index.css';

export const SearchBar = ({onNewNotesClick}) => {
  return (
    <div className="search-bar border-grey">
        <div className="search-field">
            <input 
                type="search" 
                placeholder="Search" 
                spellcheck="false" 
                value=""
            />
            <button hidden="">
                <svg className="icon-cross-small" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                    <path d="M16.707 6.707l-1.414-1.414L11 9.586 6.707 5.293 5.293 6.707 9.586 11l-4.293 4.293 1.414 1.414L11 12.414l4.293 4.293 1.414-1.414L12.414 11z"></path>
                </svg>
            </button>
        </div>
        <button onClick={onNewNotesClick} className="icon-button" type="button" title="Add New Note">
            <svg className="icon-new-note" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                <path d="M19 10v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7v2H5v12h12v-7h2zm3-7h-3V0h-2v3h-3v2h3v3h2V5h3V3zm-7 5H7v2h8V8zm0 4H7v2h8v-2z"></path>
            </svg>
        </button>
    </div>
  );
}

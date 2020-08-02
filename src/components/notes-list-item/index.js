import React from 'react';

export const NotesListItem = ({title, summary, selected, key, onClick}) => {

    return(
        <div key={key} onClick={onClick} className={`note-list-item note-item ${selected ? "note-list-item-selected" : ""}`}>
            <div className="note-list-item-pinner"></div>
            <div className="note-list-item-text border-grey">
                <div className="note-list-item-title">
                    <span>{title}</span>
                </div>
                <div className="note-list-item-excerpt">{summary}</div>
            </div>
        </div>
    );
}
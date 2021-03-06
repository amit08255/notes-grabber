import React from 'react';

export const NotesListItem = ({title, summary, selected, itemKey, onClick}) => {

    return(
        <div key={itemKey} onClick={onClick} className={`note-list-item note-item ${selected ? "note-list-item-selected" : ""}`}>
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
import React from 'react';
import {NotesList} from '../../components/notes-list';
import {NotesListItem} from '../../components/notes-list-item';

export const NotesListContainer = ({notesList, selectedNotes, onNotesSelect}) => {

    if(Array.isArray(notesList) !== true){
        return null;
    }

    return(
        <NotesList>
            {
                notesList.map((notes, index) => (
                    <NotesListItem 
                        key={`notes-list-${index}`}
                        itemKey={`notes-list-${index}`}
                        title={notes.title}
                        summary={notes.summary}
                        onClick={() => onNotesSelect(index)}
                        selected={selectedNotes === index}
                    />
                ))
            }
        </NotesList>
    );
}
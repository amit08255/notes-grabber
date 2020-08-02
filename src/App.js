import React, { useState, useEffect } from 'react';
import {storeJsonData, getJsonData, isValidArray, isValidValue} from './utils/storage';
import Sidebar from './components/sidebar';
import {SearchBar} from './components/search-bar';
import Note from './components/note';
import {NotesToolbar} from './components/note-toolbar';
import {NotesEditor} from './components/note-editor';
import {NotesListContainer} from './containers/notes-list';
import './App.css';

function App() {

  const [notesList, setNotesList] = useState([]);

  const [notesIndex, setNotesIndex] = useState(0);

  const [showSidebar, setShowSidebar] = useState(false);

  const searchNotes = (notes, search) => {

      if(search.length < 1){
          return true;
      }

      const lowTitle = notes.title.toLowerCase();
      const lowQuery = search.toLowerCase();

      return lowTitle.indexOf(lowQuery)>=0;
  }

  const getNotesList = (search = "") => {
      const notesList = getJsonData();

      if(isValidArray(notesList) !== true){
          return;
      }

      const filteredNotes = notesList.filter((n) => searchNotes(n, search));

      setNotesList(filteredNotes);
  }

  useEffect(() => {  
      getNotesList();
  }, []);

  const toggleSidebar = () => {
      setShowSidebar(!showSidebar);
  }

  const updateNotesList = (notesList) => {
      storeJsonData(notesList);
      getNotesList();
  }

  const addNewNotes = () => {
      notesList.unshift({title: "Untitled notes", summary: ""});
      updateNotesList(notesList);
  }

  const onNotesSelect = (index) => {
      setNotesIndex(index);
      setShowSidebar(false);
  }

  const getSelectedNotesTitle = () => {

      if(isValidArray(notesList) !== true){
          return "";
      }
      
      const selectedNotes = notesList[notesIndex];

      if(isValidValue(selectedNotes) !== true){
          return "";
      }

      return selectedNotes.title;
  }

  const getSelectedNotesContent = () => {

    if(isValidArray(notesList) !== true){
        return "";
    }
    
    const selectedNotes = notesList[notesIndex];

    if(isValidValue(selectedNotes) !== true){
        return "";
    }

    return selectedNotes.summary;
}

  const onTitleChange = (e) => {
      const selectedNotes = notesList[notesIndex];
      selectedNotes.title = e.target.value;
      updateNotesList(notesList);
  }

  const onNotesChange = (e) => {
    const selectedNotes = notesList[notesIndex];
    selectedNotes.summary = e.target.value;
    updateNotesList(notesList);
  }

  const onFilterNotes = (e) => {
      getNotesList(e.target.value);
  }

  return (
    <div className="app-wrapper">
      <div className="app-inner">
        <div className="app-layout">
          <Sidebar show={showSidebar}>
            <SearchBar
              onNewNotesClick={addNewNotes}
              onSearch={onFilterNotes}
            />
            <NotesListContainer 
                notesList={notesList}
                onNotesSelect={onNotesSelect}
                selectedNotes={notesIndex}
            />
          </Sidebar>
          <Note show={!showSidebar}>
            <NotesToolbar 
              title={getSelectedNotesTitle()}
              onTitleChange={onTitleChange}
              onGoButtonClick={toggleSidebar}
            />
            <NotesEditor 
              content={getSelectedNotesContent()}
              onNotesChange={onNotesChange}
            />
          </Note>
        </div>
      </div>
    </div>
  );
}

export default App;

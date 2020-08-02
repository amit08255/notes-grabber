import React from 'react';
import Sidebar from './components/sidebar';
import SearchBar from './components/search-bar';
import NotesList from './components/notes-list';
import Note from './components/note';
import NoteToolbar from './components/note-toolbar';
import NoteEditor from './components/note-editor';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <div className="app-inner">
        <div className="app-layout">
          <Sidebar>
            <SearchBar/>
            <NotesList/>
          </Sidebar>
          <Note>
            <NoteToolbar/>
            <NoteEditor/>
          </Note>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import Sidebar from './components/sidebar';
import SearchBar from './components/search-bar';
import NotesList from './components/notes-list';
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
        </div>
      </div>
    </div>
  );
}

export default App;

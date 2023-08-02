import React from 'react';
import './index.css';
import Home from './pages/Home';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>My Schedule and To-Do List App</h1>
      </header>
      <main className="app-main">
        <div className="app-sidebars">
          {/* Komponen samping */}
        </div>
        <div className="app-content">
          <Home /> {/* Gunakan komponen Home */}
          {/* Komponen lain */}
        </div>
      </main>
    </div>
  );
}

export default App;

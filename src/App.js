import React from 'react';

import './App.css';
import Video from './components/Video'
import Sound from './components/Sound'
import Time from './components/Time'
import Player from './components/Player'


function App() {
  return (
    <div className="app">
      <Video />
      <Time />
      <Player />
      <Sound />
    </div>
  );
}

export default App;

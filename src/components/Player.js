import React from 'react';

import Play from '../svg/play.svg'
import Replay from '../svg/replay.svg'
import RainSound from '../sounds/rain.mp3'
import BeachSound from '../sounds/beach.mp3'

export default function Player() {
  return(
    <div className="player-container">
      <audio className="song">
        <source src={RainSound} />
      </audio>
      <img src={Play} className="play"></img>
      <h3 className="time-display">0:00</h3>

      <svg className="track-outline" width="453" height="453" viewBox="0 0 453 453" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="226.5" cy="226.5" r="216.5" stroke="white" stroke-width="20"/>
        </svg>
      <svg className="moving-outline" width="453" height="453" viewBox="0 0 453 453" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="226.5" cy="226.5" r="216.5" stroke="#018EBA" stroke-width="20"/>
        </svg>
      <img src={Replay} className="replay"></img>
    </div>
  )
}
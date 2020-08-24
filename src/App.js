import React, { useState, useEffect, useRef } from 'react';

import './App.css';

import RainVid from './video/rain.mp4';
import BeachVid from './video/beach.mp4';
import RainSound from './sounds/rain.mp3';
import BeachSound from './sounds/beach.mp3';
import Play from './svg/play.svg';
import Pause from './svg/pause.svg';
import Replay from './svg/replay.svg';
import Beach from './svg/beach.svg';
import Rain from './svg/rain.svg';

function App() {
  const [play, setPlay] = useState(false);
  const [startPauseIcon, setStartPauseIcon] = useState(Play);
  const [sound, setSound] = useState(RainSound);
  const [video, setVideo] = useState(RainVid);
  const [counter, setCounter] = React.useState(120);
  const [timeDisplay, setTimeDisplay] = useState();
  const id = useRef(null);
  const clear = () => window.clearInterval(id.current);
  const audioEl = document.querySelector(".song");
  const songEl = document.querySelector(".play-video");

  // useEffect(() => {
  //   const outline = document.querySelector(".moving-outline circle");
  //   const outlineLength = outline.getTotalLength();
  //   const timeSelect = document.querySelectorAll(".time-select button");

  //   console.log(outlineLength)
  // }, []);

  useEffect(() => {
    const seconds = `${Math.floor(counter % 60)}`;
    const minutes = `${Math.floor(counter / 60)}`;
    const doubleZero = seconds === '0' ? '00' : seconds;
    const underTen = counter < 10 ? `0${doubleZero}` : doubleZero;
    setTimeDisplay(`${minutes}:${underTen}`)
    if(counter === 0) {
      clear();
      setPlay(false);
      setStartPauseIcon(Play);
      audioEl.pause();
      songEl.pause();
    }
  },[counter, audioEl, songEl]);

  const playVideo = () => {
    setPlay(!play);
    if(songEl.paused) {
      audioEl.play();
      songEl.play();
      setStartPauseIcon(Pause);
      id.current = window.setInterval(() => {
        setCounter((time) => time - 1)
      }, 1000);
    } else {
      audioEl.pause();
      songEl.pause();
      setStartPauseIcon(Play);
      clear();
    }
  }

  const resetCount = () => {
    console.log();
    // setCounter(counter)
  }

  const beachTheme =  () => {
    setVideo(BeachVid);
    setSound(BeachSound);
    setStartPauseIcon(Play);
    audioEl.pause();
    songEl.pause();
    clear();
  }

  const rainTheme = () => {
    setVideo(RainVid);
    setSound(RainSound);
    setStartPauseIcon(Play);
    audioEl.pause();
    songEl.pause();
    clear();
  }

  return (
    <div className="app">
      <div className="vid-container">
        {video === RainVid &&
          <video loop className="play-video">
            <source src={RainVid}  type="video/mp4" />
          </video>
        }
        {video === BeachVid &&
          <video loop className="play-video">
            <source src={BeachVid}  type="video/mp4" />
          </video>
        }
      </div>

      <div className="time-select">
        <button onClick={() => setCounter(120)}>2 Minutes</button>
        <button onClick={() => setCounter(300)} className="medium-mins">5 Minutes</button>
        <button onClick={() => setCounter(600)} className="long-mins">10 Minutes</button>
      </div>

      <div className="player-container">
        {sound === RainSound &&
          <audio className="song" >
            <source src={RainSound} />
          </audio>
        }
        {sound === BeachSound &&
          <audio className="song" >
            <source src={BeachSound} />
          </audio>
        }

        <img src={startPauseIcon} className="play" onClick={() => playVideo()} alt=""></img>

        <h3 className="time-display">{timeDisplay}</h3>

        <svg className="track-outline" width="453" height="453" viewBox="0 0 453 453" fill="none">
          <circle cx="226.5" cy="226.5" r="216.5" stroke="white" strokeWidth="20"/>
        </svg>
        <svg  className="moving-outline" width="453" height="453" viewBox="0 0 453 453" fill="none">
          <circle cx="226.5" cy="226.5" r="216.5" stroke="#018EBA" strokeWidth="20"/>
        </svg>
        <img src={Replay} onClick={() => resetCount()} className="replay" alt=""></img>
      </div>

      <div className="sound-picker">
        <button onClick={rainTheme}><img src={Rain} alt="rain"/></button>
        <button onClick={beachTheme}><img src={Beach} alt="beach"/></button>
      </div>
    </div>
  );
}

export default App;

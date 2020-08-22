import React from 'react';

import Rain from '../video/rain.mp4'
export default function Video() {
  return(
    <div class="vid-container">
      <video autoPlay loop>
        <source src={Rain}  type="video/mp4" />
      </video>
    </div>
  )
}
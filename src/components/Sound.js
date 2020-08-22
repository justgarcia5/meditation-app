import React from 'react'

import Rain from '../svg/rain.svg'
import Beach from '../svg/beach.svg'

export default function Sound() {
  return(
    <div className="sound-picker">
      <button><img src={Rain} alt="rain"/></button>
      <button><img src={Beach} alt="rain"/></button>
    </div>
  )
}
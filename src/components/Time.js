import React from 'react';

export default function Time() {
  return(
    <div className="time-select">
      <button data-time="10">2 Minutes</button>
      <button data-time="300" className="medium-mins">5 Minutes</button>
      <button data-time="600" className="long-mins">10 Minutes</button>
    </div>
  )
}
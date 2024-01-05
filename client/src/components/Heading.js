import React from 'react';
import './heading.css'

export default function Heading(prop) {
  return (
    <div className='heading'>

        <h1>{prop.text}</h1>
      
    </div>
  )
}

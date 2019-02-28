import React from 'react'
import Box from './Box'

const arr = [1, 2, 3]

const Boxes = () => (
  <div id="boxes" className="boxes">
    {arr.map(int => (
      <Box key={int} id={int} />
    ))}
  </div>
)

export default Boxes

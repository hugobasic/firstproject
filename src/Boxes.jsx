import React from 'react'
import Box from './Box'

const arr = [1, 2, 3]

const Boxes = () => (
  <React.Fragment>
    {arr.map(int => (
      <Box key={int} id={int} />
    ))}
  </React.Fragment>
)

export default Boxes

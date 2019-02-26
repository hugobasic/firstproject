import React from 'react'

const Box = props => (
  <div className="box">
    <img
      src={`http://lorempixel.com/400/200/nature/${props.id}`}
      alt="something"
    />
    <p>
      Lorem ipsum dolor sit amet, melius evertitur quo ea, eam et errem
      contentiones. ipsum dolor sit amet, melius evertitur quo ea, eam et errem
      contentiones.
    </p>
  </div>
)

export default Box

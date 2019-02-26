import React from 'react'

const Office = ({ iconName, className, listItems }) => (
  <React.Fragment>
    <i className={`fas fa-${iconName}`} />
    <div className={className}>
      <ul>
        {listItems.map(str => (
          <li key={str}>{str}</li>
        ))}
      </ul>
    </div>
  </React.Fragment>
)

export default Office

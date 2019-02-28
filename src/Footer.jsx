import React from 'react'
import Office from './Office'

const Footer = () => (
  <footer id="contact">
    <Office
      iconName="map-marker-alt"
      className="office1"
      listItems={['England', 'London', '52 Somestreet']}
    />
    <Office
      iconName="phone"
      className="office2"
      listItems={['Company Name', 'Phone number', 'Email address']}
    />
    <Office
      iconName="clock"
      className="contactinfo"
      listItems={[
        'Weekdays: 09:00 - 17:00',
        'Saturdays: 10:00 - 14:00',
        'Sundays: Closed'
      ]}
    />
  </footer>
)

export default Footer

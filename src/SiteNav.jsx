import React from 'react'

const navArr = ['home', 'about', 'contact', 'store']

const scrollToElement = (e, elementId) => {
  e.preventDefault()
  const element = document.getElementById(elementId)
  element && element.scrollIntoView({ behavior: 'smooth' })
}

const SiteNav = () => (
  <nav id="siteNav">
    <a href="#home" onClick={e => scrollToElement(e, 'home')}>
      <i className="fab fa-asymmetrik logo" />
    </a>
    {navArr.map(location => (
      <a
        href={location}
        key={location}
        onClick={e => scrollToElement(e, location)}
      >
        {location}
      </a>
    ))}
  </nav>
)

export default SiteNav

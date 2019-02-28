import React from 'react'
import SiteNav from './SiteNav'
import Home from './Home'
import ButtonPage from './ButtonPage'
import Boxes from './Boxes'
import Newsletter from './Newsletter'
import Footer from './Footer'

const App = () => (
  <React.Fragment>
    <SiteNav />
    <main className="content">
      <Home />
      <ButtonPage />
      <Boxes />
      <Newsletter />
    </main>
    <Footer />
  </React.Fragment>
)
export default App

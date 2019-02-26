import React from 'react'
import ReactDOM from 'react-dom'
import Home from './Home'
import ButtonPage from './ButtonPage'
import Boxes from './Boxes'
import Footer from './Footer'
import Newsletter from './Newsletter'
import SiteNav from './SiteNav'
import './bind-nav'

ReactDOM.render(<Home />, document.getElementById('home'))
ReactDOM.render(<ButtonPage />, document.getElementById('buttonPage'))
ReactDOM.render(<Boxes />, document.getElementById('boxes'))
ReactDOM.render(<Footer />, document.getElementById('contact'))
ReactDOM.render(<Newsletter />, document.getElementById('formContainer'))
ReactDOM.render(<SiteNav />, document.getElementById('siteNav'))

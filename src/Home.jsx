import React from 'react'
import { format } from 'date-fns'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: Date.now()
    }
  }

  componentDidMount() {
    this.interval = setInterval(this.updateTime, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const { date } = this.state

    return (
      <React.Fragment>
        <h1>{format(date, 'HH:mm:ss')}</h1>
        <p>{format(date, 'Do MMMM')}</p>
      </React.Fragment>
    )
  }

  updateTime = () => {
    this.setState({
      date: Date.now()
    })
  }
}

export default Home

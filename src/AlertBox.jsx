import React from 'react'

class AlertBox extends React.Component {
  componentDidMount() {
    this.button.focus()
  }

  render() {
    const { values } = this.props

    return (
      <div id="alertBox">
        <div className="alertMsg">
          <div className="alertTextbox">
            Name: {values.name}
            <br />
            Email: {values.email}
            <br />
            Phone: {values.phone}
          </div>
          <button
            ref={el => (this.button = el)}
            onClick={() =>
              (window.location =
                'https://upload.wikimedia.org/wikipedia/commons/0/09/Spam_can.png')
            }
          >
            OK
          </button>
        </div>
      </div>
    )
  }
}
export default AlertBox

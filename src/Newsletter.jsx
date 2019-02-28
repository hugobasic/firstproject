import React from 'react'
import Form from './Form'
import AlertBox from './AlertBox'

class Newsletter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showAlert: false,
      values: {}
    }
  }

  render() {
    const { showAlert, values } = this.state

    return (
      <div id="formContainer" className="form">
        <h4>Sign up for spam</h4>
        <Form onSubmit={this.formSubmit} />
        {showAlert && <AlertBox values={values} />}
      </div>
    )
  }

  formSubmit = values => {
    const { showAlert } = this.state

    this.setState({
      showAlert: !showAlert,
      values
    })
  }
}

export default Newsletter

import React from 'react'

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit} id="form">
        <label htmlFor="name">Full Name</label>
        <input
          className="formInput"
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          ref={el => (this.name = el)}
        />
        <label htmlFor="email">Email</label>
        <input
          className="formInput"
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          ref={el => (this.email = el)}
        />
        <label htmlFor="phone">Phone Number</label>
        <input
          className="formInput"
          type="text"
          name="phone"
          id="phone"
          placeholder="Phone Number"
          ref={el => (this.phone = el)}
        />
        <button id="alertMessageButton">Submit</button>
      </form>
    )
  }

  handleSubmit = e => {
    const { onSubmit } = this.props
    e.preventDefault()
    onSubmit({
      name: this.name.value,
      email: this.email.value,
      phone: this.phone.value
    })
  }
}

export default Form

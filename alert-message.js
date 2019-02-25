;(function() {
  const alertMsg = document.querySelector('.alertMsg')

  const form = document.getElementById('form')
  form.addEventListener('submit', showMessage)

  function showMessage(event) {
    event.preventDefault()
    if (alertMsg.getAttribute('id') === 'hidden') {
      const alertBox = document.getElementById('alertBox')
      const alertButton = alertBox.querySelector('button')
      const alertTextbox = alertBox.querySelector('.alertTextbox')

      alertMsg.setAttribute('id', '')
      alertButton.focus()
      alertTextbox.innerHTML = messageContent()
    } else {
      alertMsg.setAttribute('id', 'hidden')
    }
  }

  function messageContent() {
    let fullFormData = Array.from(document.querySelectorAll('.formInput'))
    let inputInfoArr = fullFormData.map(extractString)
    return inputInfoArr.join('<br>')
  }

  function extractString(formObj) {
    return `${formObj.placeholder}: ${formObj.value}`
  }
})()

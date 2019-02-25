;(function() {
  const submitButton = document.getElementById('alertMessageButton')
  const alertMsg = document.querySelector('.alertMsg')
  submitButton.addEventListener('click', showMessage)

  function showMessage() {
    if (alertMsg.getAttribute('id') === 'hidden') {
      alertMsg.setAttribute('id', '')
      document.querySelector('.alertTextbox').innerHTML = messageContent()
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

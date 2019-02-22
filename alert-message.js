;(function() {
  const displayButton = document.getElementById('alertMessageButton')
  displayButton.addEventListener('click', alertMessage)

  function alertMessage() {
    let fullFormData = Array.from(document.querySelectorAll('.formInput'))
    let inputInfoArr = fullFormData.map(extractString)
    let alertString = inputInfoArr.join('\n')
    window.alert(alertString)
  }

  function extractString(formObj) {
    return `${formObj.placeholder}: ${formObj.value}`
  }
})()

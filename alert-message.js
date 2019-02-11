const displayButton = document.getElementById('alertMessageButton')
displayButton.addEventListener('click', displayMessage)

function displayMessage() {
  window.alert(alertMessage())
}

function alertMessage() {
  let fullFormData = Array.from(document.querySelectorAll('.formInput'))
  let inputInfoArr = fullFormData.map(extractString)
  return inputInfoArr.join('\n')
}

function extractString(formObj) {
  return `${formObj.name}: ${formObj.value}`
}

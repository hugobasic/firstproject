;(function() {
  var siteAnchorList = Array.from(document.querySelectorAll('#siteNav a'))

  siteAnchorList.map(function(element) {
    element.addEventListener('click', function(event) {
      event.preventDefault()

      var linkTarget = event.target.attributes.href.value
      var targetElement = document.querySelector(linkTarget)

      if (!targetElement) {
        return null
      }

      var targetRelativeYPosition = targetElement.getBoundingClientRect().top
      window.scrollBy({
        left: 0,
        top: targetRelativeYPosition,
        behavior: 'smooth'
      })
    })
  })
})()

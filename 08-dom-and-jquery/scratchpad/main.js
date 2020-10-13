// run this function when the document is loaded
window.onload = function () {
  // Target items by id via the getElementById() method
  let helloElem = document.getElementById('hello')
  // We can access that element's css styles through the style property
  // and then accessing the css property through its camel-cased equivalent
  helloElem.style.color = 'red'

  let campusesContainer = document.getElementById('gaCampuses')
  // The getElementsByTagName() method returns a live HTMLCollection of elements
  // with the given tag name.
  let gaCampuses = campusesContainer.getElementsByTagName('li')

  // or, we can get elements by their class name
  gaCampuses = campusesContainer.getElementsByClassName('list-item')

  // Not that gaCampuses is an HTMLCollection, and not an array. Because it's not an
  // Array, we cannot use forEach. We can either use a for loop:
  for (var i = 0; i < gaCampuses.length; i++) {
    gaCampuses[i].style.backgroundColor = 'purple'
  }

  // Or, we can convert it to an array. Using ES6 spread syntax:
  gaCampuses = [...gaCampuses]
  gaCampuses.forEach(campus => {
    campus.style.backgroundColor = 'blue'
  })
}

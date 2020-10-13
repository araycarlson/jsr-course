/* Independent Practice

Making a favorites list: jQuery

You'll add the ability to complete tasks in your favorite things list:

- Using jQuery, add a "complete task" link at the end of each to-do item (i.e. each "favorite thing")
- When clicked, the link will cross out the current item (hint: add a class to the list that sets the text-decoration to line-through)
- Each new item added by the user needs to also have the "complete task" link at the end

*/
$(document).ready(function () {
  function addToList ($list, thing) {
    var $thingLi = $('<li>').text(thing)
    $list.append($thingLi)
    addCompleteLink($thingLi)
  }

  function addCompleteLink ($listItems) {
    var $completedLink = $('<span>')
      .html(' complete task')
      .addClass('complete-task')
    $listItems.append($completedLink)

    $('.complete-task').on('click', function (event) {
      // We don't need `event.preventDefault()` here
      // because there is no weird default action
      // when clicking on a `span` element.
      $(this)
        .parent()
        .addClass('completed')
    })
  }

  var $addButton = $('#new-thing-button')
  var $input = $('#new-thing')
  var $list = $('#fav-list')
  var $listItems = $('#fav-list .fav-thing')
  var $myTitle = $('#myTitle')

  $myTitle.on('click', function (event) {
    event.preventDefault()
    $myTitle.css("background-color", "yellow");
  })



  addCompleteLink($listItems)

  $addButton.on('click', function (event) {
    event.preventDefault()
    var newThing = $input.val()
    if (newThing === '') {
      alert('You must type in a value!')
    } else {
      addToList($list, newThing)
      $input.val('')
    }
  })
})

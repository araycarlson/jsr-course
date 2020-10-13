/* Independent Practice

Making a favorites list: jQuery

You'll add the ability to complete tasks in your favorite things list:

- Using jQuery, add a "complete task" link at the end of each to-do item (i.e. each "favorite thing")
- When clicked, the link will cross out the current item (hint: add a class to the list that sets the text-decoration to line-through)
- Each new item added by the user needs to also have the "complete task" link at the end
----  append to list WITH a complete task -> clear text -

when clicked add strikethrough

*/

$(document).ready(function () {
  function addToList ($list, thing) {
    var $thingLi = $('<li>').text(thing)
    $list.append($thingLi)
    completedLink($thingLi)
  }

  function completedLink($listItems){
    var $completedLink = $('<span>')
      .html(' complete task')
      .addClass('complete-task')
    $listItems.append($completedLink)

    $('.complete-task').on('click', function(event){
      $(this).parent().addClass('completed')

    })



  }

  var $thingList = $('#fav-list')
  var $button = $('#new-thing-button')
  var $newThingInput = $('#new-thing')
  var $listItems = $('#fav-list .fav-thing')

  $button.on('click', function (event) {
    event.preventDefault()
    var newThing = $newThingInput.val()
    if (newThing === '') {
      alert('You must type in a value!')
    } else {
      addToList($thingList, newThing)
      $newThingInput.val('')
    }
  })
})

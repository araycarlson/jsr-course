# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Intro to DOM and jQuery (3:00)
 
- The Document Object Model (DOM)
- Working the DOM
- DOM Manipulation: Independent Practice
- jQuery and DOM
- Augmenting JavaScript with jQuery
- Create a Checklist: Independent Practice
- Final Questions & Exit Tickets


### Objectives
*After this lesson, students will be able to:*

- Identify differences between the DOM and HTML.
- Explain the methods and use the DOM in javascript.
- Manipulate the DOM by using jQuery selectors and functions.
- Register and trigger event handlers for jQuery events.

### Preparation
*Before this lesson, students should already be able to:*

- Understand javascript function usage as well as declaring variables.
- Follow sequential logic through various function calls.

---
## The Document Object Model (DOM)

We are now familiar with all the fundamental JavaScript data types, including objects. We can use existing objects as well as create our own to pass around information and functionality. Understanding the fundamentals of objects not only gives us the ability to pass around information, but it is also essential in how we use JavaScript to manipulate our sites and applications.

The Document Object Model (DOM) is a programming interface for HTML [and XML] documents. Before we dive too deep into the DOM, we need to understand first how browsers work. Watch this short video on [browser rendering](https://www.youtube.com/watch?v=n1cKlKM3jYI).

So, the DOM is a (potentially) large object that describes the structure of our content. Since it's an object, we can use normal techniques to get and set data! In the browser, the DOM is represented by the `document` object. If you open your web browser's dev tools, and go to the console, you can type `document` and you'll get something that looks very much like HTML.

JS specifies some built-in methods that make using the DOM easier. Take a minute to review the [summary of the DOM at MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document). Pay particular attention to the following methods:

- `Document.getElementById(String id)`
- `Document.querySelector(String selector)`
- `Document.querySelectorAll(String selector)`


When reading these methods, try to get a sense of what they're trying to accomplish. We aren't going to ask you to memorize documentation. Don't worry about the details, since we're going to observe some examples.

Each of these methods returns an element from the DOM. What can we do with an [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)? Let's write a few suggestions down on the board.

> Notice in the MDN documentation that Document starts with an uppercase 'D', yet in the browser console we type `document`, with a lowercase 'd'. Why do you suppose that is?
---
## Working with the DOM
We can include JavaScript in the DOM in 3 different ways:

1.  Inline JavaScript (least desirable).
```html
  <body onload="window.alert('welcome to my app!');">
```
2. Include script tags in our HTML documents. This technique is used primarily when generating content/properties through a back-end language. Try to avoid this if necessary.
```html
  <html>
    <head>
      <script>
         alert('Welcome to my app!');
      </script>
    </head>
    <body>
    </body>
  </html>
```
3. Including the JavaScript file as a `<script src="path/to/file" type="text/javascript"` tag with a source, somewhere in the HTML document.

```html
<html>
<head>
  <title>ScratchPad</title>
</head>
<body>
  <h1>ScratchPad!</h1>
  <script src="main.js" type="text/javascript"></script>
</body>
</html>
```

**It is important to get used to falling in the habit of only doing DOM related manipulation only once our content has loaded.** This is required, as we can't manipulate something that has not yet been drawn in the browser. In plain JavaScript, we can usually wrap this in a 'window.onload' function.

```js
window.onload = function() {

  // create a couple of elements in an empty HTML page
  let heading = document.createElement("h1");
  var headingText = document.createTextNode("Hello dynamic world!");
  heading.appendChild(headingText);
  document.body.appendChild(heading);
}
```

The above `window.onload` function adds a new element to our page through the following steps:

  1. We first create the new H1 element through the `document.createElement` method.
  2. We create the text through the `createTextNode` method.
  3. The text is added to the newly created H1 element.
  4. The H1 element is added to the body. Both steps 3 and 4 use the `appendChild` method to the respective element. Think of `appendChild` as an array of elements belonging to the element we are adding to.

Below are a few of the core interfaces to target existing elements in the DOM.

```html
<body>
  <p id="hello">Hello world</p>
  <ul id="gaCampuses">
    <li class="list-item">DC</li>
    <li class="list-item">NY</li>
    <li class="list-item">SF</li>
    <li class="list-item">LA</li>
    <li class="list-item">HK</li>
  </ul>
</body>
```

```js
   // run this function when the document is loaded
window.onload = function() {
  // Target items by id via the getElementById() method
  let helloElem = document.getElementById("hello");
  // We can access that element's css styles through the style property
  // and then accessing the css property through its camel-cased equivalent
  helloElem.style.color = "red";

  let campusesContainer = document.getElementById("gaCampuses");
  // The getElementsByTagName() method returns a live HTMLCollection of elements
  // with the given tag name.
  let gaCampuses = campusesContainer.getElementsByTagName("li");

  // or, we can get elements by their class name
  gaCampuses = campusesContainer.getElementsByClassName('list-item')

  // Not that gaCampuses is an HTMLCollection, and not an array. Because it's not an
  // Array, we cannot use forEach. We can either use a for loop:
  for (var i = 0; i < gaCampuses.length; i++) {
      gaCampuses[i].style.backgroundColor = "purple";
  }

  // Or, we can convert it to an array. Using ES6 spread syntax:
  gaCampuses = [...gaCampuses]
  gaCampuses.forEach(campus => {
    campus.style.backgroundColor = "blue"
  })
}
```

### Events

In JavaScript, we can react to a user's input by listening to `Events`. An `Event` has an  [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget), which is usually an `Element` or the `document`/`window`. We can add `EventListeners` to `EventTargets` and then execute some code when the specific event we are listening for occurs. Here's an example:

```html
<form>
  <input id="my-input" type="text"/>
  <input id="my-input-button" type="submit" value="Run button code"></submit>
</form>
```

Here we have a form element that contains two inputs: one is a text input, the other will submit our form.

```js
// Global Application state
MyApp = {};

// Gets text input value and logs it
MyApp.getInput = function() {
  let input = document.getElementById('my-input')
  console.log(input.value)
}

window.onload = function() {
  let button = document.getElementById('my-input-button');
  // Event parameter is the default object event that would have happened on user click
  button.addEventListener('click', function(event) {
    // The preventDefault() method lets us disable the default action
    // allowing us to override with our on functionality.
    event.preventDefault();

    console.log(event)

    MyApp.getInput()
  })
};
```
Now, lets look an example where we add `EventListeners` to multiple button elements.

```html
<body>
  <div id="parent">
    <button class="button">Button1</button>
    <button class="button">Button2</button>
    <button class="button">Button3</button>
  </div>
</body>
```

```js
window.onload = function() {
  // t it to an array
  let buttons = [...document.getElementsByClassName('button')]
  
  // We can loop through each element and add event listeners on each one.
  // We can't add an event listener on a collection of elements
  buttons.forEach(button => {
    button.addEventListener("click", event => {
      console.log(event.target)
    })
  })

  // or, we can use the buttons' parent element. Notice that the 'target'
  // represents the element that was clicked, and the 'currentTarget' represents
  // the element that has the EventListener on it. 
  let parent = document.getElementById('parent')
  parent.addEventListener('click', event => {
    console.log(event.target)
    console.log(event.currentTarget)
  })
};
```
This functionality, where we can add a listener to a parent, but target nested children, is because in JavaScript, `Events` [bubble](https://javascript.info/bubbling-and-capturing).

There are myriad more events that we can listen to. [Lets take a look!](https://developer.mozilla.org/en-US/docs/Web/Events)

---
## DOM Manipulation: Independent Practice

Complete the [main.js](exercises/js_dom_exercise/main.js) file in [js_dom_exercise](exercises/js_dom_exercise) folder:

- When the user clicks the submit button, take the value they've typed into the input box and add it to the list (remember: `appendChild`!)

- Also, when a new item is added to the list, clear the input box. (Hint: the `value` property of the input box, before anyone types in it,
is the empty string.)

- Bonus:  When they click submit without typing anything, alert the user "you must type in a value!"


---

<a name = "introduction"></a>

## jQuery and the DOM: Introduction (30 minutes)
By now, you've learned about the DOM and seen how we can use JavaScript to interact with it - reading values from it, and writing values to it. The DOM's _**API**_ (application programming interface) give us access to a couple of different methods that allow us to select elements from the DOM.

* `document.getElementById` retrieves a single element with a matching ID.
* `document.getElementsByClassName` retrieves an array of elements that match the given class.
* `document.getElementsByTagName` retrieves an array of elements that are of the given type.

However, these options are somewhat limiting. What if we wanted to retrieve the first `<li>` on a particular list with class `specialList`? We might be able to find it by using the `children` property, but that's a little clunky. If we were using CSS, we could just write a selector like this to style that element:

```CSS
  .specialList li:first-child {
    ...
  }
```

Wow - short and powerful! Wouldn't it be nice if we could select elements in the same way?

Enter jQuery. jQuery is an open-source project that was released in 2006; originally, it was going to be called "JSelect", but the domain name "JSelect.com" was taken, so its creator, John Resig, decided to call it jQuery instead.

jQuery allows us to query (i.e. select elements from) the DOM using the exact same selector syntax that we've used in CSS. To select the element described above, we would write

```js
jQuery(".specialList li:first-child")
```

This will return a 'jQuery Object' - think of it as an abstraction for the search results from our query. You can retrieve any of the specific results using array notation (`jQuery("...")[i]`). There are also a number of special methods on the 'jQuery Object' that you can call which will manipulate the DOM for _all elements select by the query, at once_. These methods can do things like:

* change styling
* add event listeners for specific events
* write brand new content (text _and_ HTML) into the page

Writing 'jQuery' every time we want to make a query is a little tedious, though, so the jQuery team kindly created a shorthand reference that you can use to refer to jQuery : `$`. We can rewrite our jQuery code above as follows.

```js
$(".specialList li:first-child")
```

---
<a name = "codealong2"></a>
## Augmenting JavaScript with jQuery

When reading the [jQuery documentation](https://api.jquery.com/), be sure to scroll through the whole document to ensure you're looking at the correct method signature. Most jQuery methods change their behavior depending on the number of arguments they have when called.

For example, have a look at [.val()](https://api.jquery.com/val/). Note in the table of contents that there are two method signatures, `.val()` and `.val(value)`. This is our hint that `.val()` can do two things.

Reading the documentation, we discover that `.val()` is getter on an element, but that `.val(value)` is a setter on an element. Be sure you're using the correct method. Reading examples is very helpful, and the jQuery examples in the docs are fully functional!

Here is a list of many commonly used jQuery API functions:

1. **[find()](http://api.jquery.com/find)**
1. **[hide()](http://api.jquery.com/hide)**
1. **[show()](http://api.jquery.com/show)**
1. **[html()](http://api.jquery.com/html)**
1. **[append()](http://api.jquery.com/append)**
1. **[prepend()](http://api.jquery.com/prepend)**
1. **[on()](http://api.jquery.com/on)**
1. **[off()](http://api.jquery.com/off)**
1. **[css()](http://api.jquery.com/css)**
1. **[attr()](http://api.jquery.com/attr)**
1. **[val()](http://api.jquery.com/val)**
1. **[text()](http://api.jquery.com/text)**
1. **[each()](http://api.jquery.com/each)**

We can use jQuery to find elements, manipulate the returned elements, change styles, and add event listeners.

Targeting DOM elements in jQuery is a little easier to read than the JavaScript counterpart. Let's take a look. First, we need to add jQuery to our scratchpad.

```html
<head>
  <title>ScratchPad</title>
  <script
  src="https://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"></script>
</head>
<body>
  <div id="parent">
    <button class="button">Button1</button>
    <button class="button">Button2</button>
    <button class="button">Button3</button>
  </div>

  <script src="main.js" type="text/javascript"></script>
</body>
</html>
```

Now, we can query!

```js
// in jQuery, we wait for the document to be ready before querying.
$(document).ready(function(){
  // It is good practice to prefix items we have selected via jQuery
  // with a $ in front of the variable name
  let $parent = $("#parent") // use '#' for ids
  let $buttons = $(".button") // use '.' from classes

  console.log($parent)
  console.log($buttons)
})
```

Notice that what is logged to the console is slightly different than before. Thats because `parent` and `buttons` are jQuery Objects. 

Setting CSS properties is just as easy
```js
  // Setting the css property requires us to pass the property we are changing and the value we are changing it to as parameters (strings) in the css() method
  $parent.css('backgroundColor', 'purple')
  $parent.css('padding', '2rem')
```
>NOTE: We often don't update styles through the css property. This should be done by adding and removing classes appropriately through the `addClass()` and `removeClass()` methods.

We create and appends elements using the `append` method. 
```js
  // create a new div element in memory
  let $newDiv = $("<div></div>")
  let newDivHTML = "<h1>This Is The New Div</h1>"

  // set the inner HTML for the div
  $newDiv.html(newDivHTML)

  // append it to our parent
  $parent.append($newDiv)

  // we can add a class to our new div like so:
  $newDiv.addClass('new-div')
```

jQuery also gives us access to many events making dealing with user interaction significantly easier.
```js
  // notice how we don't have to loop through anything. jQuery does that for us.
  $buttons.on('click', function(event) {
    event.preventDefault();
    console.log(event.target)
  });
```
---
## Create a Checklist: Independent Practice

Complete the [main.js](exercises/jquery_exercise/main.js) app in the [jquery_exercise folder](exercises/jquery_exercise).

You'll add the ability to complete tasks in your favorite things list:

- Using jQuery, add a "complete task" link at the end of each to-do item (i.e. each "favorite thing")
- When clicked, the link will cross out the current item (hint: add a class to the list that sets the text-decoration to line-through)
- Each new item added by the user needs to also have the "complete task" link at the end

---

<a name = "conclusion"></a>

## Conclusion (5 min)

Ask students what was learned. Make sure the objectives have been met.

* Understand how HTML parses and creates the object model, the DOM.
* Use selectors and methods to access and update HTML using the DOM.
* Register and trigger event handlers for jQuery events.

#### Further Resources

- [MDN: Document Object Model (DOM)][1]
- [Youtube video: browser rendering flow][2]
- [jQuery documentation][3]
- [jQuery events][4]

[1]: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
[2]: https://www.youtube.com/watch?v=n1cKlKM3jYI
[3]: http://api.jquery.com
[4]: https://learn.jquery.com/events/
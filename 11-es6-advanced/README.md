# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Advanced JavaScript and ES6 (3:00)

| Timing   | Type                                       | Topic                                                                             |
| -------- | ------------------------------------------ | --------------------------------------------------------------------------------- |
| 1 min    | [ES6 recap](#recap)                        | Recapping ES6 concepts                                                            |
| 1:25 min | [Advanced JavaScript Methods](#advancedjs) | Working our way through the more advanced JavaScript methods available for Arrays |
| 1:20 min | [Advanced ES6 Methods](#advancedes6)       | Covering other useful ES6 improvements                                            | ES6! |
| 5 min    | [Conclusion](#conclusion)                  | Final Questions & Exit Tickets                                                    |

## Objectives

Expand our knowledge base with further JavaScript methods and ES6 functionality

_JavaScript_

- [`.find()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [`.filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [`.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [`.reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

_ES6_

- Template Literal and Delimiters
- Array and Object Destructuring
- Promises

---

---

---

<a name = "recap"></a>

## ES6 recap?

Let's get 3 students to describe ES6 in their own words, and then 3 more to describe an aspect that they find would be useful in the future.

---

---

---

<a name = "advancedjs"></a>

## Advanced JavaScript Methods

Now that we have had an introduction to ES6, we need to look at 4 JavaScript methods which will be vital to your future efforts (with links to documentation):

1. [`.find()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
1. [`.filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
1. [`.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
1. [`.reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

```javascript
let numbers = [1, 2, 3, 4, 5, 6, 7, 8]

// 1) .find() - returns first element passing condition, returns just value
let getFirstEvenNumber = numbers.find(x => x % 2 == 0)

console.log('\FIND - first even number')
console.log(getFirstEvenNumber)
// --------------
let getFirstOddNumber = numbers.find(x => x % 2 == 1)

console.log('\FIND - first odd number')
console.log(getFirstOddNumber)

// 2) .filter() - returns all elements passing condition, returns values in array
let isOnlyEvens = numbers.filter(x => x % 2 == 0)

console.log('\nFILTER - These are the even numbers:')
console.log(isOnlyEvens)
// --------------
let isOnlyOdd = numbers.filter(x => x % 2 == 1)

console.log('\nFILTER - These are the odd numbers:')
console.log(isOnlyOdd)


// 3) .map() - applies SOMETHING to every index
let multiplyNumbersByTwo = numbers.map(x => x * 2 )

console.log('\nMAP - every element multiplied by 2:')
console.log(multiplyNumbersByTwo)
// --------------
let multiplyNumbersByFour = numbers.map(x => x * 4)

console.log('\nMAP - every element multiplied by 4')
console.log(multiplyNumbersByFour)

// 4. Reduce - creates empty temporary array, filters inputted array into temp array, then returns array
const studentsData = [
  {
    firstName: "Albert",
    lastName: "Einstein",
    score: 99
  },
  {
    firstName: "Charles",
    lastName: "Dickens",
    score: 84
  },
  {
    firstName: "Zach",
    lastName: "Lowe",
    score: 47
  },
  {
    firstName: "Marilyn",
    lastName: "vos Savant",
    score: 89
  },
]
// array created in second argument of reduce(), isfa = individual students from array
let highestScores = studentsData.reduce((newArray, isfa) => {
	// condition to filter/put something into created array
    if (isfa.score > 80) {
      newArray.push(`${isfa.firstName} ${isfa.lastName} scored ${isfa.score}`)
    }
	// return created array with each iteration; i.e. - adds on each loop is necessary
    return newArray;
},[])

console.log('\nREDUCE - produces an array containing values returned from each conditional/iteration')
```

---

---

---

<a name = "advancedes6"></a>

## Advanced ES6 Methods

With the introduction of ES6 and learning how it expands upon vanilla JavaScript in order to create shorthand functionality, the next step is looking into ES6 features that also bring logical functionality into the mix, and not just `syntactic sugar`

1. Template Literal and Delimiters
1. Array and Object Destructuring
1. Promises

### 1. Template Literal and Delimiters

ES6 introduces an easier way to add interpolations which are evaluated automatically.

* <code>\`${ ... }\`</code> is used for rendering the variables.
* <code>\`</code> Backtick is used as delimiter.

```javascript
let user = 'Kevin';
console.log(`Hi ${user}!`); // Hi Kevin!
```
### 2. Array and Object Destructuring

Destructuring helps in avoiding the need for temp variables when dealing with object and arrays.

```javascript
function foo() {
    return [1, 2, 3];
}
let arr = foo(); // [1,2,3]

let [a, b, c] = foo();
console.log(a, b, c); // 1 2 3

```

```javascript

function getCar() {
  return {
    make: 'Tesla',
    model: 'g95',
    metadata: {
      vin: '123abc',
      miles: '12000'
    }
  };
}

const {make, model} = getCar();
console.log(make, model); // Tesla g95

const {make, metadata: {miles}} = getCar();
console.log(make, miles); // Tesla 12000


```
### 3. Promises

ES6 has native support for promises. A *promise* is an object that is waiting for an asynchronous operation to complete, and when that operation completes, the promise is either fulfilled(resolved) or rejected.

The standard way to create a Promise is by using the `new Promise()` constructor which accepts a handler that is given two functions as parameters. The first handler (typically named `resolve`) is a function to call with the future value when it's ready; and the second handler (typically named `reject`) is a function to call to reject the Promise if it can't resolve the future value.

```javascript
const p = new Promise((resolve, reject) => {
    if (/* condition */) {
        resolve(/* value */);  // fulfilled successfully
    } else {
        reject(/* reason */);  // error, rejected
    }
});
```

Every Promise has a method named `then` which takes a pair of callbacks. The first callback is called if the promise is resolved, while the second is called if the promise is rejected.

```javascript
p.then((val) => console.log("Promise Resolved", val),
       (err) => console.log("Promise Rejected", err));
```

Returning a value from `then` callbacks will pass the value to the next `then` callback.

```javascript
const hello = new Promise((resolve, reject) => { resolve("Hello") });

hello.then((str) => `${str} World`)
     .then((str) => `${str}!`)
     .then((str) => console.log(str)) // Hello World!
```

When returning a promise, the resolved value of the promise will get passed to the next callback to effectively chain them together.
This is a simple technique to avoid "callback hell".

```javascript
const p = new Promise((resolve, reject) => { resolve(1) });

const eventuallyAdd1 = (val) => new Promise((resolve, reject) => { resolve(val + 1) });

p.then(eventuallyAdd1)
 .then(eventuallyAdd1)
 .then((val) => console.log(val)); // 3
```

---

---

---

## Homework

Like last class, for homework you will need to create your own working version utilization each of the below:

1. .find()
1. .filter()
1. .map()
1. .reduce()
1. Template Literal and Delimiters
1. Array and Object Destructuring
1. Promises

Also like last class, we will be doing this until the end of class. When you finish these today/at a later, make an earnest attempt to use `git` to push your changes up to your remote repo. If you are unable, send me or Cary the code through slack. Keep in mind, starting the 3rd unit of the class, we will only be submitting homework via `git`.

<a name = "conclusion"></a>

---

---

---

## Conclusion

These newly introduced JavaScript and ES6 concepts are extremely powerful and useful beyond just being syntactically pretty - they replace a significant amount of logic, not just longform code.

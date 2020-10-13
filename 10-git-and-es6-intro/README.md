# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Git & ES6 intro (3:00)

| Timing   | Type                            | Topic                                                       |
| -------- | ------------------------------- | ----------------------------------------------------------- |
| 5 min    | [Why Git](#why)                 | VCS and Git                                                 |
| 35 min   | [Git code along](#gitcodealong) | Making our own repo and practicing git commends             |
| 20 min   | [Git Practice](#gitpractice)    | Spending time practicing on a great Git interactive website |
| 5 min    | [What is ES6?](#whates6)        | Introduction to ES6                                         |
| 1:25 min | [ES6 features](#es6intro)       | Taking a look at some of the more commonly used ES6 updates |
| 25 min   | [ES6 Practice](#es6practice)    | Spending time practicing the power of ES6!                  |
| 5 min    | [Conclusion](#conclusion)       | Final Questions & Exit Tickets                              |

## Objectives - Git (1:00)

- Learn about git
- Initialize a git repository in order to track changes.
- Create a new file.
- Place new file into the staging area to prepare it for a
  commit.
- Commit new file
- Push upstream to your repo

## Objectives - ES6 (2:00)

- Explain the relation of Javascript and ES6
- Classes
- `var` vs. `let` vs. `const`
- Arrow functions
- Default function parameters
- Spread / Rest Operator

---

---

---

<a name = "why"></a>

## Why Git and Github

What is **“version control”**, and why should you care?

Version Control Systems (VCS) are packages downloaded locally to your computer that records changes to a file, or set of files, over time so that you can recall specific versions later. There are many VCS packages available to developers, but one reigns supreme - **Git**.

As developers our code is our livelihood so it's important that we safely store our work... _frequently_. Not only that, we also want to
track our changes as we make them.

```
If we make a feature that ends up breaking the rest of our app we want to be able to go back to a point when our app was last working.
```

---

<a name = "gitcodealong"></a>

## Practice making our own repo!

Using the following commands, we will walk through making our own repo together, cloning it, making changes, adding them to a commit, committing the added files with a message, and pushing it to our repo.

### NOTE - make this repo outside of your current repo or you will end up in a world of GitPain

1. Create a test repo
   - Go to your [Git Enterprise homepage](https://git.generalassemb.ly/)
   - Click the green **NEW** button
   - Add a repository name of **Test**
   - Select **Public**, this should be unclicked -> **Initialize this repository with a README**, and then click **Create Repository**
1. Clone the test repo to your desktop

   - In the first section titled **Quick setup**, ensure the SSH button is selected (greyed out) and click the copy button directly to the right of the string ending in `.git`. You won't get feedback but it was copied
   - Go to your command line and then go to your Desktop.
     - Type `pwd` to print working directory and ensure you are in your Desktop.
   - Type `git status`. You need to see an error starting with `fatal: not a git repository`
   - Type `mkdir` to make a directory. Call it `test`
   - Type `ls` to ensure you now see a directory in your current location called `test/`
   - Type `cd test/` to change directory into the test
   - Clone your directory using the following command, but replacing with what you copied. In my case it would be `git clone git@git.generalassemb.ly:zloweGA/Test.git`
   - Type `ls` to ensure you now see a directory in your current location called `Test/`. This is your repo
   - Type `cd Test/` to change directory into the Test repository
   - Type `git status` to ensure you are inside the repo. You should no longer see the `fatal (...)` command, but instead see something similar to the below:

   ```
   On branch master

   No commits yet

   nothing to commit (create/copy files and use "git add" to track)
   ```

1. Create a README file
   - Type `echo "# Test" >> README.md`
   - Type `ls` to ensure you now see a file called `README.md`
1. Add the file to be committed

   - Type `git add README.md`
   - Type `git status`
   - Ensure you see a response that contains something similar to the following:

   ```
   On branch master

   No commits yet

   Changes to be committed:
     (use "git rm --cached <file>..." to unstage)
           new file:   README.md
   ```

1. Add the file to be committed along with a message
   - Type `git commit -m"First commit"`
   - Ensure you see a response that contains something similar to the following:
   ```
   [master (root-commit) 9eacad7] first commit
   1 file changed, 1 insertion(+)
   create mode 100644 README.md
   ```
1. Push the change to your remote repository (the repo you cloned!)
   - Type `git push`
   - Ensure you see a response that contains something similar to the following:
   ```
   Enumerating objects: 3, done.
   Counting objects: 100% (3/3), done.
   Writing objects: 100% (3/3), 220 bytes | 220.00 KiB/s, done.
   Total 3 (delta 0), reused 0 (delta 0)
   To git.generalassemb.ly:zloweGA/Test.git
   [new branch]      master -> master
   ```

**Check your repo in chrome. If you see a README, you made a successful git change! Pat yourselves on the back**  
_Now go make another round after making another change_

---

<a name = "gitpractice"></a>

## Further Git Practice

First pull down the new changes I pushed to your remote repo. This will pull the changes down to your local code.

If you find yourself having time,Let's lightly use a online Git practicing tool to hone your skills!

**Open the below website**  
https://learngitbranching.js.org/  
`read => try => succeed`

---

## Additional Git Resources Resources

- [Become a Git Guru](https://www.atlassian.com/git/tutorials)
- [Interactive Git Cheatsheet](http://ndpsoftware.com/git-cheatsheet.html) **<--one of the coolest websites ive ever seen**
- [Github Guides](https://guides.github.com)
- [Git Immersion - Interactive Course](http://gitimmersion.com/lab_05.html)
- [Pro Git](http://git-scm.com/book/en/v2) - An in-depth free PDF book for those
  wanting to understand git deeper
- [GitUp - Interactive Commit Visualizer](http://gitup.co)
- [Practice with Git](https://github.com/grayghostvisuals/practice-git)

---

---

---

<a name = "whates6"></a>

## What is ES6?

Javascript is the language. ES (ECMAScript) is the standard governing Javascript. ES6 is the version of ECMAScript draft in which a lot of features were introduced (classes, arrow functions etc).

Some versions of browsers / node have adopted the ES6 specifications completely / partially and thus made all / some of these new features available to users directly.

Even without the browsers / node adopting this standards you can use them provided you transpile your code to a lower version of ES (generally ES5) using transpilers like Babel.

---

<a name = "es6intro"></a>

## ES6 Features

The following are the more common features of ES6 you will use on a regular basis. These are

### 1. Classes in ES6

ES6 introduces new class syntax. One thing to note here is that ES6 class is not a new object-oriented inheritance model. They just serve as a syntactical sugar over JavaScript's existing prototype-based inheritance.

One way to look at a class in ES6 is just a new syntax to work with prototypes and constructor functions that we'd use in ES5.

```javascript
class Task {
  constructor() {
    console.log("task instantiated!");
  }

  showId() {
    console.log(23);
  }

  loadAll() {
    console.log("Loading all tasks..");
  }
}

console.log(typeof Task); // function
const task = new Task(); // "task instantiated!"
task.showId(); // 23
Task.loadAll(); // "Loading all tasks.."
```

**extends and super in classes**

Consider the following code:

```javascript
class Car {
  constructor() {
    console.log("Creating a new car");
  }
}

class Porsche extends Car {
  constructor() {
    super();
    console.log("Creating Porsche");
  }
}

let c = new Porsche();
// Creating a new car
// Creating Porsche
```

`extends` allow child class to inherit from parent class in ES6. It is important to note that the derived constructor must call `super()`.

Also, you can call parent class's method in child class's methods using `super.parentMethodName()`

[Read more about classes here](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes)

A few things to keep in mind:

- Class declarations are not hoisted. You first need to declare your class and then access it, otherwise ReferenceError will be thrown.
- There is no need to use `function` keyword when defining functions inside a class definition.

### 2. let, const and block scoping

`let` allows you to create declarations which are bound to any block, called block scoping. Instead of using `var`, which provides function scope, it is recommended to use block scoped variables (`let` or `const`) in ES6.

```javascript
var a = 2;
{
  let a = 3;
  console.log(a); // 3
  let a = 5; // TypeError: Identifier 'a' has already been declared
}
console.log(a); // 2
```

Another form of block-scoped declaration is the `const`, which creates constants. In ES6, a `const` represents a constant reference to a value. In other words, `Object`'s and `Array`'s contents may change, only the re-assignment of the variable is prevented. Here's a simple example:

```javascript
{
  const b = 5;
  b = 10; // TypeError: Assignment to constant variable

  const arr = [5, 6];
  arr.push(7);
  console.log(arr); // [5,6,7]
  arr = 10; // TypeError: Assignment to constant variable
  arr[0] = 3; // value is mutable
  console.log(arr); // [3,6,7]
}
```

A few things to keep in mind:

- Hoisting of `let` and `const` vary from the traditional hoisting of variables and functions. Both `let` and `const` are hoisted, but cannot be accessed before their declaration, because of [Temporal Dead Zone](http://jsrocks.org/2015/01/temporal-dead-zone-tdz-demystified)
- `let` and `const` are scoped to the nearest enclosing block.
- When using const with fixed strings or values, CAPITAL_CASING might be appropriate (ex: `const PI = 3.14`)
- `const` has to be defined with its declaration.
- Always use `const` over `let`, unless you plan on re-assigning the variable.

### 3. Arrow Functions

Arrow functions are a short-hand notation for writing functions in ES6. The arrow function definition consists of a parameter list `( ... )`, followed by the `=>` marker and a function body. For single-argument functions, the parentheses may be omitted.

```javascript
// Classical Function Expression
function addition(a, b) {
  return a + b;
}

// Implementation with arrow function
const addition = (a, b) => a + b;

// With single argument, no parentheses required
const add5 = (a) => 5 + a;
```

Note that in the above example, the `addition` arrow function is implemented with "concise body" which does not need an explicit return statement. Note the omitted `{ }` after the `=>`.

Here is an example with the usual "block body." Including the curly brace wrappers.

```javascript
const arr = ["apple", "banana", "orange"];

const breakfast = arr.map((fruit) => {
  return fruit + "s";
});

console.log(breakfast); // ['apples', 'bananas', 'oranges']
```

**Behold! There is more...**

Arrow functions don't just make the code shorter. They are closely related to `this` binding behavior.

Arrow functions behavior with `this` keyword varies from that of normal functions. Each function in JavaScript defines its own `this` context but arrow functions capture the `this` value of the nearest enclosing context. Check out the following code:

```javascript
function Person() {
  // The Person() constructor defines `this` as an instance of itself.
  this.age = 0;

  setInterval(function growUp() {
    // In non-strict mode, the growUp() function defines `this`
    // as the global object, which is different from the `this`
    // defined by the Person() constructor.
    this.age++;
  }, 1000);
}
var p = new Person();
```

In ECMAScript 3/5, this issue was fixed by assigning the value in `this` to a variable that could be closed over.

```javascript
function Person() {
  const self = this;
  self.age = 0;

  setInterval(function growUp() {
    // The callback refers to the `self` variable of which
    // the value is the expected object.
    self.age++;
  }, 1000);
}
```

As mentioned above, arrow functions capture the this value of the nearest enclosing context, so the following code works as expected, even with nested arrow functions.

```javascript
function Person() {
  this.age = 0;

  setInterval(() => {
    setTimeout(() => {
      this.age++; // `this` properly refers to the person object
    }, 1000);
  }, 1000);
}

let p = new Person();
```

[Read more about 'Lexical this' in arrow functions here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#No_binding_of_this)

### 4. Default Function Parameters

ES6 allows you to set default parameters in function definitions. Here is a simple illustration.

```javascript
const getFinalPrice = (price, tax = 0.7) => price + price * tax;
getFinalPrice(500); // 850
```

### 5. Spread / Rest Operator

`...` operator is referred to as spread or rest operator, depending on how and where it is used.

When used with any iterable, it acts as to "spread" it into individual elements:

```javascript
const makeToast = (breadType, topping1, topping2) => {
  return `I had ${breadType} toast with ${topping1} and ${topping2}`;
};
```

```javascript
const ingredients = ["wheat", "butter", "jam"];
makeToast(...ingredients);
// "I had wheat toast with butter and jam"

makeToast(...["sourdough", "avocado", "kale"]);
// "I had sourdough toast with avocado and kale"
```

Spread is also great for shaping a new object from other object(s):

```javascript
const defaults = { avatar: "placeholder.jpg", active: false };
const userData = { username: "foo", avatar: "bar.jpg" };

console.log({ created: "2017-12-31", ...defaults, ...userData });
// {created: "2017-12-31", avatar: "bar.jpg", active: false, username: "foo"}
```

New arrays can also be shaped expressively:

```javascript
const arr1 = [1, 2, 3];
const arr2 = [7, 8, 9];
console.log([...arr1, 4, 5, 6, ...arr2]); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

The other common usage of `...` is gathering all arguments together into an array. This is referred as "rest" operator.

```javascript
function foo(...args) {
  console.log(args);
}
foo(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]
```

<a name = "es6practice"></a>

---

## ES6 Practice

We just dipped out toes into the whirlpool of ECMAScript, so now you will be making your own versions of the above. Open up either the [`es6homework.js`](homework/es6homework.js) file in the homework folder within this lesson, or use a repl/IDE of your choice. After completion, you will be adding it to the above file to submit.

## Homework

For homework you will need to create your own version of each of the below:

1. A class
1. Usage of `var, let, const`
1. A working arrow function
1. A working function with default parameters
1. A working example of using the Spread/Rest operator

We will be doing this until the end of class. When you finish these today/at a later, make an earnest attempt to use `git` to push your changes up to your remote repo. If you are unable, send me or Cary the code through slack. Keep in mind, starting the 3rd unit of the class, we will only be submitting homework via `git`. Please reach out if you have issues!

<a name = "conclusion"></a>

---

---

---

## Conclusion

ES6 is considered one of the most powerful tools in the Javascript `tool belt`, and by many accounts is what finally elevated JavaScript as a respectable language to all of the ~~java/C snobs~~ developers with Object Oriented backgrounds. This is an extremely important skill set - study study study.

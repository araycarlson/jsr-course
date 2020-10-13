# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) InstallFest (2:45)

| Timing | Type                          | Topic                                  |
| ------ | ----------------------------- | -------------------------------------- |
| 10 min | [Opening](#opening)           | Opening & Introductions                |
| 10 min | [Structure](#structure)       | Structure & Benchmarks                 |
| 50 min | [Fundamentals](#fundamentals) | Fundamentals of JS & Web Development   |
| 15 min | [Install](#install1)          | Set Up Slack                           |
| 45 min | [Install](#install2)          | Brew, Git, GitHub, Node & Text Editors |
| 25 min | [Exercise](#exercise)         | Thinking Like a Programmer: Pseudocode |
| 10 min | [Conclusion](#conclusion)     | Final Questions & Exit Tickets         |

### Learning Objectives

- Get to know your classmates, instructors, and staff members.
- Differentiate between the Internet and the World Wide Web.
- Summarize the client-server model and explain how a DNS Lookup works.
- Explain the structure of the course and tools that will be used.
- Discuss the benchmarks for assessments in terms of class participation, homework, and unit projects.
- Install and configure Node.js, npm, Git, and other command line tools.
- Identify common issues that might arise and solutions that will be used during the course.
- Practice programmatic thinking by writing pseudocode.

### Preparation

_Before this lesson, students should be able to:_

- Create a basic website using HTML and CSS

> Note: We won't be covering HTML and CSS in this course. If students need review material, we recommend that they work through [Dash](https://dash.generalassemb.ly/projects). **It is strongly recommended that students have a working knowledge of HTML and CSS before beginning this course.**

---

<a name="opening"></a> 

### Welcome to JavaScript Development! (10 min)

This course covers the fundamental concepts of JavaScript.

#### Introduction

The instructional team should have already introduced themselves (or have been introduced by the course producer) at the beginning of class. At this point, you should give students the opportunity to introduce themselves.

> Note: Go around the room in a circle and ask each student to give a brief introduction. You can invite them to talk about why JavaScript interests them, what they hope to get out of the class, and any previous experience they have with Web development.

---

<a name="structure"></a>

### Structure & Benchmarks (10 min)

This course has 20 classes. It will begin with the fundamentals of JavaScript, including programming concepts such as data types, variables, and loops—the core concepts of programming. We'll then move into OOP and learn how to exchange information and functionality within our programs. From there, we'll learn how JavaScript can be used to manipulate websites and applications.

In addition to in-class participation, students are expected to complete three projects at the end of Units 1, 2, and 4.

## Schedule

| Class     | Title                                                                                                                                                |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Lesson 01 | [Install fest](https://git.generalassemb.ly/jsr-810/course-curriculum/tree/master/01-installfest)                                                    |
| Lesson 02 | [Command Line](https://git.generalassemb.ly/jsr-810/course-curriculum/tree/master/02-command-line-JS)                                                |
| Lesson 03 | [Data Types](https://git.generalassemb.ly/jsr-810/course-curriculum/tree/master/03-data-types)                                                       | March 10th |
| Lesson 04 | [Conditionals and Loops](https://git.generalassemb.ly/jsr-810/course-curriculum/tree/master/04-conditionals-and-loops)                               |
| Lesson 05 | [Functions and Scope](https://git.generalassemb.ly/jsr-810/course-curriculum/tree/master/05-functions-and-scope)                                     |
| Lesson 06 | [**Project 1 Lab:** Slackbot](https://git.generalassemb.ly/jsr-810/course-curriculum/tree/master/06-project-1-slackbot)                              |
| Lesson 07 | [Objects and JSON](https://git.generalassemb.ly/jsr-810/course-curriculum/tree/master/07-objects-and-json)                                           |
| Lesson 08 | [Intro to DOM and jQuery](https://git.generalassemb.ly/jsr-810/course-curriculum/tree/master/08-dom-and-jquery)                                      |
| Lesson 09 | [AJAX & APIs](https://git.generalassemb.ly/jsr-810/course-curriculum/tree/master/09-ajax-and-apis)                                                   |
| Lesson 10 | [Asynchronous JavaScript and Callbacks](https://git.generalassemb.ly/jsr-810/course-curriculum/tree/master/10-asynchronous-javascript-and-callbacks) |
| Lesson 11 | [Prototypal Inheritance](https://git.generalassemb.ly/jsr-810/course-curriculum/tree/master/11-prototypal-inheritance)                                    |
| Lesson 12 | [Closures and This](https://git.generalassemb.ly/jsr-810/course-curriculum/tree/master/12-closures-and-this)                                             |
| Lesson 13 | [**Project 2 Lab:** Feedr](https://git.generalassemb.ly/jsr-810/course-curriculum/tree/master/13-project-2-feedr)                                    |
| Lesson 14 | [Express](https://git.generalassemb.ly/jsr-810/course-curriculum/tree/master/14-express)                                                             |
| Lesson 15 | [CRUD and Databases](https://git.generalassemb.ly/jsr-810/course-curriculum/tree/master/15-databases-and-CRUD)                                       |
| Lesson 16 | [Intro to React.js](https://git.generalassemb.ly/jsr-810/course-curriculum/tree/master/16-intro-react)                                               |
| Lesson 17 | [React.js Cont](https://git.generalassemb.ly/jsr-810/course-curriculum/tree/master/17-react-cont)                                                    |
| Lesson 18 | [Deploying Your App](https://git.generalassemb.ly/jsr-810/course-curriculum/tree/master/18-deploying-your-app)                                       |
| Lesson 19 | [**Project 3 Lab:** Single Page App](https://git.generalassemb.ly/jsr-810/course-curriculum/tree/master/19-project-3-single-page-app)                |
| Lesson 20 | Final Project Presentations                                                                                                                          |

---

<a name="fundamentals"></a>

### Fundamentals of JS & Web Development (50 min)

#### JS & Web Tech (5 min)

Let's start by defining a few terms and situating JavaScript in the broader Web ecosystem:

- _Web Development_: The process of building sites and applications for the Web.
- _Front-End Development_: The development of client / browser code (HTML, CSS, JS), i.e., what the user sees and interacts with.
- _Back-End Development_ : The development of server-side code that handles such functions as routing, data handling, and databases (Ruby, Python, Java, Javascript), i.e., the “stuff behind the scenes” that makes Web applications work.

> Note: A good analogy here is to compare the Web app to a retail clothing store. The _Front-End_ is the store itself; the things you as the buyer interact with. The store has a thought-out layout and structure (ie; HTML), it looks great with lighting and styling (ie; CSS), and you can interact with it by trying on or purchasing clothes (ie; Javascript). All the things you don't see but which are critical to a functioning retail store are the _Back-End_; logistics for shipping products to the store, scheduling rosters for staff, handling finances with a bank, etc.

In this class, you will be learning both functional and object-oriented programming (OOP). Understanding the core differences between these two programming paradigms is essential to understanding the concepts in this class and, ultimately, becoming a more efficient programmer.

#### Object Oriented & Functional Programming (5 min)

- OOP focuses on structuring imperative code. It creates models of various concepts in a given problem area, then applies them. These models ("objects") are given functionality ("methods") that enable them to perform various actions; each object can also hold information. The fundamental unit in OOP is the object, which can itself contain further objects, like a Russian Matryoshka doll. The idea is to make it easier for human programmers to visualize the program by tying the program to concrete things, which helps the programmer group things logically. **The fundamental thing to remember is that in object-oriented programming, _everything_ is an object and every object has methods that allow the programmer to access its functionality.**

- Functional programming treats the problem area as a sequence of equations ("functions")--essentially, a progression of definitions that lead to the answer. The information begins as a number of axioms and culminates in the answer. (Think of it as a logical argument that ends in what you see on the screen.) Functional programming borrows many concepts from formal mathematics, and, as in mathematics (and unlike imperative programming or OOP), it usually does not save data between steps. **The fundamental unit in functional programming is the function, which can perform operations as well as produce further functions.**

Citation: [Quora](https://www.quora.com/What-is-the-core-difference-in-laymans-terms-between-procedural-programming-and-object-oriented-programming)

#### Internet vs. World Wide Web (10 min)

The Internet and the World Wide Web are very different entities; however, the terms are often used interchangeably. We will clarify some of the misconceptions about the two. Try to answer the following questions first:

- What do you think the World Wide Web is? How is it different from the Internet?
- Can you think of an analogy to describe the difference between the two?
- Who controls the Internet?

##### The Internet is a Big Collection of Computers and Cables

”Internet” is short for "interconnection of computer networks." It consists of millions of personal, business, and government computers, all connected like roads and highways. In essence, it's an infrastructure that connects millions of computers around the world together. The Internet as you know it ultimately boils down to a series of requests and responses; you send information out to the Web, and you receive corresponding information back.

No single person owns the Internet, and no single government has authority over its operations. Some technical rules and hardware/software standards enforce how people plug into the Internet, but for the most part, the Internet is a free and open broadcast medium.

##### The Web Is a Big Collection of HTML Pages on the Internet

The World Wide Web, or "Web" for short, is a massive collection of digital documents in the form of HTML pages. The Web is viewed by using free software called Web browsers. Created in 1989, the Web is based on hypertext transfer protocol (HTTP), the language which allows us to "jump" from one public Web page to another via links. There are more than 65 billion public Web pages on the Web today.

The World Wide Web is, in essence, the conduit through which most of us access information over the Internet. It is software that runs on top of the Internet, enabling us to access HTML content.

Citation: [About Tech](http://netforbeginners.about.com/od/i/f/What-Is-The-Internet.htm)

#### Client - Server Model (30 min)

**_Question: How exactly does communication between computers and networks take place?_**

> Note: Ask students to create a diagram of the client-server model on a whiteboard and explain their reasoning. When they are done, provide your own explanation. Then explain how the following terms relate to one another: host, client, HTTP, request, response. Draw/pull up the diagram below as needed.

Communication between a host (such as a computer) and a client (a requesting program, such as a browser) occurs via a request/response pair. The client initiates an HTTP request message, which is serviced through an HTTP response message. Simply put, the client makes a request and the server responds accordingly.

A server may receive requests from many different clients in a very short period of time. Because the computer can perform only a limited number of tasks at any moment, it relies on a scheduling system to prioritize and accommodate incoming requests in turn. To prevent abuse and maximize uptime, the server's software limits how a client can use the server's resources. Even so, a server is not immune to abuse. A denial of service attack exploits a server's obligation to process requests by bombarding it with requests incessantly. This inhibits the server's ability to respond to legitimate requests.

Of course, this is a somewhat abstract explanation of how this all works. Getting your request message to the right place and delivering the intended information is a highly complex process involving many intricacies.

![WebStack](img/Client-server-model.png)

- **Host** - A computer or other device connected to a computer network; the host may offer information resources, services, and applications (via computer code) to users or other computers on the network.
  - Ex: servers and Web services

* **Client** - The requesting program in the client/host relationship; the client initiates an HTTP request message, which is serviced through an HTTP response message in return.
  - Ex: browsers, terminals, mobile devices

- **HTTP (Hyper Text Transfer Protocol)** - Because this is a protocol, it enables communication among various computers and supports an array of network configurations. To make this possible, HTTP assumes very little about a particular system.
  - Read this as: "HTTP makes it easy for many different computers to talk to each other."

_Text From [Tuts +](http://code.tutsplus.com/tutorials/http-the-protocol-every-Web-developer-must-know-part-1--net-31177)_

##### IP Addresses and Domains: Reaching a Specific Server

All computers connected to the Internet have a unique numeric address composed of four bytes of data, separated by periods (see example below). This is how computers “find” one another on the Internet.

```
123.123.123.123
```

Of course, humans and computers communicate in different types of languages, so these numbers have to be translated into words. This is where domain registrars come in. Simply put, a domain registrar creates a link between a unique IP address (numbers) with the chosen domain name (words). When a domain name is entered into a browser, the browser performs a Domain Name System (DNS) Lookup to match the letters with the IP address.

| Domain Name  | IP Address    |
| ------------ | ------------- |
| apple.com    | 17.172.224.47 |
| facebook.com | 31.13.65.1    |
| google.com   | 216.58.192.46 |

Every Internet provider has a cached list of all registered domains and their corresponding IP addresses. So when you type something like “apple.com” into the browser, the browser in essence asks the DNS server, "What is the IP address of the characters ‘apple.com’?" The DNS server responds, "17.172.224.47," and the browser then connects to IP address 17.172.224.47.

The process is similar to using street addresses for finding a house, rather than using Latitude and Longitude coordinates.

---

<a name="install1"></a>

### Set Up Slack (15 minutes)

We'll be using Slack to register attendance and communicate during class. Follow the instructions below to sign up for Slack.

- Visit the following [site](https://slack.com/downloads) to download the application.
- Sign up using your email and join your class Slack channel.
- Upload a profile picture to Slack.

> Note: **Unlike other GA courses, each JavaScript Development class should have its own organization on Slack** because we'll need to generate Slack API tokens for students for the Slackbot exercises and unit project. Since the number of integrations for each Slack organization is limited, we strongly recommend that you set up a new organization and invite students before or during the first class. For the purposes of the course, [a free Slack organization](https://get.slack.help/hc/en-us/articles/201723133-Billing-FAQ#can-i-use-slack-for-free) should be sufficient [click here for instructions on how to set up a new Slack organization](https://ganyceveningcourses.slack.com/getting-started/admins) for your class.

---

<a name="install2"></a>

### GitHub (10 min)

We will be using the GitHub service to share some of our code. We will learn
about the underlying technology of GitHub known as `git` in the next lesson.

- Create an account at https://git.generalassemb.ly/
- In a Terminal on your computer, run the following two commands:

  ```bash
  git config --global user.name "YOUR NAME"
  git config --global user.email "YOUR EMAIL ADDRESS"
  ```

  (source: [GitHub](https://help.github.com/articles/set-up-git/))

- Follow [these
  instructions](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)
  to create a new _SSH Key_ (a special, very secure, key which allows your
  laptop access to your github account without having to remember your github
  password)
- Add your new SSH Key to GitHub following [these
  instructions](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/)
- Verify your key works by running the following:

  ```bash
  ssh git@git.generalassemb.ly
  ```

  You should see output similar to:

  ```
  Hi <you>! You've successfully authenticated, but GitHub does not provide shell access.
  Connection to github.com closed.
  ```

### Brew, Git, Node, and Sublime Text (35 min)

You will need to install certain tools that will be used throughout the course. The installation instructions vary depending on whether you have a Mac, Windows, or Linux machine.

#### Mac OS X

1. **Install brew**

Brew is a package manager that we use to install various command line applications to your computer.

Open your terminal (`Applications > Utilities > Terminal`), paste the following command, and hit enter:

    ```bash
    ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    ```

2. **Install Git**

Git is used to track the state of your code over time. [GitHub](https://github.com) has built its platform on Git technology. We will be using both Git and GitHub to distribute code, submit assignments, and offer feedback. Use the following command to install Git:

    ```bash
    brew install git
    ```

3. **Configure Git**

Copy and paste the following two commands (separately) into your terminal. Replace the name and email address values with your own.

    ```bash
    git config --global user.name "Steve Jobs"
    git config --global user.email "steve@apple.com"
    ```

4. **Install Node**

Refer to the package installer on Node’s [website](https://nodejs.org/en/). Just follow the set-up instructions.

5. **Ensure NPM is updated**

Node has a handy package manager, which we will using frequently. It comes with Node, but NPM is updated more frequently; you will always need to have the most up-to-date version.

    ```bash
    npm install npm -g
    ```

6. **Install Sublime Text 3**

Sublime Text can be found [here](http://www.sublimetext.com/3) and is available for all platforms, but you are free to use any code editor you choose. Popular choices include [Atom](http://atom.io) (Mac and Windows) and [Visual Studio Code](https://code.visualstudio.com/#alt-downloads) (all platforms).

When you’re done, raise your hand and ask a member of the instructional team to verify that the installation was successful.

#### Windows

2. **Install Git**

Git is used to track the state of your code over time. [GitHub](https://github.com) has built its platform on Git technology. We will be using both Git and GitHub in this class to distribute code, submit assignments, and offer feedback.
Git can be downloaded and installed from [this](https://git-scm.com/download/win) URL.

3. **Configure Git**

In order to interact with Git, you'll need to first open the Git Bash utility. A quick way to access this terminal is by right clicking your desktop and choosing "Git Bash".

Copy and paste the following two commands (separately) into your terminal. Replace the name and email address values with your own.

    ```bash
    git config --global user.name "Steve Jobs"
    git config --global user.email "steve@apple.com"
    ```

3. **Install Node**
   Refer to the package installer on Node’s [website](https://nodejs.org/en/). Just follow the set-up instructions.

4. **Install Sublime Text**

Sublime Text can be found [here](http://www.sublimetext.com/3) and is available for all platforms, but you are free to use any code editor that you are comfortable with. Other popular choices are [Atom](http://atom.io) (Mac and Windows) and [Visual Studio Code](https://code.visualstudio.com/#alt-downloads) (all platforms).

When you’re done, raise your hand and ask a member of the instructional team to verify that the installation was successful.

#### Linux (Ubuntu)

1. **Install Git**

Git is a tool used to track the state of your code over time. [GitHub](https://github.com) is a company that has made a business on top of the Git technology. We will be using both Git and GitHub in this class to distribute code, submit assignments and offer feedback.

Git can be installed by running the following command:

    ```bash
    sudo apt-get install build-essential git-core curl
    ```

2. **Configure Git**

Copy and paste the following two commands (separately) into your terminal. Replace the name and email address values with your own.

    ```bash
    git config --global user.name "Steve Jobs"
    git config --global user.email "steve@apple.com"
    ```

3. **Install Node.js**

   ```bash
   curl --silent --location https://deb.nodesource.com/setup_6.x | sudo -E bash -
   sudo apt-get install --yes nodejs
   apt-get install --yes build-essential
   ```

4. **Install Sublime Text 3**

Sublime Text can be found [here](http://www.sublimetext.com/3) and is available for all platforms, but you are free to use any code editor you choose. Popular choices include [Atom](http://atom.io) (Mac and Windows) and [Visual Studio Code](https://code.visualstudio.com/#alt-downloads) (all platforms).

    ```bash
    sudo add-apt-repository ppa:webupd8team/sublime-text-3
    sudo apt-get update
    sudo apt-get install sublime-text-installer
    ```

You’re all set! Test it out with `subl` and ask a member of the instructional team to verify that the installation was successful.

### Helpful Debugging Tips

**Error installing due to permissions**

Permissions issues are common when installing programs on the terminal. In order to install command line utilities, you need to be signed into a user account on your computer with administrator-level rights. If you have trouble with this, please ask a member of the instructional team for help.

**Google is your friend**

Even experienced programmers occasionally need to look up error messages on Google. If you experience an error, it’s likely that someone else has experienced the error, as well. To find the fix, copy and paste the error message into Google, but remove content specific to your computer to ensure the accuracy of your search. You will most likely find a reference to your specific error. StackOverflow is a trustworthy reference.

> **Common Issues and Fixes:**

> We recommend the following remedies to issues that commonly arise during the installation of command line utilities:

> - Mac users may run into the problem of an outdated version of Git installed with Xcode being given precedence in the terminal. If you experience this issue, you’ll need to adjust your shell path by following the instructions under "Trumping Xcode's Older Git" [in this article](http://coolestguidesontheplanet.com/install-update-latest-version-git-mac-osx-10-9-mavericks/).

> - Mac users running OS 10.11 or later may need to [disable the System Integrity Protection](http://osxdaily.com/2015/10/05/disable-rootless-system-integrity-protection-mac-os-x/) on their machine before installing certain command line utilities.

> - Students experiencing an EACCES error should change directory permissions to install Node and npm without the need to use sudo:
>   `$ sudo chown -R $(whoami) /usr/local/lib/node_modules`

> - Students with Homebrew installed on their machines should run `brew update` in order to get the latest version of Homebrew.

> - Students who need to update their installations of npm can run `npm install -g npm`.

> - Students with an existing, outdated installation of Node can update their install by following the directions above (i.e., using the package installer).

---

<a name="exercise"></a>

## Thinking Like a Programmer (25 min)

In order to become a great programmer, you have to think like a computer. Essentially, you have to think in code. The first step, is to write down whatever you want your computer to do in plain English or pseudocode.

Pseudocode is an outline of a program, written in a form that can easily be converted into real programming statements. Pseudocode can be neither compiled nor executed, and there are no real formatting or syntax rules. It is simply the critical first step in producing the final code. The benefit of pseudocode is that it enables the programmer to concentrate on the flow of a program without being distracted by the syntactic details of a particular programming language. In fact, a programmer can write pseudocode before even knowing which programming language will be used for the final implementation.

Citation: [Webopedia](http://www.webopedia.com/TERM/P/pseudocode.html)

### Pseudocode Exercise

Write the pseudocode for a program that controls a light that changes color based on user input. Imagine the light has three different-colored buttons—red, blue, and yellow. When a user touches one of the buttons, the light changes to the corresponding color. If the selected color is touched again, the light turns off. You do not have to write any actual JavaScript for this exercise.

> The purpose of this exercise is to introduce the process of basic programming. Follow the tips below:

- Provide some background on pseudocode and why we use it.
- Explain that proper pseudocode should be written as a series of steps.
- Start the exercise as a class. Encourage participation as you kick off the exercise, then have the class break into pairs to complete it.
- Come together as a group and have the pairs present their pseudocode line by line. Highlight variables, conditionals, and loops.
- Ask groups to identify common patterns and problems.
- Prompt students to consider communication differences between code and people.

Check the [pseudocode.md](solution-code/pseudocode_solution.md) file in the solution code folder for examples.

---

<a name="conclusion"></a>

## Conclusion (10 min)

Make sure the lesson objectives have been met.

- Summarize the client-server model.
- Explain the difference between the Internet and the WebWorld Wide Web.
- How was this installation process different than using a GUI? Why did we do it this way?
- What questions do you have about the course or the specific tools we installed today?

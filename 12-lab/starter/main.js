"use strict";
let picture = 0;
function masterFunction() {
  // do not replace above this line
    console.log("making the call");
    var httpRequest;
    // function makeRequest(url) {
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = responseMethod;
    httpRequest.open("GET", "https://www.reddit.com/r/cats.json");
    httpRequest.send();
    // }
    function responseMethod(){
        if(httpRequest.readyState === XMLHttpRequest.DONE) {
          if(httpRequest.status === 200) {
           // const entry = document.getElementById("entry");
            const image = document.getElementById("image");
            let ourJSON = httpRequest.responseText;
            image.src = JSON.parse(ourJSON).data.children[picture].data.url;
                // entry.innerHTML = ourJSON;
                // console.log(ourJSON);
            }
        }
    }
    picture++;    
     // do not replace below this line
};
const button = document.getElementById("button");
function changeButtonName() {
    button.innerHTML = "Next Image";
}
function doEverything() {
    masterFunction(20);
    changeButtonName()
}
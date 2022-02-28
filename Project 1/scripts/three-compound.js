//click for hint
function hintone(){
    document.getElementById("hintone").innerHTML = 'Hint: you should be familiar with this problem after you’ve learned simple interest.';
}


//after clicking 'submit', show result
// Grab the form element from HTML
var formone = document.querySelector("#form-one");
var formtwo = document.querySelector("#form-two");
var formthree = document.querySelector("#form-three");
var formfour = document.querySelector("#form-four");
var formfive = document.querySelector("#form-five");

// Grab the pre element from HTML
var logone = document.querySelector("#feedback-one");
var logtwo = document.querySelector("#feedback-two");
var logthree = document.querySelector("#feedback-three");
var logfour = document.querySelector("#feedback-four");
var logfive = document.querySelector("#feedback-five");




//question one
formone.addEventListener("submit", function(event) {
    var userinput = document.getElementById("input-a").value;
    var strinput = Number(userinput);
    var output = "";
    

    if (userinput == 1050) {
        document.getElementById("feedback-one").style.backgroundColor = '#BAF9AA'; 
        document.getElementById("feedback-one").style.padding = '10px 15px';
        document.getElementById("feedback-one").style.width = '30%';
        output = output + 'Correct!';
    } else {
        document.getElementById("feedback-one").style.backgroundColor = '#F6BBBB';
        document.getElementById("feedback-one").style.padding = '10px 15px';
        document.getElementById("feedback-one").style.width = '30%';
        output = output + 'Try again!';
    }
    
    
// print out the result
  logone.innerText = output;  
  event.preventDefault();
}, false);




//question two
formtwo.addEventListener("submit", function(event) {
    var userinput = document.getElementById("input-b").value;
    var strinput = Number(userinput);
    var output = "";
    

    if (userinput == 1102.5) {
        document.getElementById("feedback-two").style.backgroundColor = '#BAF9AA'; 
        document.getElementById("feedback-two").style.padding = '10px 15px';
        output = output + 'Correct!';
    } else {
        document.getElementById("feedback-two").style.backgroundColor = '#F6BBBB';
        document.getElementById("feedback-two").style.padding = '10px 15px';
        output = output + 'Try again! You can reflect on the amount of principal they used for calculation.';
    }
    
    
// print out the result
  logtwo.innerText = output;  
  event.preventDefault();
}, false);



//question three
formthree.addEventListener("submit", function(event) {
    var userinput = document.getElementById("input-c").value;
    var strinput = Number(userinput);
    var output = "";
    

    if (userinput == 1156.625) {
        document.getElementById("feedback-three").style.backgroundColor = '#BAF9AA'; 
        document.getElementById("feedback-three").style.padding = '10px 15px';
        output = output + 'Correct, keep learning!';
    } else {
        document.getElementById("feedback-three").style.backgroundColor = '#F6BBBB';
        document.getElementById("feedback-three").style.padding = '10px 15px';
        output = output + 'Try again!';
    }
    
    
// print out the result
  logthree.innerText = output;  
  event.preventDefault();
}, false);




//question four
formfour.addEventListener("submit", function(event) {

  // Retrieve the data from the form
  var data = new FormData(formfour);
  
  // Create a string to store the data
  var output = "";
document.getElementById("feedback-four").style.backgroundColor = '#BAF9AA'; 
        document.getElementById("feedback-four").style.padding = '10px 15px';
  output = output + 'Thank you for your response, actually both A and B are correct!';
   

// print out the result
  logfour.innerText = output;  
  event.preventDefault();
}, false);



// Wait for the user to click Submit
formfive.addEventListener("submit", function(event) {

  // Retrieve the data from the form
  var data = new FormData(formfive);
  
  // Create a string to store the data
  var output = "";
    
  
  // Loop through the data and collect the value of the name tag and the value that the user selected
  // (here entry = name, value)
    for (const entry of data){
        if (entry[1] == 'Good job!') {
        document.getElementById("feedback-five").style.backgroundColor = '#BAF9AA'; 
        document.getElementById("feedback-five").style.padding = '10px 15px';
        output = output + entry[1];
    } else {
        document.getElementById("feedback-five").style.backgroundColor = '#F6BBBB';
        document.getElementById("feedback-five").style.padding = '10px 15px';
        output = output + entry[1];
    }
    }

// print out the result
  logfive.innerText = output;  
  event.preventDefault();
}, false);

//click for hint
function hintone(){
    document.getElementById("hintone").innerHTML = 'hint content put here';
}


//after clicking 'submit', show result
// Grab the form element from HTML
var formone = document.querySelector("#form-one");
var formtwo = document.querySelector("#form-two");

// Grab the pre element from HTML
var logone = document.querySelector("#feedback-one");
var logtwo = document.querySelector("#feedback-two");




// Wait for the user to click Submit
formone.addEventListener("submit", function(event) {

  // Retrieve the data from the form
  var data = new FormData(formone);
  
  // Create a string to store the data
  var output = "";
    
  
  // Loop through the data and collect the value of the name tag and the value that the user selected
  // (here entry = name, value)
    for (const entry of data){
        if (entry[1] == 'feedback-a') {
        document.getElementById("feedback-one").style.backgroundColor = '#BAF9AA'; 
        document.getElementById("feedback-one").style.padding = '10px 15px';
        output = output + 'Correct! ' + entry[1];
    } else {
        document.getElementById("feedback-one").style.backgroundColor = '#F6BBBB';
        document.getElementById("feedback-one").style.padding = '10px 15px';
        output = output + 'Try again! ' + entry[1];
    }
    }
    
    
//  for (const entry of data) {
////      output = output + entry[0] + ": " + entry[1] + "\r";
//      output = output + entry[1] + "\r";
//  };

    

// print out the result
  logone.innerText = output;  
  event.preventDefault();
}, false);



//second one
formtwo.addEventListener("submit", function(event) {
    var userinput = document.getElementById("input-a").value;
    var strinput = Number(userinput);
    var output = "";
    

    if (userinput == 34) {
        document.getElementById("feedback-two").style.backgroundColor = '#BAF9AA'; 
        document.getElementById("feedback-two").style.padding = '10px 15px';
        output = output + 'Correct!';
    } else {
        document.getElementById("feedback-two").style.backgroundColor = '#F6BBBB';
        document.getElementById("feedback-two").style.padding = '10px 15px';
        output = output + 'Try again!';
    }
     
// print out the result
  logtwo.innerText = output;  
  event.preventDefault();
}, false);

//practice1
form-practice1.addEventListener("submit", function(event) {
    var userinput = document.getElementById("input-a").value;
    var strinput = Number(userinput);
    var output = "";
    

    if (userinput == 34) {
        document.getElementById("practice1-feedback").style.backgroundColor = '#BAF9AA'; 
        document.getElementById("practice1-feedback").style.padding = '10px 15px';
        output = output + 'Correct!';
    } else {
        document.getElementById("practice1-feedback").style.backgroundColor = '#F6BBBB';
        document.getElementById("practice1-feedback").style.padding = '10px 15px';
        output = output + 'Try again!';
    }
     
// print out the result
  logtwo.innerText = output;  
  event.preventDefault();
}, false);





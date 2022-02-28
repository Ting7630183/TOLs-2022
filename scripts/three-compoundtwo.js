//click for hint
function hintone(){
    document.getElementById("hintone").innerHTML = 'Hint: you can use the same process as introduced in the previous page.';
}

function hinttwo(){
    document.getElementById("hinttwo").innerHTML = 'Hint: what is the value to each variable in this case?';
}




//after clicking 'submit', show result
// Grab the form element from HTML
var formone = document.querySelector("#form-one");
var formtwo = document.querySelector("#form-two");
var formthree = document.querySelector("#form-three");

// Grab the pre element from HTML
var logone = document.querySelector("#feedback-one");
var logtwo = document.querySelector("#feedback-two");
var logthree = document.querySelector("#feedback-three");




//question one
formone.addEventListener("submit", function(event) {
    var userinput = document.getElementById("input-a").value;
    var strinput = Number(userinput);
    var output = "";
    

    if (userinput == 1050.625) {
        document.getElementById("feedback-one").style.backgroundColor = '#BAF9AA'; 
        document.getElementById("feedback-one").style.padding = '10px 15px';
        output = output + 'Correct!';
    } else {
        document.getElementById("feedback-one").style.backgroundColor = '#F6BBBB';
        document.getElementById("feedback-one").style.padding = '10px 15px';
        output = output + 'Try again!';
    }
    
    
// print out the result
  logone.innerText = output;  
  event.preventDefault();
}, false);




//question two
formtwo.addEventListener("submit", function(event) {

  // Retrieve the data from the form
  var data = new FormData(formtwo);
  
  // Create a string to store the data
  var output = "";
   
     document.getElementById("feedback-two").style.backgroundColor = '#FDFFAE'; 
    document.getElementById("feedback-two").style.padding = '10px 15px';
    output = output + 'Nice guess! Next let’s examine whether you’re correct or not using the following question.';

// print out the result
  logtwo.innerText = output;  
  event.preventDefault();
}, false);



//question three
formthree.addEventListener("submit", function(event) {

  // Retrieve the data from the form
  var data = new FormData(formthree);
  
  // Create a string to store the data
  var output = "";
    
  
  // Loop through the data and collect the value of the name tag and the value that the user selected
  // (here entry = name, value)
    for (const entry of data){
        if (entry[1] == 'Good job!') {
        document.getElementById("feedback-three").style.backgroundColor = '#BAF9AA'; 
        document.getElementById("feedback-three").style.padding = '10px 15px';
        output = output + entry[1] + ' The formula of compound interest is P(1+ [r/n] ) ^ (nt).';
    } else {
        document.getElementById("feedback-three").style.backgroundColor = '#F6BBBB';
        document.getElementById("feedback-three").style.padding = '10px 15px';
        output = output + entry[1];
    }
    }

// print out the result
  logthree.innerText = output;  
  event.preventDefault();
}, false);

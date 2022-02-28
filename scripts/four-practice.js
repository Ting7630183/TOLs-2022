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
    

    if (userinput == 29536.74) {
        document.getElementById("feedback-one").style.backgroundColor = '#BAF9AA'; 
        document.getElementById("feedback-one").style.padding = '10px 15px';
//        document.getElementById("feedback-one").style.width = '30%';
        output = output + 'Correct! Keep Practicing.';
    } else {
        document.getElementById("feedback-one").style.backgroundColor = '#F6BBBB';
        document.getElementById("feedback-one").style.padding = '10px 15px';
//        document.getElementById("feedback-one").style.width = '30%';
        output = output + 'Not quite. Think about what the variables  would be, and try to calculate it once again.';
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
    

    if (userinput == 3073.43) {
        document.getElementById("feedback-two").style.backgroundColor = '#BAF9AA'; 
        document.getElementById("feedback-two").style.padding = '10px 15px';
//        document.getElementById("feedback-two").style.width = '30%';
        output = output + 'Correct! Keep Practicing.';
    } else {
        document.getElementById("feedback-two").style.backgroundColor = '#F6BBBB';
        document.getElementById("feedback-two").style.padding = '10px 15px';
//        document.getElementById("feedback-two").style.width = '30%';
        output = output + 'Not quite. Think about what the variables  would be, and try to calculate it once again.';
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
    

    if (userinput == 3248.57) {
        document.getElementById("feedback-three").style.backgroundColor = '#BAF9AA'; 
        document.getElementById("feedback-three").style.padding = '10px 15px';
//        document.getElementById("feedback-three").style.width = '30%';
        output = output + 'Correct! Keep Practicing.';
    } else {
        document.getElementById("feedback-three").style.backgroundColor = '#F6BBBB';
        document.getElementById("feedback-three").style.padding = '10px 15px';
//        document.getElementById("feedback-three").style.width = '30%';
        output = output + 'Not quite. Think about what the variables  would be, and try to calculate it once again.';
    }
    
    
// print out the result
  logthree.innerText = output;  
  event.preventDefault();
}, false);

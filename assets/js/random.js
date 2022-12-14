var userInput = prompt("Tell us something: ");
alert("You have written " + userInput.length + " characters"); 
var slicedUserInput = userInput.slice(0, 10);
alert(slicedUserInput);
'use strict';

var username = prompt("What is your name?");

console.log(username);

if (username === "Dennis") {
    console.log("Hey Dennis!");
} else {
    console.log("Welcome " + username);
}

document.write(username);

let response = prompt("What is Dennis's favorite color?");

response.toLowerCase();

if (response === "blue") {
    document.write("You are correct!");
} else if (response == "rainbow") {
    document.write("Only if there is gold");
} else {
    document.write("Wrong!!");
}
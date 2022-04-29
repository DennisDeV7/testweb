'use strict';

function greeting () {
    let username = prompt("What is your name?");
    console.log(username);
    if (username === "Dennis") {
        console.log("Hey Dennis!");
    } else {
        console.log("Welcome " + username);
    }
    return username
}

function guesscolor () {  
    let response;     
    while (response !== "blue") {
        response = prompt("What is Dennis's favorite color?").toLowerCase();
        console.log(response);  
        if (response == "blue") {
            return response
        }      
    } 
}

function picGenerator () {
    let number = prompt("How many pictures would you like to see? (1-5)");
    console.log(number);
    for (let i=0; i < number; i++){
        // const img = document.createElement("img");
        // img.src="https://via.placeholder.com/75";
        document.write("<img src='https://via.placeholder.com/75'class='pictures'/>");
    }
}

let userName = greeting();
document.write(userName);

let userguess = guesscolor();
document.write("Correct!", userguess);

// picGenerator()





// if (response === "blue") {
//     document.write("You are correct!");
// } else if (response == "rainbow") {
//     document.write("Only if there is gold");
// } else {
//     document.write("Wrong!! try again");
//     let response = prompt("What is Dennis's favorite color?");
//     if (response === "blue") {
//         document.write("You are correct!")
//     } else {
//         document.write("Try again some other time.")
//     }
// } 


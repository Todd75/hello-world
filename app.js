'use strict';

let userName;
function greetingName(){
    let userName = prompt("What is your name?");
    while (userName == ""){
     userName = prompt("What is your name? Please type a response.");
    }
    console.log(userName);
    confirm("Did you say " + userName + "?");
    document.write("Hi there,  " + userName + " have a wonderful day and thanks for visiting.")
}

greetingName();

function dogOnPage(){
    let numberDogs = prompt("How many dog photos would you like to see?");
    console.log(numberDogs);

    for (let i = 0; i < numberDogs; i++){
       console.log(i);
       document.write('<img style="width:225px;" src="blazeDog.jpg" alt="dog picture" />');
    }
}
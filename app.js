let userName = prompt("What is your name?");
console.log(userName);
confirm("Did you say " + userName + "?");
document.write("Hi there,  " + userName + " have a wonderful day and thanks for visiting.")

let number = 3;

let answer = prompt("How many pictures of animals do think are on this page?");
if (answer == number) {
    alert("You are genius! That is correct.");
   }   else if (answer == 2){
       alert("Try again you are so close!");
   }   else if(answer == 1){
       alert("Did you scroll down the page? Please try again.");
   }   else if(answer > 3){
       alert("Have you been drinking? You are not seeing straight right now please try again later.")
   }
else {
    alert("That is incorrect we are looking for a number.");
}


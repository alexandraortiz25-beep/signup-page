// Welcome message
console.log("Welcome to Sunday Book Club!");

// Meeting day
let meetingDay = "Sunday";

// Function to say hello
function sayHi() {
console.log("Hello, welcome to our club!");
}

// Function to say goodbye
function sayBye() {
console.log("Goodbye! See you next time!");
}

sayHi();
sayBye();
sayBye();

// Next meeting button
const nextButton = document.querySelector("#next-btn");

function showNextMeeting() {
document.querySelector("#next-meeting").textContent =
"Our next meeting is this Sunday at 3 PM!";
}

nextButton.addEventListener("click", showNextMeeting);
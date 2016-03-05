// hint: You will need to look at the jQuery docs
// ready() https://api.jquery.com/ready/
// click() https://api.jquery.com/click/
// html() https://api.jquery.com/html/
// String concatenation used the plus symbol (+)
// You can mix variables with strings (text wrapped in quotes)

// add your functions here

function getComputerPlay() {
  // Create an array called plays below this line. It should
  // have the options for the RPS game.
  var play = plays[Math.floor(Math.random() * plays.length)];
  return play;
}

// add your doc ready statement right
// this is where you'll bind evnet (hint: click)

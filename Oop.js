// We have this code from Adding Methods With Closures lecture: 
// Refactor the code as an MakeGame class that shares its methods across different instances.


function randInt(n) {
    return Math.floor(Math.random() * (n + 1));
}

function makeGame(upperbound){
  
  return { 
	upper:upperbound,
	rand:randInt(upperbound),
	counter:0,
  	guessMyNumber: guessMyNumber,
  	giveUp:giveUp,
  	numOfGuesses:numOfGuesses
  }
}
function guessMyNumber(n){
	this.counter++;
	if (n > this.upper) {
		return "Out of bounds! Please try a number between 0 and " + this.upper + ".";
	} else if (n === this.rand) {
		return "You guessed my number!";
	}
	return "Nope! That wasn't it!";
}
function giveUp(){
	return this.rand;
}
function numOfGuesses(){
	return this.counter;
}
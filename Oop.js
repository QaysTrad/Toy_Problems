// We have this code from Adding Methods With Closures lecture: 
// Refactor the code as an MakeGame class that shares its methods across different instances.




function makeGame(upperbound){

	var game={};
  var rand=randInt(upperbound)
  var counter=0;
  game.upper=upperbound,
  game.guessMyNumber=guessMyNumber,
  game.giveUp=giveUp,
  game.numOfGuesses=numOfGuesses


}



var randInt= function (n) {
    return Math.floor(Math.random() * (n + 1));
}
var guessMyNumber=function(n){
  		this.counter++;
	    if (n > upper) {
	      return "Out of bounds! Please try a number between 0 and " + this.upperbound + ".";
	    } else if (n === rand) {
	      return "You guessed my number!";
	    }
	    return "Nope! That wasn't it!";
  	}
var giveUp=function(){
    	return rand;
  	}
var numOfGuesses=function(){
    	return this.counter;
  	}

// We have this code from Adding Methods With Closures lecture: 
// Refactor the code as an MakeGame class that shares its methods across different instances.


function randInt(n) {
    return Math.floor(Math.random() * (n + 1));
}

function makeGame(upperbound){
  var game={};
  game.upper=upperbound;
  game.rand=randInt(game.upper)
 // game.randInt=randInt;
  game.counter=0;
  game.guessMyNumber=guessMyNumber;
  game.giveUp=giveUp;
  game.numOfGuesses=numOfGuesses;
  return game;
}
  	var guessMyNumber=function(n){
  		
  		this.counter++;
	    if (n > this.upper) {
	      return "Out of bounds! Please try a number between 0 and " + upperbound + ".";
	    } else if (n === this.rand) {
	      return "You guessed my number!";
	    }
	    return "Nope! That wasn't it!";
  	}
  	var giveUp=function(){
  		
    	return this.rand;
  	}
  	var numOfGuesses=function(){
    	return this.counter;
  	}
  

// We have this code from Adding Methods With Closures lecture: 
// Refactor the code as an MakeGame class that shares its methods across different instances.


function randInt(n) {
    return Math.floor(Math.random() * (n + 1));
}

/*function makeGame(upperbound){
  var upper=upperbound;
  var rand=randInt(upper)
  var counter=0;
  return {
  	guessMyNumber:function(n){
  		counter++;
	    if (n > upper) {
	      return "Out of bounds! Please try a number between 0 and " + upperbound + ".";
	    } else if (n === rand) {
	      return "You guessed my number!";
	    }
	    return "Nope! That wasn't it!";
  	},
  	giveUp:function(){
    	return rand;
  	},
  	numOfGuesses:function(){
    	return counter;
  	}
  }
}*/

function makeGame(upperbound){
  var game = {};
  game.upper = upperbound;
  game.rand = randInt(game.upper);
  game.counter = 0;
  game.guessMyNumber = guessMyNumber;
  game.giveUp = giveUp;
  game.numOfGuesses = numOfGuesses;
  return game;
}


function guessMyNumber(n){
  this.counter = this.counter + 1
  if (n > this.upper){
    return "Out of bounds! Please try a number between 0 and " + this.upper + ".";
  }
  else if ( n === this.rand){
    return "You guessed my number!";
  }
  else {
    return "Nope! That wasn't it!";
  }
}

function giveUp(){
  return this.rand;
}

function numOfGuesses(){
  return this.counter ;
}








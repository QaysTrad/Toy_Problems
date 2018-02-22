// We have this code from Adding Methods With Closures lecture: 
// Refactor the code as an MakeGame class that shares its methods across different instances.


function randInt(n) {
    return Math.floor(Math.random() * (n + 1));
}

function makeGame(upperbound){
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
}


function game (upperbound){
  counter = {}
counter.total = 0
counter.upper = upperbound
counter.guessMyNumber = guessMyNumber
counter.giveUp = giveUp
counter.numOfGuesses = numOfGuesses
//counter.randInt = randInt
counter.rand = randInt(upperbound)

  return counter
} 

function randInt(n){
  return Math.floor(Math.random() * (n + 1));
}


// var upperbound = function(upperbound){
//   var that = this
//   Math.floor(Math.random() * (that.upperbound + 1));
// }
var guessMyNumber = function(n){
  this.total++;
  if (n > this.upper) {
    return "Out of bounds! Please try a number between 0 and " + this.upper + ".";
  } else if (n === this.rand) {
    return "You guessed my number!";
  }
    return "Nope! That wasn't it!";
};

var giveUp = function(){
 return  this.rand
}

var numOfGuesses = function(){
return this.total
}










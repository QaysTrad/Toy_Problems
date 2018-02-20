// We have this code from Adding Methods With Closures lecture: 
// Refactor the code as an MakeGame class that shares its methods across different instances.


// function randInt(n) {
//     return Math.floor(Math.random() * (n + 1));
// }

// function makeGame(upperbound){
//   var upper=upperbound;
//   var rand=randInt(upper)
//   var counter=0;
//   return {
//   	guessMyNumber:function(n){
//   		counter++;
// 	    if (n > upper) {
// 	      return "Out of bounds! Please try a number between 0 and " + upperbound + ".";
// 	    } else if (n === rand) {
// 	      return "You guessed my number!";
// 	    }
// 	    return "Nope! That wasn't it!";
//   	},
//   	giveUp:function(){
//     	return rand;
//   	},
//   	numOfGuesses:function(){
//     	return counter;
//   	}
//   }
// }
function makeGame(upperbound){
	var classes = {}
	classes.upper = upperbound;
	classes.rand = randInt;
	classes.counter = 0
	classes.randInt = randInt;
	classes.guessMyNumber = guessMyNumber;
	classes.giveUp = giveUp;
	classes.numOfGuesses = numOfGuesses;
	
	return classes ;
}

var randInt = function(n) {
	return Math.floor(Math.random() * (this.n + 1));
}

var guessMyNumber =function(n){
	var y = this;
y.counter++;
if (y.n > y.upper) {
	return "Out of bounds! Please try a number between 0 and " + y.upperbound + ".";
} else if (y.n === y.rand) {
	return "You guessed my number!";
}
return "Nope! That wasn't it!";
}

var giveUp = function(){
	var x = this;
		return x.rand;
	}

var	numOfGuesses = function(){
		return this.counter;
	}
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


function makeGame1 (n){
  var counter = {}
  counter.upperBound = Math.floor(Math.random() * (n + 1))
  counter.guessMyNumber = guessMyNumber
  counter.giveUp = giveUp
  counter.numOfGuesses = 0
  counter.upper = counter.upperBound
  return counter
}
guessMyNumber = function (n){
  this.numOfGuesses++;

      if (n > this.upperBound) {
        "Out of bounds! Please try a number between 0 and " + this.upperBound + ".";
      } else if (n === this.upper) {
        "You guessed my number!";
      }
      "Nope! That wasn't it!";
    }
giveUp = function (){
  this.upper
}
numOfGuesses = function(){
  this.numOfGuesses
}




















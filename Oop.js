// We have this code from Adding Methods With Closures lecture: 
// Refactor the code as an MakeGame class that shares its methods across different instances.




function randInt(n) {
    

function makeGame(upperbound){

  var newObj = {};

  newObj.upper = upperbound;
  newObj.rand = randInt(upper);
  newObj.counter = 0;
  newObj.guessMyNumber = guessMyNumber
  newObj.giveUp = giveUp;
  newObj.numOfGuesses = numOfGuesses;

    return Math.floor(Math.random() * (n + 1));

  }

  return makeGame;

  
}



var guessMyNumber = function(n){
      this.counter++;
      if (n > upper) {
        return "Out of bounds! Please try a number between 0 and " + upperbound + ".";
      } else if (n === this.rand) {
        return "You guessed my number!";
      }
      return "Nope! That wasn't it!";
    }

var giveUp = function(){
      return this.rand;
    }


var numOfGuesses = function(){
      return this.counter;
    }




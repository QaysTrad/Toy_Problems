// We have this code from Adding Methods With Closures lecture: 
// Refactor the code as an MakeGame class that shares its methods across different instances.


function randInt(n) {
    return Math.floor(Math.random() * (n + 1));
}

function makeGame(upperbound){
  var upper=upperbound; 
  var rand=randInt(upper)
  var counter=0;
  var A={}

  A.guessMyNumber=guessMyNumber;
  A.giveUp=giveUp;
   A.numOfGuesses=numOfGuesses;
}
  
  	var guessMyNumber=function (n){
  		this.counter++;
	    if (n > upper) {
	      return "Out of bounds! Please try a number between 0 and " + this.upperbound + ".";
	    } else if (n === this.rand) {
	      return "You guessed my number!";
	    }
	    return "Nope! That wasn't it!";
  	},

  	var giveUp=function(){
    	return this.rand;
    
  	},

  	var numOfGuesses=function(){
    	return this.counter;
  	}
  }
}
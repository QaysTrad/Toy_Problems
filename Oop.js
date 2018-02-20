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


 function makeGame(upperbound){
	var result={};
	var rand=randInt(upperbound)
	var counter=0
	 result.counter=counter
	 result.upper= upperbound;
	 result.guessMyNumber= guessMyNumber;
	 result.rand=rand;
	 //makeGame.giveUp= giveUp;
	// makeGame.numOfGuesses= numOfGuesses;
	
return result
}


var guessMyNumber= function (n){
	result.counter=0
	counter++;
	var x = this
	if (n > x.upper) {
	      return "Out of bounds! Please try a number between 0 and " + x.upperbound + ".";
	    } else if (n === x.rand) {
	      return "You guessed my number!";
	    }
	    return "Nope! That wasn't it!";
  	}


var giveUp= function(){
	var x = this
    	return x.rand;
  	}


var numOfGuesses=function(){
	var x=this
    	return x.counter;

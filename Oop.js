// We have this code from Adding Methods With Closures lecture: 
// Refactor the code as an MakeGame class that shares its methods across different instances.


function randInt(n) {
    return Math.floor(Math.random() * (n + 1));
}

function makeGame(upperbound){
<<<<<<< HEAD
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
=======
  var upper=upperbound;
  var rand=randInt(upper)
  var counter=0;
  return {
  	guessMyNumber:function(n){
  		counter++;
	    if (n > upper) {
	      return "Out of bounds! Please try a number between 0 and " + upperbound + ".";
	    } else if (n === rand) {
>>>>>>> 1885c6ead4e6d951fa8abc3767a9101c1fd46e72
	      return "You guessed my number!";
	    }
	    return "Nope! That wasn't it!";
  	},
<<<<<<< HEAD

  	var giveUp=function(){
    	return this.rand;
    
  	},

  	var numOfGuesses=function(){
    	return this.counter;
=======
  	giveUp:function(){
    	return rand;
  	},
  	numOfGuesses:function(){
    	return counter;
>>>>>>> 1885c6ead4e6d951fa8abc3767a9101c1fd46e72
  	}
  }
}
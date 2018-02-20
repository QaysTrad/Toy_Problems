// // We have this code from Adding 
// Methods With Closures lecture: 
// // Refactor the code as an MakeGame class 
// that shares its methods across different instances.




var ec= 789
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


function makeGame2(upperbound){
  var makeGame7={}
  var upper=this.upper=upperbound;
  var rand=this.rand=randInt(upper)
  var counter=this.counter=0;
  makeGame7.guessMyNumber=guessMyNumber;
  makeGame7.giveUp=giveUp;
  makeGame7.numOfGuesses=numOfGuesses;
  return makeGame7;
}


	var guessMyNumber =function(n){
  	 this.counter++ ;
  		this.upper
  		console.log(this.upper)
	    console.log(this.counter)
  		

	    if (n > this.counter ) {
	      return "Out of bounds! Please try a number between 0 and " + this.upperbound + ".";
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
  






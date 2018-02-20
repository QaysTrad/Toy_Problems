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

function makeGameOOP(upperbound){
  var gameObj={}

  gameObj.upper=upperbound;
  //the following line did not work !!
  //it should access the object's variables !! 
  //gameObj.rand=randInt(this.upper);
  gameObj.rand=randInt(upperbound);
  gameObj.counter=0;

  gameObj.guessMyNumber=function(n){
      this.counter++;
      if (n > this.upper) {
        //return "Out of bounds! Please try a number between 0 and " + this.upper + ".";
        //I don't know why the following line did work
        return "Out of bounds! Please try a number between 0 and " + upperbound + ".";
      } else if (n === this.rand) {
        return "You guessed my number!";
      }
      return "Nope! That wasn't it!";
    }

    gameObj.giveUp=function(){
      return this.rand;
    }

    gameObj.numOfGuesses=function(){
      return this.counter;
    }

    return gameObj;
}
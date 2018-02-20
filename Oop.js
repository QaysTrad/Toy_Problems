// We have this code from Adding Methods With Closures lecture: 
// Refactor the code as an MakeGame class that shares its methods across different instances.


/* function randInt(n) {
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
*/

///////////////////////////////////////////

function makeGame1(upperbound) {

	var obj={}  
	obj.rand=randInt(upper)
	obj.upper=upperbound
    obj.counter=0
	obj.value=upperbound;
    obj.guessMyNumber=guessMyNumber
    obj.giveUp=giveUp
    obj.numOfGuesses=numOfGuesses

    return obj
}


function randInt(n) {
	var obj1={}
	 obj1.value=n

  return Math.floor(Math.random() * (obj1.value + 1));
}

var numOfGuesses=function(){
	return this.counter
}

var giveUp=function(){
	return this.rand
}

 var guessMyNumber=function(n){
 	     this.counter++;
	    if (n > this.upper) {
	      return "Out of bounds! Please try a number between 0 and " + this.upperbound + ".";
	    } else if (n === this.rand) {
	      return "You guessed my number!";
	    }
	    return "Nope! That wasn't it!";
 }
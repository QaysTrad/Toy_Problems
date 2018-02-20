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







function MakeGame(upperbound){
  var makeGame={}
makeGame.upper=upperbound ; 
makeGame.guessMyNumber=guessMyNumber;
makeGame.randInt=randInt(upperbound);
makeGame.counter=0;
makeGame.giveUp=giveUp;
makeGame.numOfGuesses=numOfGuesses
return makeGame;
}


var guessMyNumber=function(n){
  this.counter=this.counter +1
  if (n>this.ubber){
    return 'Out of bounds! Please try a number between 0 and ' + this.upperbound + ".";
  }
  else if
      (n===this.randInt){
    return 'you guessed my number !'
  }    
    return "Nope! That wasn't it!";
  }

var randInt=function(n) {
    return Math.floor(Math.random() * (n + 1));
}

var giveUp=function(){
  return 'good lock next time'
}


var numOfGuesses=function(){
  return 'you tried '+this.counter+' time'
}

















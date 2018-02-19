// 1-define objects for 5 of your classmater containing the following keys:
	// -full name 
	// -age 
	// -favorite sports 
	// -nationality
	// and then save theme in one array called mates!

// 2-depending on the previous exercises , write a function that returns the older classmate from mates array.

// 3-write a function that takes an object as argument and returns how many keys does that object contain.
	 nbOfObjKeys({}) // ==> 0
	 nbOfObjKeys({name:"housam",age:"3"}) // ==> 2

// if you finished the above, solve the following:
// write a function that takes array of strings and returns an array of the strings that have the same length
	    ['hi','hello','welcome','hy'] // ==> ["hi","hy"]



// Q1


var person [

{fullName: "Mais", age: 31, favoriteSports: "soccer", nationality: "Jordanian"},
{fullName: "Ayman", age: 29, favoriteSports: {soccer, tennis}, nationality: "Jordanian"},
{fullName: "Waad", age: 24, favoriteSports: "basketball", nationality: "Jordanian"},
{fullName: "Rand", age: 31, favoriteSports: "vollyball", nationality: "Jordanian"},
{fullName: "Muna", age: 28, favoriteSports: "swimming", nationality: "Yemeni"}

];


// Q2 return the oldest mate

function returnAge ( obj ) {

	return obj.age;

}

 

function OldAge ( arr ) {

var oldAge = returnAge( arr[0] );

	for (var i=0; i<arr.length; i++) {

		if (returnAge(arr[i]) > oldAge) {

		oldAge = returnAge(arr[i]);

		}

	}

	return oldAge;

}



// Q3 return the number of keys in the object


function nbOfObjKeys (obj) {

	var counter = 0;

	for ( var key in obj ) {

 		counter ++;

		}

	return counter;

}


//Q3 return the arrays that have same length

var flag = 0;

function SameArrLength ( arr ) {

  var Arrlength = [];

  var EqualArrlength = [];

  for ( var i=0 ; i<arr.length; i++ ) {

   	Arrlength.push ( arr[i].length );

  }


  var val;

  for ( var j=0; j<Arrlength.length; j++ ) {

  	val = Arrlength[j];

  for ( var x=0; x<Arrlength.length; x++ ) {

  	if ( val === Arrlength[x] ) {
     
  		EqualArrlength.push ( arr[x] );

  		flag = 1;

 		}

  	}

  	if ( flag === 1 ) {

  		EqualArrlength.push ( arr[j] );

  		console.log ( EqualArrlength );

    	EqualArrlength = [];

		} 

	flag = 0;

  	}


}






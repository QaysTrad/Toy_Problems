// 1-define objects for 5 of your classmater containing the following keys:
	var mate1 = {
		fullName: "Livia Nistor",
		age: 28,
		favoriteSports: "hiking",
		nationality: "Romanian"
	};

	var mate2 = {
	 	fullName: "Alik Alaqra",
		age: 24,
		favoriteSports: "footbal",
		nationality: "Jordanian"
	};
	
	var mate3 = {
		fullName: "Hanan Nouman",
		age: 24,
		favoriteSports: "yoga",
		nationality: "Jordanian"
	};
	
	var mate4 = {
		fullName: "Shatha Sukkar",
		age: 28,
		favoriteSports: "volleyball",
		nationality: "Syrian"
	};
	var mate5 = {
		fullName: "Ayman Ghaith",
		age: 29,
		favoriteSports: "carting",
		nationality: "Jordanian"
	};

var mates = [mate1, mate2, mate3, mate4, mate5]
	// -full name 
	// -age 
	// -favorite sports 
	// -nationality
	// and then save theme in one array called mates!

// 2-depending on the previous exercises , write a function that returns the older classmate from mates array.
function olderMate(mates){
  var x=mates[age];
  var arr=[];
  

  for(var key in mates){
    if(key[i]>mates[age]){
      arr.push(mates[i].fullName);
    }
    return arr; 
  }
}
}

// 3-write a function that takes an object as argument and returns how many keys does that object contain.
	 nbOfObjKeys({}) // ==> 0
	 nbOfObjKeys({name:"housam",age:"3"}) // ==> 2



// if you finished the above, solve the following:
// write a function that takes array of strings and returns an array of the strings that have the same length
	    ['hi','hello','welcome','hy'] // ==> ["hi","hy"]


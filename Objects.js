// 1-define objects for 5 of your classmater containing the following keys:
	// -full name 
	// -age 
	// -favorite sports 
	// -nationality
	// and then save theme in one array called mates!



var obj1={
	fullName:"Ahmad yaqoba ",
	age :27,
	favoriteSports:"football",
	nationality:"Jordanian" 
};
var obj2={
	fullName :"Alik Alaqraa",
	age :24,
	favoriteSports:"swimming",
	nationality:"Jordanian" 
};
var obj3={
	fullName :"Livia" ,
	age :28,
	favoriteSports:"basketball",
	nationality:"Roman"
};
var obj4={
	fullName :"Amira" ,
	age :23,
	favoriteSports:"dancing",
	nationality:"syrian"
	}; 
var obj5={
	fullName :"abdulatif" ,
	age :30,
	favoriteSports:"runing",
	nationality:"syrian"

}

var hello =[obj1,obj2,obj3,obj4,obj5];

// 2-depending on the previous exercises , write a function that returns the older classmate from mates array.
function older(array){
	var older=array[0].age;
	for(var i=1;i<array.length;i++){
		if (array[i].age>older){
			older=array[i].age
		}
	}
	return older;
}





// 3-write a function that takes an object as argument and returns how many keys does that object contain.
	// nbOfObjKeys({}) // ==> 0
	 //nbOfObjKeys({name:"housam",age:"3"}) // ==> 2

function nbOfObjectKeys(obj){
	var noOfKeys=0;
	for(var key in obj){
		noOfKeys++;

	}
	return noOfKeys;
}


// if you finished the above, solve the following:
// write a function that takes array of strings and returns an array of the strings that have the same length
	     // ==> ["hi","hello","welcome","hy"]
function sameLength(array){
	var sameLengthArray=[];
	

for(var i =1;i<array.length;i++){
		
		if (array[0].length===array[i].length){
			sameLengthArray.push(array[i])
			array.splice(i,1)
			i--
	}
	sameLengthArray.push(array[0])				
	array.splice(0,1)
	i=1;

}
return sameLengthArray;
}
	
	function sameLength(array){
	var sameLengthArray=[];
	

for(var i =1;i<array.length;i++){
	if (array[0].length === array[i].length){
	sameLengthArray.push(array[i])
	array.splice(i,1) i--
	}
	sameLengthArray.push(array[0])
	array.splice(0,1)}
	return sameLengthArray
}















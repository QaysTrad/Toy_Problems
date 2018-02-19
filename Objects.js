// 1-define objects for 5 of your classmater containing the following keys:
	// -full name 
	// -age 
	// -favorite sports 
	// -nationality
	// and then save theme in one array called mates!
var student1={
	name:"fatima",
	age:22,
	favourit_sport:"swimming",
	nationality:"syrian"

}

var student2={
	name:"fatima",
	age:29,
	favourit_sport:"swimming",
	nationality:"syrian"

}
var student3={
	name:"fatima",
	age:25,
	favourit_sport:"swimming",
	nationality:"syrian"

}
var student4={
	name:"fatima",
	age:24,
	favourit_sport:"swimming",
	nationality:"syrian"

}
var student5={
	name:"fatima",
	age:23,
	favourit_sport:"swimming",
	nationality:"syrian"

}
var mates = [student1,student2,student3,student4,student5]
// 2-depending on the previous exercises , write a function that returns the older classmate from mates array.
function older(mates){

var maxAge = mates[0].age
	for(var i=1; i<mates.length; i++ ){
		if(mates[i].age > maxAge.age){
			maxAge.age = mates.age
		}
		return maxAge;

	}}



// 3-write a function that takes an object as argument and returns how many keys does that object contain.
	 nbOfObjKeys({}) // ==> 0
	 nbOfObjKeys({name:"housam",age:"3"}) // ==> 2

function nbOfObjKeys(obj){
	var array = []
	for(var key in obj){
	array.push(key)
	}
	return array.length 	
}

// if you finished the above, solve the following:
// write a function that takes array of strings and returns an array of the strings that have the same length
	    ['hi','hello','welcome','hy'] // ==> ["hi","hy"]

function array(x){
var arr=[]
for(var i=0;i<x.length;i++){

	if(x[i].length===x[i + 1].length){

  arr.push(x[i],x[i + 1])

	}
}

return arr
}









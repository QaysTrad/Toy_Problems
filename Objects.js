// 1-define objects for 5 of your classmater containing the following keys:
	// -full name 
	// -age 
	// -favorite sports 
	// -nationality
	// and then save theme in one array called mates!

mates[{fullname:"Mohammad",age:24,favoritesport:"basketball",nationality:"syrian"},
{fullname:"Abdulatuf",age:29,favoritesport:"basketball",nationality:"syrian"},
{fullname:"Ahmed",age:22,favoritesport:"basketball",nationality:"syrian"},
{fullname:"Mohammad",age:24,favoritesport:"basketball",nationality:"jordanian"},
{fullname:"Husen",age:30,favoritesport:"basketball",nationality:"jordanian"}
	]
// 2-depending on the previous exercises , write a function that returns the older classmate from mates array.
function old(arr){
	var x = 0;
	var result;
	for(var i=0;i<array.length;i++){
	if (array[i].age>x) {
		x=array[i].age;
		result=array[i]
	} }return result;
}

// 3-write a function that takes an object as argument and returns how many keys does that object contain.
	 nbOfObjKeys({}) // ==> 0
	 nbOfObjKeys({name:"housam",age:"3"}) // ==> 2

	 function nbOfObjKeys(obj){

	 }

// if you finished the above, solve the following:
// write a function that takes array of strings and returns an array of the strings that have the same length
	    ['hi','hello','welcome','hy'] // ==> ["hi","hy"]


// 1-define objects for 5 of your classmater containing the following keys:
	// -full name 
	// -age 
	// -favorite sports 
	// -nationality
	// and then save theme in one array called mates!
var obj = {class1:{
	fullName : "Qays Trad", age : 23 , favoriteSport : "football" , nationality : "jordanian" },
	class2 : {
	fullName : "slasabel jaafreh", age : 23 , favoriteSport : "nothing" , nationality : "jordanian" },
	class3 :{
	fullName : "dareen hanash", age : 29 , favoriteSport : "Biking" , nationality : "jordanian" },
	class4 :{
	fullName : "alik akraa", age : 22 , favoriteSport : "basketball" , nationality : "okranian" },
	calss5:{
	fullName : "nader naser", age : 28 , favoriteSport : "tennis" , nationality : "jordanian" }
}
var mates = []
for(var key in obj){
mates.push(obj[key]);
}
// 2-depending on the previous exercises , write a function that returns the older classmate from mates array.
function older(arr){
	var old = arr[0].age ;
	for (var i = 0; i < arr.length; i++) {

	if (old < arr[i].age) {
old = arr[i].age
		}
	}
	return old ;
}
// 3-write a function that takes an object as argument and returns how many keys does that object contain.

function nbOfObjKeys(obj){
	count = 0 ; 
for(var key in obj){
count++ ;
}
return count ; 

}
	 nbOfObjKeys({}) // ==> 0
	 nbOfObjKeys({name:"housam",age:"3"}) // ==> 2

// if you finished the above, solve the following:
// write a function that takes array of strings and returns an array of the strings that have the same length
function sameLength(arr){
	var arr2 = [] ;
	var arr3 = [] ; 
	var count = 0 ;
	 var count2 = 0

	for(var i = 0 ; i < arr.length ; i++){
		if (arr[i].length === arr[i++].length) {
		arr3[count] = arr[i] 
		count++
		}
	}
	return "Array has the same length ," + arr3 ;
}
	    ['hi','hello','welcome','hy'] // ==> ["hi","hy"]


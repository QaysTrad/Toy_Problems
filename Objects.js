// 1-define objects for 5 of your classmater containing the following keys:
	// -full name 
	// -age 
	// -favorite sports 
	// -nationality
	// and then save theme in one array called mates!
var objects={classmate:{
	firstName: "mohammad",
	lastName:"jaw",
	age :22,
	favoriteSports :"football",
	nationality :"jordanian"},
	classmate:{firstName: "omar",
	lastName:"awwad",
	age :23,
	favoriteSports :"tenes",
	nationality :"jordanian"},
classmate:{firstName: "anas",
	lastName:"howa",
	age :21,
	favoriteSports :"Games",
	nationality :"jordanian"},
classmate:{firstName: "ahmad",
	lastName:"ja",
	age :26,
	favoriteSports :"football",
	nationality :"jordanian"},
classmate:{firstName: "khaled",
	lastName:"awwad",
	age :18,
	favoriteSports :"Online Games",
	nationality :"jordanian"}

};  

var mates=[];
for(var key in objects){
mates[objects[key]]=objects[key];
}
// 2-depending on the previous exercises , write a function that returns the older classmate from mates array.
function older(mates){

}
// 3-write a function that takes an object as argument and returns how many keys does that object contain.
	 nbOfObjKeys({}) // ==> 0
	 nbOfObjKeys({name:"housam",age:"3"}) // ==> 2
function nbOfObjKeys(obj){
var ar =[];
	for(var ke in obj){
ar[obj[ke]]= obj[ke];}
return ar.length;

}
// if you finished the above, solve the following:
// write a function that takes array of strings and returns an array of the strings that have the same length
	    ['hi','hello','welcome','hy'] // ==> ["hi","hy"]


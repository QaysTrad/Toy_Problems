// 1-define objects for 5 of your classmater containing the following keys:
	// -full name 
	// -age 
	// -favorite sports 
	// -nationality
	// and then save theme in one array called mates!

	var mates=
	[
     {
     	fullName:  "mohammad jozaa"      ,  
     	age:      23          ,
     	favoriteSports:    "Football"          ,
     	nationality:     "jordainan"
     },
       {
       fullName:      "bayan saad"  ,  
     	age:           20   ,
     	favoriteSports:  "Basketball"           ,
     	nationality:    "syrian"
     },
     {
        fullName:"monther amer",  
     	age:29,
     	favoriteSports:"Football",
     	nationality:"jordainan"
     },
     {
        fullName:       "yusur alani",  
     	age:              27,
     	favoriteSports:     "Basketball",
     	nationality:    "jordainan"
     },
     {
        fullName:      "abdulhameed abdullah",  
     	age:               29,
     	favoriteSports:    "Football",
     	nationality:      "jordainan"
     }
	]

// 2-depending on the previous exercises , write a function 
// that returns the older classmate from mates array.

function older(ma)
{
var olderOne= {
       fullName:      "bayan saad"  ,  
        age:           20   ,
        favoriteSports:  "Basketball"           ,
        nationality:    "syrian"
     }
for (var i = 0 ; i < mates.lenght; i++) {
    if (mates[i].age>olderOne.age) {
    olderOne=mates[i]
    }
}
return olderOne
}

// 3-write a function that takes an object 
// as argument and returns how many keys 
// does that object contain.
	 //nbOfObjKeys({}) // ==> 0
	// nbOfObjKeys({name:"housam",age:"3"}) // ==> 2
/*
nbOfObjKeys(obj){

var x=0
for (var i = Things.length - 1; i >= 0; i--) {
    Things[i]
}



}

*/

// if you finished the above, solve the following:
// write a function that takes array of strings and returns an array of the strings that have the same length
	  //  ['hi','hello','welcome','hy'] // ==> ["hi","hy"]


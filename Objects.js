// 1-define objects for 5 of your classmater containing the following keys:
	// -full name 
	// -age 
	// -favorite sports 
	// -nationality
	// and then save theme in one array called mates!
//var classMater={
var belal ={
	fullName:["Belal","Mazen","Faouri"],
	age:25,
	faveriteSport:["Walking","Frisbee"],
	nationality:"Jordanian"
}
var mansour={
	fullName:["Mansour","Ahmad","Almoukdad"],
	age:29,
	faveriteSport:["reading","walking"],
	nationality:"Syrian"
}
var ayman={
	fullName:["ayman","Ghanem"],
	age:29,
	faveriteSport:["reading","walking"],
	nationality:"Jordanian"
}
var amera={
	fullName:["Amera","Hassoun"],
	age:23,
	faveriteSport:["reading","walking"],
	nationality:"Syrian"
}
var ather={
	fullName:["Mansour","Mahmoud"],
	age:34,
	faveriteSport:"Flying Disk"
	nationality:"Iraqi"
}

var mates=[belal,mansour,ayman,amera,ather];




//}
	/*
	Name:["Ahmad","Ather","Ayman","Abdullateef","Raed"],
	age:[23,29,30,29,27],
	faveriteSport:["fotball","flying disk","chess","tinis","playstation"],
	nationality:["Syrian","Iraqi","Jordainian","Syrian","Jordainian"]
	*/
//}
// 2-depending on the previous exercises , write a function that returns the older classmate from mates array.
function olderClasMate(array){
	var age1=array[0]["age"];
	var older=array[0];
	for (var i = 0; i < array.length; i++) {
		if(array[i]["age"]>age1){
			age1=array[i]['age']
			older=array[i];
		}
	}
return older;
}



// 3-write a function that takes an object as argument and returns how many keys does that object contain.
	// nbOfObjKeys({}) // ==> 0
	// nbOfObjKeys({name:"housam",age:"3"}) // ==> 2

	function keyNum(obj){
		var keys=0;

		for(var key in obj){
			keys=keys+1
		}

		return keys
	}





// if you finished the above, solve the following:
// write a function that takes array of strings and returns an array of the strings that have the same length
	///    ['hi','hello','welcome','hy'] // ==> ["hi","hy"]


function sameLength(array){
	var newArr=[];
	var same=array[0]

	for (var i = 0; i < array.length; i++) {
		for (var j = 0; j < array.length; j++) {
			if(array[i].length === array[j].length && array[i] !== array[j]){
				newArr.push(array[i])
			}
		}
	}

	return newArr;
}























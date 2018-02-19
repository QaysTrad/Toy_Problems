// 1-define objects for 5 of your classmater containing the following keys:
	// -full name 
	// -age 
	// -favorite sports 
	// -nationality
	// and then save theme in one array called mates!
//var classMater={
<<<<<<< HEAD
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




=======
	var mate1={
		name:"Ahmad",
		age:23,
		faveriteSport:"fottball",
		nationality:"Syrian"
	}
	var mate2={
		name:"Atheer",
		age:34,
		faveriteSport:"flying disk",
		nationality:"Iraqi"
	}
	var mate3={
		name:"Ayman",
		age:30,
		faveriteSport:"fottball",
		nationality:"Jordainian"
	}
	var mate4={
		name:"Abdullateef",
		age:29,
		faveriteSport:"fottball",
		nationality:"syrian"
	}
	var mate5={
		name:"Raed",
		age:26,
		faveriteSport:"handball",
		nationality:"Jordainian"
	}

var classMate=[mate1,mate2,mate3,mate4,mate5];
>>>>>>> 4adfcdac6466f677cdfcc57373b898d6cde4fd0d
//}
	/*
	Name:["Ahmad","Ather","Ayman","Abdullateef","Raed"],
	age:[23,29,30,29,27],
	faveriteSport:["fotball","flying disk","chess","tinis","playstation"],
	nationality:["Syrian","Iraqi","Jordainian","Syrian","Jordainian"]
	*/
//}
// 2-depending on the previous exercises , write a function that returns the older classmate from mates array.
<<<<<<< HEAD
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
=======
 function older(arr){

	var olderAge=0;
	var x=0;
	var oldername="";

	while(x<arr.length){
		
		if(arr[x].age>olderAge){
			olderAge=arr[x].age;
			

		}
		x++
	}

		x=0;
		while(x<arr.length){
			if(arr[x].age===olderAge){
				oldername=arr[x].name;
				
			}
			x++
		}




	

return oldername;



>>>>>>> 4adfcdac6466f677cdfcc57373b898d6cde4fd0d
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























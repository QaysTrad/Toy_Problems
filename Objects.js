// 1-define objects for 5 of your classmater containing the following keys:
	// -full name 
	// -age 
	// -favorite sports 
	// -nationality
	// and then save theme in one array called mates!
//var classMater={
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
//}
	/*
	Name:["Ahmad","Ather","Ayman","Abdullateef","Raed"],
	age:[23,29,30,29,27],
	faveriteSport:["fotball","flying disk","chess","tinis","playstation"],
	nationality:["Syrian","Iraqi","Jordainian","Syrian","Jordainian"]
	*/
//}
// 2-depending on the previous exercises , write a function that returns the older classmate from mates array.
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



}




// 3-write a function that takes an object as argument and returns how many keys does that object contain.
	// nbOfObjKeys({}) // ==> 0
	// nbOfObjKeys({name:"housam",age:"3"}) // ==> 2

	function numOfKeys(obj){
		var count=0;
		for(var key in obj){
			count++;

		}
		return count;
	}






// if you finished the above, solve the following:
// write a function that takes array of strings and returns an array of the strings that have the same length
	///    ['hi','hello','welcome','hy'] // ==> ["hi","hy"]


function sameLingth(arr){
	var strlingth=0;
	var newArray=[];
	for(i=0;i<arr.length;i++){
		strlingth=arr[i].length;     //take the length of th fist element
		for(j=i+1;j<arr.length;j++){
			if(strlingth===arr[j].length){  //compare the length of the first element with the other element
				newArray.push(arr[i]);
				newArray.push(arr[j]);

			}


		}
	}

return newArray;


}























	// 1-create a data model to represent some of your classmates
	function addClassMates(name,age,height){
		return {
			name:name,
			age:age,
			height:height
		}
	}
/*
	function addclassmates(name,age){
		return{
			name:name,
			age:age
		}
	}
*/

var belal=addClassMates('belal',25);

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

	// 	-think of different attributes of your classmates? what do all of them have ?
	
	// 	-create a factory function.
	function addclassmates(name,age,gender){
		return{
			name:name,
			age:age,
			gender:gender
		}
	}
	// 	-create an array to hold the classmates that you have created.
	var mates=[mate1,mate2,mate3];

	// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
	function displayFriend(mate){
		return mate.name+" He is "+mate.age+" years old"+"And he is a "+mate.gender+".";
	}
	// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates array.
	function addFriend(friend){
		mates.push(friend);
	}
	// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.
	function nbOfMale(mates){
		var count=0;
		for(i=0;i<mates.length;i++){
			if(mates[i].gender==="Male"){
				count++;
			}
		}

		return count;


	}























	// 	-Write a function searchMates that, given a query and an array of Mates,
		//           searche the array of mates for "matching" mate. You will decide what way you want to write in your search algorithm.

		function searchMates(query,array){
var str="";
var flag;
			for(var i=0;i<array.length;i++){ //loop all the array
				flag=0;
				str=array[i].name;
				str=str.toLowerCase();
				for(var j=0;j<str.length;j++){
				if(query.toLowerCase()===str.substr(j,query.length)){
					flag=1;
				}
			}
		if(flag===1){
			return array[i];
		}

		}
return "no matching Try other name"

	}


























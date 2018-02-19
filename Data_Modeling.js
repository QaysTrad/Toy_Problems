	// 1-create a data model to represent some of your classmates
	// 	-think of different attributes of your classmates? what do all of them have ?
	// 	-create a factory function.
	// 	-create an array to hold the classmates that you have created.
	// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
	// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates array.
	// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.
	// 	-Write a function searchMates that, given a query and an array of Mates,
	//           searche the array of mates for "matching" mate. You will decide what way you want to write in your search algorithm.
function RBK(name,age,nat,gender){
	return {
		name:name,
		age:age,
		nat:nat,
		gender:gender 
	};
}

var classmate1=RBK ("Ahmad",27,"Jordanian","male");
var classmate2=RBK("Alik",24,"Jordanian","male");
var classmate3=RBK("Nada",31,"Yamman","female");

var array=[classmate1,classmate2,classmate3];

function displayFriend(array){
	var result="";
	for(var i=0;i<array.length;i++){
		result=result+(i+1)+"- "+array[i].name+" "+array[i].age;
		}
		return result;
}

function addFriend(name,age,nat,gender){
 array.push(RBK(name,age,nat,gender));
 return array;
}

function nbOfMale(array){
	var x=0;
	for(var i=0;i<array.length;i++){
		if(array[i].gender==="male"){
			x++;
		}
	}
	return x;

}

// it will search by name only , and it will be case sensitive
function matchname(qu,array){
	for(var i=0;i<array.length;i++){
	if(array.name.toLowerCase().indexOf(qu.toLowerCase())!== -1){
		return "the name is found"
	}}
	return "the name is not found"
}
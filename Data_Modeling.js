	// 1-create a data model to represent some of your classmates
	firstName
	lastName

	// 	-think of different attributes of your classmates? what do all of them have ?
    age
	// 	-create a factory function.
	function makeClassMate (firstName, lastName, age){
		return {
			firstname:firstName,
		    lastName LastName,
		    age: age};
	}
	// 	-create an array to hold the classmates that you have created.
	 
    var classmates = [classMate1,classMate2,classMate3,classMate4]
	// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.

	function displayClassMate (str){
	result= '';
	for (var i=0;i<classmates.length ;i++){
		if (classmates[i]===str){
			return result+i+". "+ classmates[i]
		}
	}
}
	// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates array.
	// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.
	// 	-Write a function searchMates that, given a query and an array of Mates,
	//           searche the array of mates for "matching" mate. You will decide what way you want to write in your search algorithm.


classMate1:{firstName: mohammad, lastName: doraidi, age: 24 };
	 classMate2:{firstName: raed, lastName: baniawaad, age: 22};
	 classMate3:{firstName: shefaa, lastName: almostafa, age: 17 };
	 classMate4:{firstName: bushra, lastName: alabsi, age: 26};
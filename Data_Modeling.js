



	// 1-create a data model to represent some of your classmates
	// 	-think of different attributes of your classmates? what do all of them have ?
	// 	-create a factory function.
function factory (name,age,hoby,gender){
	return {
		name:name,
		age:age,
		hoby:hoby,
		gender:gender
	};
}
var mate1 = factory("mohammed",23,"swimming","male")
var mate2 = factory("anas",23,"driving","male")
var mate3 = factory("haytham",23,"writing","male")
// 	-create an array to hold the classmates that you have created.
var classMate=[mate1,mate2,mate3];
	
	
	// 	-write a function called displayFriend that takes a mate as anargument and returns the important information in a readable way.

	function displayFrind(mate){
		return mate.name + " " + mate.age + " " + mate.hoby + " "+ mate.male
	}
	// 	-write a function called addFriend that takes a mate as an argument and add it to your classMates array.
	function addFriend (classMate,mate){
	classMate.push(mate);	

	}
	// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.
	function nbOfMale (classMate){
		var result = 0
		for(var i = 0; classMate.length > i; i++){
			if(classMate[i].gender === "male"){
				result = result + 1;
			}
		}
			return result
	}
	
	// 	-Write a function searchMates that, given a query and an array of Mates,
	//           searche the array of mates for "matching" mate. You will decide what way you want to write in your search algorithm.

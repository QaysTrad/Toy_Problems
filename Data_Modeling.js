	// 1-create a data model to represent some of your classmates
	// 	-think of different attributes of your classmates? what do all of them have ?
	// 	-create a factory function.
	// 	-create an array to hold the classmates that you have created.
	// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
	// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates array.
	// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.
	// 	-Write a function searchMates that, given a query and an array of Mates,
	//           searche the array of mates for "matching" mate. You will decide what way you want to write in your search algorithm.
<<<<<<< HEAD

	function makeClassmate(name, age, nationality,Gender){
		return {name: name,
				age: age,
				nationality: nationality,
				Gender: Gender
			}
	}
var classmate1 = makeClassmate("Nada Taha", 34 , "Yemenian", "Female");
var classmate2 = makeClassmate("Hanan Nouman", 24 , "Palestinian", "Female");
var classmate3 = makeClassmate("Raed bani Awwad", 22 , "Jordanian", "Male");
var classmate4 = makeClassmate("Ammar Halbouni", 23 , "Jordanian", "Male");

var classMates = [classmate1,classmate2,classmate3, classmate4];

function displayFriend(friend){
	if (friend["Gender"]=== "Female"){
	return friend.name + ", "+friend.age +" years old" + ", and she is "+friend.nationality;}
	if (friend["Gender"]=== "Male"){
	return friend.name + ", "+friend.age +" years old" + ", and he is "+friend.nationality;}
}

function addFriend (friend){
  classMates.push(friend);
  return classMates;
}   
function nbOfMale(array){
	var counter = 0;
	for (var i=0; i<array.length; i++){
		if (array[i]["Gender"] === "Male"){
			counter++;
		}
	}
	return "number of male classmates is: "+ counter;
}

function searchMates (array, query){
	var result =[];
	var c =0;
	for (var i=0; i< array.length; i++){
		for (var key in array[i]){
			if (array[i][key]=== query){
				result[c] = array[i];
				c++;
			}
			else if (typeof (array[i][key]) == "string"){
				if (array[i][key].indexOf(query)>=0){
					result[c] = array[i];
				c++;
				}

			}
		}
	} return result;
}
=======
>>>>>>> bc6e2edad1c6d0c213c8f26ffb373fe17961ef71

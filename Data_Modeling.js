	// 1-create a data model to represent some of your classmates
	// 	-think of different attributes of your classmates? what do all of them have ?
	// 	-create a factory function.
	// 	-create an array to hold the classmates that you have created.
	// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
<<<<<<< HEAD

	// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates array.

	// 	7-calculate the number of male friends that your class have by writing a function called nbOfMale.

	// 	8-Write a function searchMates that, given a query and an array of Mates,

	//       9    searche the array of mates for "matching" mate. You will decide what way you want to write in your search algorithm.

//  1===================================

var mate1={Name:"Nader",Age:27,Hoppy:"kidding",Genre:"Male"};
var mate2={Name:"Yussur",Age:28,Hoppy:"cooking",Genre:"Female"};
var mate3={Name:"raef",Age:25,Hoppy:"eating",Genre:"Male"};

//  3=====================================

function Mate (fullName,age,hoppy,genre){
	return {
		Name:fullName,
		Age:age,
		Hoppy: hoppy
		Genre: genre
	}
}

//  4====================================

var classmates=[mate1,mate2,mate3];

// 5=====================================

function displayFriend (mate) {
	var i=0
		while (i<classmates.length){
			if(mate=classmates[i].Name){
				return classmates[i]
			}
           i=i+1
		}
}

// 6 ==============================

function addFriend(newmate){
  classmates.push(Mate(newmate.Name,newmate.Age,newmate.Hobby,newmate.Genre))
}
return classmates

//  7=========================
function nbOfMale(arr){

var i=0
var res=0
		while (i<classmates.length){
			if(arr[i].Genre="Male"){
           i=i+1
           res=res+1
           }
		}
		return res
}
// 8===========================







=======
	// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates array.
	// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.
	// 	-Write a function searchMates that, given a query and an array of Mates,
	//           searche the array of mates for "matching" mate. You will decide what way you want to write in your search algorithm.
>>>>>>> bc6e2edad1c6d0c213c8f26ffb373fe17961ef71

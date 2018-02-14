	// 1-create a data model to represent some of your classmates
<<<<<<< HEAD
	var ali={
		name:"ali",
		age:27,
		nationality:"syrian",
		favoriteSport:"football"
	}
	var abdolhamid={
		name:"abdolhamid",
		age:28,
		nationality:"syrian",
		favoriteSport:"basketball"
	}
	var samer={
		name:"samer",
		age:27,
		nationality:"jordanian",
		favoriteSport:"tenniss"
	}
	var hamza={
		name:"hamza",
		age:27,
		nationality:"iraqian",
		favoriteSport:"walking"
	}







	// 	-think of different attributes of your classmates? what do all of them have ?


	//  answer: all of them have same attributes but with another value
	

	// 	-create a factory function.
	function makeInfo(name,age,nationality,favoriteSport){
		return
		{ 
			name:name,
			age:age,
			nationality:nationality,
			favoriteSport:favoriteSport

	}



	// 	-create an array to hold the classmates that you have created.

	var classmates=[ali,abdolhamid,samer,hamza];


	// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
		function displyMate(mate){
			return "my friend "+mate.name+" is "+mate.nationality+" he is "+mate.age+" years old and he like "+mate.favoriteSport;
		}
	// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates array.
		function addFriend(mate){
			classmates.push(mate)
		}


	// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.

	// 	-Write a function searchMates that, given a query and an array of Mates,
	//           searche the array of mates for "matching" mate. You will decide what way you want to write in your search algorithm.
	function searchMates(query,arr){

		for (var i=0; i<arr.length(); i++) {

		
		for (var key in arr){
			if (query===arr[i]["i"]){
				return true;
			}
		}return false;
	}
}
=======
	// 	-think of different attributes of your classmates? what do all of them have ?
	// 	-create a factory function.
	// 	-create an array to hold the classmates that you have created.
	// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
	// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates array.
	// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.
	// 	-Write a function searchMates that, given a query and an array of Mates,
	//           searche the array of mates for "matching" mate. You will decide what way you want to write in your search algorithm.
>>>>>>> bc6e2edad1c6d0c213c8f26ffb373fe17961ef71

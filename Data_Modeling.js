	// 1-create a data model to represent some of your classmates
	// 	-think of different attributes of your classmates? what do all of them have ?
	// 	-create a factory function.
	// 	-create an array to hold the classmates that you have created.
	// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
	// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates array.
	// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.
	// 	-Write a function searchMates that, given a query and an array of Mates,
	//           searche the array of mates for "matching" mate. You will decide what way you want to write in your search algorithm.




// create a factory function

create createClassMates ( firstName, lastName, age, naionality, gender ) {

	return {

	firstName : firstName,
	lastName : lastName
	age : age,
	nationality: nationality,
	gender : gender

	};


}

// create 3 class mates

var mate1 = createClassMates ( 'Dareen', 'Hanash' , 29, 'Jordanian', 'F');
var mate2 = createClassMates ( 'Muna', 'Said' , 27, 'Yemeni', 'F' );
var mate3 = createClassMates ( 'Ahmad', 'Ali', 24, 'Jordanian', 'M' );



// create an array to hold my classmates

var class = [ mate1, mate2, mate3 ];

// Display the important information of any classmate

function displayFriend ( classMate ) {

	return "first name is " + classMate.firstName + "," + "last name is " + classmate.lastName + "," + "age is " + classmate.age + "," + "nationality is "+ classmate.nationality;

}


// add new class mate

function addFriend ( arr , newMate ) {

 	arr.push( newMate );

}

// Calculate number of male mates

function nbOfMale ( arr ) {

	var counter = 0;

	for ( var i=0; i<class.length; i++ ) {

		if ( arr[i].gender === "M" ) {

		 counter ++;

		}


	}

		if ( counter === 0 ) {

			return "No male class mates";

		}

		else  {

			return "Number of male class mates are " + counter;
		}

}



// search for class mates based on a given query

 
function searchMates ( query, arr ) {

	var newQuery = query.toLowerCase();

	var lowerFirstNames = lowercaseLetters ( arr );

	for ( var i=0; i < lowerFirstNames.length ; i++ ) {

		if ( lowerFirstNames[i].indexOf( newQuery ) !== -1 ) {

			return "The mate " + lowerFirstNames[i] + "exits";

		}

	}

	    return "The mate " + lowerFirstNames[i] + "does not exit";


}




function lowerCaseLetters ( arr ) {


	lowerFirstName = [];

		for ( var i =0; i < arr.length; i++ ) {

			lowerFirstName.push (arr[i].firstName.toLowerCase());


		}	

	return lowerFirstName;

}

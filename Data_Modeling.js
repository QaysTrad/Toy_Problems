	// 1-create a data model to represent some of your classmates
	// 	-think of different attributes of your classmates? what do all of them have ?
	// 	-create a factory function.
	// 	-create an array to hold the classmates that you have created.
	// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
	// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates array.
	// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.
	// 	-Write a function searchMates that, given a query and an array of Mates,
	//           searche the array of mates for "matching" mate. You will decide what way you want to write in your search algorithm.


function makeClassmate(name,gender,age,nationality,favSport)
{
	return {
		name:name,
		gender:gender,
		age:age,
		nationality:nationality,
		favSport:favSport
	};
}

var mate1 = makeClassmate( "shatha","female",28,"syrian","football");
var mate2 =makeClassmate( "muna","female",27,"yameni","basketball");
var mate3 =makeClassmate( "ahmad","male",21,"jordanian","tennis");
var mate4 =makeClassmate( "hamza","male",31,"jordanian","swimming");

var mates=[mate1,mate2,mate3,mate4];

function displayMates(mates)
{
	var display ="";
	for (var i =0 ; i<mates.length ; i++)
	{
		display += i+1 +". "+"name:"+mates[i].name+" gender: "+mates[i].gender+"age: "+mates[i].age+"\n"
	}
	return display;
}

function addFriend (mate)
{
	mates.push(mate);
	return mates;
}

function noOfMale(mates)
{
	var n = 0;
	for (var i=0; i<mates.length; i++)
	{
		if (mates[i].gender==="male")
		{
			n++;
		}

	}
	return "no of males is: "+ n ;

}

// I will search by name only , and it will be case sensitive 



function searchMates(query,mates)
{
	for (var i=0; i<mates.length ; i++)
	{
		if (mates[i].name.toLowerCase().indexOf(query.toLowerCase()) !== -1)
	{
		return "The person you are searching for is found"
	}

	}
		return "The person you are searching for is not found"

}


	// 1-create a data model to represent some of your classmates
	// 	-think of different attributes of your classmates? what do all of them have ?
	// 	-create a factory function.
function makeClassmate(name, gender, nationality)
{
	return {
		name: name,
		gender: gender,
		nationality: nationality
	};
}

var mate1 = makeClassmate("soso", "female", "Lebanese");
var mate2 = makeClassmate("Ahmad", "male", "Syrian");
var mate3 = makeClassmate("Atheer", "male", "Iraqi");
var mate4 = makeClassmate("Alaa", "female", "Jordanian");
var mate5 = makeClassmate("Rami", "male", "Syrian");


	// 	-create an array to hold the classmates that you have created.
var mates = [mate1, mate2, mate3, mate4, mate5];
	// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
function displayFriend(mate)
{
	return mate.name + " " + mate.gender + " " + mate.nationality;
}	
	// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates array.
function addFriend(mate)
{
	mates.push(mate);
}
	// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.
function nbOfMale(mates)
{
	var count = 0;

	for(var i =0; i< mates.length; i++)
	{
		if(mates[i].gender === "male")
			count++;
	}
	return count;
}
	// 	-Write a function searchMates that, given a query and an array of Mates,
	//           searche the array of mates for "matching" mate. You will decide what way you want to write in your search algorithm.
function searchMates(query, mates)
{
	for(var i=0; i<mates.length; i++)
	{
		if(isMatch(query, mates[i].name))
			return "The mate hes been found!";
	}

	return "The mate does not exist!:"
}

function isMatch(query, name)
{
	if(name.substr(0, query.length).toLowerCase() === query.toLowerCase())
		return true;
	else
		return false;
}
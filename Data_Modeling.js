	// 1-create a data model to represent some of your classmates
	// 	-think of different attributes of your classmates? what do all of them have ?
	// 	-create a factory function.
	// 	-create an array to hold the classmates that you have created.
	// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
	// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates array.
	// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.
	// 	-Write a function searchMates that, given a query and an array of Mates,
	//           searche the array of mates for "matching" mate. You will decide what way you want to write in your search algorithm.
//factory function 
function makeClassmates(name,age,nationality,gender)
{
	return {
		name:name,
		age:age,
		nationality:nationality,
		gender:gender
	}
}

var classmate1=makeClassmates("Mais Mohtaseb",31,"Jordanian","female")
var classmate2=makeClassmates("Mona Saed",27,"yemani","female")
var classmate3=makeClassmates("Alik alaqraa",22,"Ukranian","male")
var classmate4=makeClassmates("Abdalhameed abullah",29,"Syrian","male")
var classmate5=makeClassmates("Mona fadi",30,"Syrian","female")
//array of classmates
 var classMates=[classmate1,classmate2,classmate3,classmate4,classmate5]

 //display function
 function displayFriend(mate)
 {
 	return mate.name + " " + mate.age + " " + mate.nationality
 }
function addFriend(mate)
{
  classMates.push(mate)
}
function nbOfMale(classMatesArr)
{
	var count=0
	for (var i =0;i<classMatesArr.length;i++)
	{
		if (classMatesArr[i].gender==="male")  
		{
			count=count+1
		}

	}
	return count
}
function searchMates(query,MatesArr)
{
	//search for student who has the word in the query iun thier names 
	var newArr=[]
	
  for (var i=0;i<MatesArr.length;i++)
       {
       	if(MatesArr[i].name.indexOf(query)!== -1)
       	{
       		newArr.push(MatesArr[i])
       	}
       }
       return newArr
}

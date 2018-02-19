	// 1-create a data model to represent some of your classmates
	// 	-think of different attributes of your classmates? what do all of them have ?
	// 	-create a factory function.
	// 	-create an array to hold the classmates that you have created.
	// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
	// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates array.
	// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.
	// 	-Write a function searchMates that, given a query and an array of Mates,
	//           searche the array of mates for "matching" mate. You will decide what way you want to write in your search algorithm.

var mate1=factory("anas","male",22,"He play league of legends");
var mate2=factory("omar","male",23,"Nothing :p");
var mate3=factory("ahmad","male",20,"He smokes shisha");

function factory(name,male,age,doHave){
	return {
		name:name,
		male:male,
		age:age,
		doHave:doHave   
	};
}

var array =[mate1,mate2,mate3];

function displayFriend(mate){
	return mate.name+' '+mate.male +' ' + mate.age +' '+ mate.doHave;
}

function addFriend(newFriend){
	var mate4= factory(newFriend);

	array.push(mate4)
	

	return array;
}

function nbOfMale(array){
	var count =0;
for (var i = 0; i < array.length; i++) {
	for(var key in array[i]){
		if(array[i][key]==="male"){
			count++;
		}
	}
}
return count;
}



function searchMates(array,query){
	var count =0;
for (var i = 0; i < array.length; i++) {
	for(var key in array[i]){
		if(array[i][key]===query){
			return array[i];
		}
	}
}m
return "Not matching"

}

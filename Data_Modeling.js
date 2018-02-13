	// 1-create a data model to represent some of your classmates
	// 	-think of different attributes of your classmates? what do all of them have ?
	// 	-create a factory function.
	// 	-create an array to hold the classmates that you have created.
	// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
	// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates array.
	// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.
	// 	-Write a function searchMates that, given a query and an array of Mates,
	//           searche the array of mates for "matching" mate. You will decide what way you want to write in your search algorithm.

var classmates = {   
	name:"",
	age:,
	gender:""
}

function createMate(name1 , age1 , gender1){
	return {
		name:name1,
		age:age1,
		gender:gender1
	}
}

 var mate1 = createMate("ahmad" , 25 , "male")
var mate2 = createMate( "lee" , 27 , "female")
var mate2 = createMate( "alin" , 23 , "female")

var mateArray =[]

mateArray.push( mate1)
mateArray.push( mate2)
mateArray.push( mate3)

function displayFriend(mate ){
	return "Name :"+mate.name1+"\n"+"Age :"+mate.age1+"\n"+"Gender :"+mate.gender1
}
var newMate = createMate("alex" , 30 , "male")
function addMate(mate){
	mateArray.push(mate)
}

addMate(newMate)

function noFmale( array){
	var numoFmal =0
	for (var i = 0; i <array.length; i++) {
			if(array[i]["gender"]==="male"){
				numoFmal++
			}
		
	}
	return "the number of males is :" + x
}
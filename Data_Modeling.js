	// 1-create a data model to represent some of your classmates
var classmates1 = {"Qays Trad" , 23 , "male"}
var classmates2 = {"shefaa" , 17 , "female"}
var classmates3 = {"samer" , 25 , "male"}
var classmates4 = {"hussain" , 29 , "male"}
var classmates5 = {"khadija" , 19 , "female"}
	// 	-think of different attributes of your classmates? what do all of them have ?
	//name , age and gender
	// 	-create a factory function.
	function classMates(name,age ,gender ){
return {
	name : name ,
	age  : age , 
	gender : gender 
	}
	}
	var classmate1 = classMates("Qays Trad" , 23 , "male")
	var classmate2 = classMates("shefaa" , 17 , "female")
	var classmate3 = classMates("samer" , 25 , "male")
	var classmate4 = classMates("hussain" , 29 , "male")
	var classmate5 = classMates("khadija" , 19 , "female")
	// 	-create an array to hold the classmates that you have created.
	var arrClass = [classmate1 , classmate2 , classmate3 , classmate4 , classmate5]
	// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
	function displayFriend(mate) {
		var all = []
		for (var i = 0; i < mate.length; i++) {
			all+= mate[i].name +" ," + mate[i].age +"\n"
		}
		return all
	}
	// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates array.
	function addFriend(mate,array) {
		array.splice(array.length+1 , 0 ,mate)
		return array
	}
	// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.
	function nbOfMale(mate) {
		var result = 0
		for (var i = 0; i < mate.length; i++) {
			if(mate[i].gender ==="male"){
				result++
			}
		}
		return result
	}
	// 	-Write a function searchMates that, given a query and an array of Mates,
	function searchMates(query ,mate) {
		var arr2 = []
		var result = true
		for (var i = 0; i < mate.length; i++) {
			arr2 = mate[i].name
			if (arr2.indexOf(query) !== -1) {
			result = true ;
			}
			result = false
		}
		return result ; 
	}
	//           searche the array of mates for "matching" mate. You will decide what way you want to write in your search algorithm.

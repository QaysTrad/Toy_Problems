	// 1-create a data model to represent some of your classmates
	// 	-think of different attributes of your classmates? what do all of them have ?

var studen1={
name:"yussur",
age:27,
study:"engineer",
gender:"female"
}
	// 	-create a factory function.
function makeclassmate(name,age,study,gender){
return{
name:name,
age:age,
study:study,
gender:gender
}

}   

	// 	-create an array to hold the classmates that you have created.
	var student1=makeclassmate("yussur",27,"engineer","female")
        var classmates=[student1,student2]
	// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
	function displayFriend(student){
        
        return student.name+","+student.age

	}
	// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates array.
function addFriend(student){
classmates.push(student)

}


	// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.
                 function nbOfMale(x){
                 	var s=0
                 for(var i=0;i<x.length;i++){
                if(x[i].gender==="male"){
                   s++
                }
                
                 }
                   return s
                 }


	// 	-Write a function searchMates that, given a query and an array of Mates,
	//           searche the array of mates for "matching" mate. You will decide what way you want to write in your search algorithm.

function searchMates(x,name){
	var found=x[i]
for(var i=0;i<x.length;i++)
if(x[i].name===name){

	
}


}










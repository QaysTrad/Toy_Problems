// 1-define objects for 5 of your classmater containing the following keys:
	// -full name 
	// -age 
	// -favorite sports 
	// -nationality
	// and then save theme in one array called mates!

	var mate1 = {"full name": {first : "Alik", Middle: "essa", last: "alaqra"}, 
	age: 24, 
	favoriteSport : "football", 
	nationality: "Jordanian"}
	var mate2 = {"full name": {first : "Bushra", Middle: "Shaker", last: "alabsi"}, 
	age: 26, 
	favoriteSport : "Running", 
	nationality: "Jordanian"}
	var mate3 = {"full name": {first : "Hanan", Middle: "Ibrahim", last: "Nouman"}, 
	age: 25, 
	favoriteSport : "jumping", 
	nationality: "Jordanian"}
	var mate4 = {"full name": {first : "Ahmad", Middle: "Ibrahim", last: "Riyadh"}, 
	age: 22, 
	favoriteSport : "baseball", 
	nationality: "Jordanian"}
	var mate5 = {"full name": {first : "Shefaa", Middle: "Mohammad", last: "Mustafa"}, 
	age: 17, 
	favoriteSport : "basketball", 
	nationality: "Syrian"}
	var mates = [mate1,mate2,mate3,mate4,mate5];


// 2-depending on the previous exercises , write a function that returns the older classmate from mates array.
function older(mates)
{
	var max=mates[0].age
	var oldest = {};
	for(var i=0;i<mates.length;i++)
	{
		if(mates[i].age>max)
		{
			max=mates[i].age
			oldest =mates[i]
		}
	}
    return oldest;
}



// 3-write a function that takes an object as argument and returns how many keys does that object contain.
function noOfKeys(obj)
{  var arr = []
	for(var key in obj){
		arr.push(key)

	}
	var x=arr.length
	return x;
}

///////
function noOfKeys1(obj)
{  var count =0;
	for(var key in obj){
		count++;
	}
	return count;
}




// if you finished the above, solve the following:
// write a function that takes array of strings and returns an array of the strings that have the same length
//['hi','hello','welcome','hy'] // ==> ["hi","hy"]
function strSameLen(array){
	var arr = [];
	for (var i = 0; i < array.length; i++) {
		for (var j = 0; j < array.length; j++) {
			if(array[i].length=== array[j].length && i !== j )
				{arr.push(array[i]);
				}
		}
	}
	return arr;
}



//Data Modeling
	// 1-create a data model to represent some of your classmates
	// 	-think of different attributes of your classmates? what do all of them have ?
	// 	-create a factory function.
	// 	-create an array to hold the classmates that you have created.
	// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
	// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates array.
	// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.
	// 	-Write a function searchMates that, given a query and an array of Mates,
	//           searche the array of mates for "matching" mate. You will decide what way you want to write in your search algorithm.

        function makeObj(name,age,gender,nationality)
        {
           return{
           	name:name,
           	age:age,
           	gender:gender,
           	nationality:nationality
           };

        }
        var mateA=makeObj("alik",24,"male","Jordanian")
        var mateB=makeObj("bushra",24,"female","Jordanian")
        var mateC=makeObj("hanan",23,"female","Jordanian") 
		var classMates = [mateA, mateB,mateC]
 //         function makeObj1(name,age,gender,nationality)
 //        { 
 //        	var str = "mate"+ count
 //           	var str = {
 //           	name:name,
 //           	age:age,
 //           	gender:gender,
 //           	nationality:nationality
 //           };
 //           count++;
 //           return str;
 //        }  

 //        var arr123=[makeObj1("hanan",23,"female","Jordanian"),makeObj1("hanan",23,"female","Jordanian"),makeObj1("hanan",23,"female","Jordanian")];
	// var arr123=[makeObj1("hanan",23,"female","Jordanian")]

	function displayFriend(obj)
	{
		return "student name: "+obj.name +","+" the age: "+obj.age
	}

	function addFriend(obj){
		classMates.push(obj);
		return classMates;
	}

function nbOfMale(arr)
{
  var count=0
   for (var i = 0; i < arr.length; i++) {
   	  if(arr[i].gender==="male")
   	  	count++

   	}
   	return count;
}

function searchFriend(array, query){
	for (var i = 0; i < array.length; i++) {
		for(var key in array[i])
		 if (array[i][key] === query){
		 	return array[i];
		 }
	}
	return "Didn't find your query";
}

	//Higher Order Function
	// 1 'absAllreate function that accept array as input and check the element 
    //     if it's negative make it positive 
  

	/*
	2) using improved each write function that multiply each element in array with
	 4 if index multiply of 4 

	 var x = [2, 4, 6, 8, 10, 12, 14, 16]
		multiplyOfFour(x);  => [16, 64 , 256] 
    */
   
    function each(array, func) {
        for (var i = 0; i < array.length; i++) {
            func(array[i], i);
        }
    }
	function multiplyOfFour(array) {
	    var result = [];
	    each(array,function(num,i){
	    	if(num%4 === 0 ){ result.push(num*4);}
	    });
	    return result;
	}
/*
using improved each create function that returns an array with all the names in the array
if the index is even
var x = [{name : 'Jon',age : 45}, {name : 'Ali', age : 28},
{name :'Omar', age :17},{name :'Ola', age :37}, {name 'Salwa', age : 22}];
pName(x); = > ['Jon', 'Omar', 'salwa']
*/
	function each(array, func) {
	  for (var i = 0; i < array.length; i++) {
	    func(array[i], i);
	  }
	}
    
	function pName(array) {
		var arr = [];
        each(array, function(x,i){
            if(i%2 ===0){ arr.push(x["name"])}
        })
        return arr;
	}


/*
1) using improved each with objects, create function that prints every element inside the object	
var obj_2 = {name: 'Ibrahim', age : 67, phone : '078-0000000'}
printValue(obj_2); => 
    Ibrahim
    67
    078-0000000
var obj_1 = {name: 'Salim', age : 15, phone : '079-0000000'}
printValue(obj_1); => 
    Salim
    15
    079-0000000
*/
    function each(coll, func) {
        if (Array.isArray(coll)) {
            for (var i = 0; i < coll.length; i++) {
                func(coll[i], i);
            }
        }
        else {
            for (var key in coll) {
                func(coll[key], key);
            }
        }
    }
    
    
	function printValue(obj) {
		
        each(obj, function(value,key){
            console.log(value);
        });
        
	}

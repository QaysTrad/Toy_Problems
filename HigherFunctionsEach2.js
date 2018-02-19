/*
<<<<<<< HEAD
using improved each create function that returns an array with all the
// names in the array
=======
using improved each create function that returns an array with all the names in the array
>>>>>>> cc67d8a9778e9402221541866539cacea4645ed9
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
<<<<<<< HEAD
function pName(name) {
    var names = [];
   return map(argument,function(value,key){
    if (name==="Number")
        return names[key]=(names)
    })
   return names;
}

/*
1) using improved each with objects, create function that print every element
inside the object	
=======
    
	function pName(argument) {
		// your code is here
	}


/*
1) using improved each with objects, create function that print every element inside the object	
>>>>>>> cc67d8a9778e9402221541866539cacea4645ed9
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
<<<<<<< HEAD
     var Value=obj.split(" ")
     return map(Value,function(element){
         return prin(element)
    }).

}












=======
		// your code is here
	}
>>>>>>> cc67d8a9778e9402221541866539cacea4645ed9

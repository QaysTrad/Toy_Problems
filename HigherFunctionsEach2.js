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
    
	function pName(argument) {
<<<<<<< HEAD

		var arr=[]

        each(argument,function(num,i){

         if(i%2===0){

         arr.push(num.name)
         
         }
        
        
        })
      return arr
       
=======
		// your code is here
>>>>>>> cc67d8a9778e9402221541866539cacea4645ed9
	}


/*
1) using improved each with objects, create function that print every element inside the object	
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
		
        var res=[]
        each(obj,function(num,key){
        
        res.push(num)
        
        })
       
     return res
	}








=======
		// your code is here
	}
>>>>>>> cc67d8a9778e9402221541866539cacea4645ed9

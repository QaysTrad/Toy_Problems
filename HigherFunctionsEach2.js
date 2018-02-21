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
		var newArr=[];
		each(argument,function(obj,i){
			if(i%2===0){
				newArr.push(obj.name);
			}
		})
		return newArr;
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
		var string='';
		each(obj,function(value,key){
			console.log(value);
		})
		return;
	}
	function each(coll, func) {
       if (Array.isArray(coll)) {
             for (var i = 0; i < coll.length; i++) {
                   func(coll[i], i);
             }
       } else {
             for (var key in coll) {
                   func(coll[key], key);
             }
       }
 }


	function reduce(array, f, acc) {
        if (acc === undefined) {
              acc = array[0];
              array = array.slice(1);
        }
        each(array, function(element, i) {
              acc = f(acc, element, i);
        });
        return acc;
  }


function fac(array){
	return reduce(array,function(total,element){
		return total* element
	})
}
function allEvens(array){
	return reduce(array,function(results,element){
		return results && element % 2 === 0
	},0)
}

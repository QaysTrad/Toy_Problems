// Write a function called  averageAge that accpets an array of objects and return the average ages for the people who are between 18 and 50
 function each(coll, f) {
	if (Array.isArray(coll)) {
	  for (var i = 0; i < coll.length; i++) {
		f(coll[i], i);
	  }
	} else {
	  for (var key in coll) {
		f(coll[key], key);
	  }
	}
  }

 var people = [ 
       {name: {first: 'Ahmad', middle: 'B.', last: 'AlAhmad'}, age: 85}, 
       {name: {first: 'Amer', last: 'MHD'}, age: 43}, 
       {name: {first: 'Aya', last: 'Sultan'}, age: 36}, 
       {name: {first: 'Hadeel', middle: 'E.', last: 'Lami'}, age: 44}, 
       {name: {first: 'Hadeel', middle: 'E.', last: 'Lami'}, age: 54}, 
       {name: {first: 'Lina', last: 'MHD'}, age: 14} ,
       {name: {first: 'Obada', last: 'Eddin'}, age: 24} 
 ]; 
 function averageAge(people) { 
       // YOUR CODE HERE 
var arr=0
var c=0
each (people, function(element, i){
	if (element.age >= 18 && element.age<= 50){
arr = arr+ element.age
c=c+1
	}
})
return arr/c
 }

 averageAge(people); // 43+36+44+24 = 36.74
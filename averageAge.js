// Write a function called  averageAge that accpets an array of objects and return the average ages for the people who are between 18 and 50
 

 var people = [ 
       {name: {first: 'Ahmad', middle: 'B.', last: 'AlAhmad'}, age: 85}, 
       {name: {first: 'Amer', last: 'MHD'}, age: 43}, 
       {name: {first: 'Aya', last: 'Sultan'}, age: 36}, 
       {name: {first: 'Hadeel', middle: 'E.', last: 'Lami'}, age: 44}, 
       {name: {first: 'Hadeel', middle: 'E.', last: 'Lami'}, age: 54}, 
       {name: {first: 'Lina', last: 'MHD'}, age: 14} ,
       {name: {first: 'Obada', last: 'Eddin'}, age: 24} 
 ]; 
 function averageAge(people1) { 
       // YOUR CODE HERE 
       var arr = people1
       var avg = 0
       var counter = 0

       	for (var i = 0; i < arr.length; i++) {
       		if(arr[i].age > 18 && arr[i].age < 50){
       			avg += arr[i].age
       			counter++
       		}
       	}
       	 return avg/counter
       }
      
 

 averageAge(people); // 43+36+44+24 = 36.74
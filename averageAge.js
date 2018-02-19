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
 // function averageAge(people) { 
 //       var average = 0;
 //       var counter = 0;
 //       for (var i = 0; i < people.length; i++) {
 //       		average = average + people[i].age;
 //       		counter ++;
 //       }
 //       return average/counter;
 // }

 // averageAge(people); // 43+36+44+24 = 36.74


 function each(array , f){
 	for (var i = 0; i < array.length; i++) {
 		f(array[i].age);
 	}
 }
 function avrageAge(people) {
 	var average=0 ;
 	var counter  =0;
 	each(people , f(elemet) {
 		average = average + elemet;
 	}) 
 	return average / counter;
 }

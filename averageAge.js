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
 function averageAge(people) { 
 	var sum=0;
 	var count=0;
 	var avg=0;
 	each(people,function(element,i){
 		if(element.age>15&&element.age<50){
 			sum=sum+element.age;
 			count++;
 		}
 	})
 	avg=sum/count;
 	return avg;
       // YOUR CODE HERE 
 }
//as
 averageAge(people); // 43+36+44+24 = 36.74

function each(arr, f) { 
      for(var i=0;i<arr.length;i++) { 
           f(arr[i], i); 
         } 
       } 
 
 
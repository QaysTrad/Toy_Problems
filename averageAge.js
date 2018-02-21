// Write a function called  averageAge that accpets an array of objects and return the average ages for the people who are between 18 and 50
  function each(array, func) {
        for (var i = 0; i < array.length; i++) {
          func(array[i],i);
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
/* function averageAge(people) { 
 	var sum = 0
 	var a = 0
      for(i= 0; i<people.length;i++){
      	if(people[i].age>18 && people[i].age<50){
      		a = a + 1
      		sum = sum + people[i].age
      	}
      }return sum/a
}*/
 function averageAge(people){
 	var sum = 0
 	var count = 0
 	each(people,function(person,i){
 		if(person.age>18 && person.age<50){
 			sum = sum + person.age
 			count = count + 1
 		}
 	})
 	return sum/count
 }
 averageAge(people); // 43+36+44+24 = 36.74
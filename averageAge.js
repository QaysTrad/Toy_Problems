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
 	var res =0
 	var count = 0
     for (var i = 0 ; i<people.length ; i++){
if (people[i].age >= 18 && people[i].age <= 50) {
 
res = res + people[i].age
count++
}
     }
     return res/count
 }

// would have solved in another way but i dont know how to use the built in each function or the other ones 

/*function each(array,func){

for (var i = 0 ; i < array.length ; i++){
func(array[i],i)

}
}

function averageAge1(people) {
	var res = 0
	var count = 0
each(people,function(x){
if (people[i].age >= 18 && people[i].age <= 50) {

	res = res + people[i].age
count++
}


})

return res/count
}*/

 averageAge(people); // 43+36+44+24 = 36.74
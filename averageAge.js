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


 function reduce(array, f,start){
 	var result = start;
 	each (array,function(result,element){
 		result = f(result,element)
 			})
 	return result;
 }

function each(coll,func){
	for( var i = 0; i<coll.length ; i++){
		return func(coll[i],i)
	}
}










 function averageAge(people) { 
return reduce(people,function(result,num,i){
	if(18 >num>50 ){
		 result + num
	}
 return result / people.length
})


 }

 averageAge(people); // 43+36+44+24 = 36.74
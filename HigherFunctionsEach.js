	// 1) 'absAll' create function that accept array as input and check the element 
    //     if it's negative make it positive 

    var posArray=[];
    var multArray=[];


    function each(array, func) {
        for (var i = 0; i < array.length; i++) {
          func(array[i],i);
        }
    }
	
	var absAll=function(array){
	each(array,function(number){
		if(number<0){
			number=-1*number;
		}
		posArray.push(number);
	})
	return posArray;
}


	


	/*
	2) using improved each write function that multiply each element in array with
	 4 if index multiply of 4 


	
	 var x = [2, 4, 6, 8, 10, 12, 14, 16]
		multiplyOfFour(x);  => [16, 64 , 256] 
    */

    //your code here
    var multiArray=[];
   var multiplyOfFour=function(array){
   	each(array,function(element,i){
   		if(i%4===0&&i!==0){
   			multiArray.push(element*4);

   		}

   	})
   	return multiArray;
   }
    

























	    
	

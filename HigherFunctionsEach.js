	// 1) 'absAll' create function that accept array as input and check the element 
    //     if it's negative make it positive 
    function each(array, func) {
        for (var i = 0; i < array.length; i++) {
          func(array[i]);
        }
    }
	function absAll(array) {
	 //your code here
	 var newArr=[];
	 each(array,function(number){
	 	if (number<0){
	 		number*=-1;
	 	}
	 	newArr.push(number);
	 });
	 return newArr;
	};

// function absAll2(array){
// 	for (var i = 0; i < array.length; i++) {
// 		if(array[i]<0){
// 			array[i]=array[i]*-1;
// 		}
// 	}
// 	return array
// }
//  ayman
	/*
	2) using improved each write function that multiply each element in array with
	 4 if index multiply of 4 

	 var x = [2, 4, 6, 8, 10, 12, 14, 16]
		multiplyOfFour(x);  => [16, 64 , 256] 
    */
   
    function each(array, func) {
        for (var i = 0; i < array.length; i++) {
            func(array[i], i);
        }
    }
	function multiplyOfFour(array) {
	    //your code here
	    var resultArr=[];
	    each(array,function(number){
	    	if (number%4===0) {
	    		resultArr.push(number*4);
	    	}
	    });
	    return resultArr;
	}

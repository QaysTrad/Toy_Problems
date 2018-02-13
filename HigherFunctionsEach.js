	// 1) 'absAll' create function that accept array as input and check the element 
    //     if it's negative make it positive 
    function each(array, func) {
        for (var i = 0; i < array.length; i++) {
          func(array[i]);
        }
    }
	function absAll(array) {
	 var result = [];
	 each(array,function(num){
	 	if (num < 0){ result.push(-num); }
	 	else {result.push(num);}
	 });
	 return result;
	}

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
	    var result = [];
	    each(array,function(num,i){
	    	if(num%4 === 0 ){ result.push(num*4);}
	    });
	    return result;
	}

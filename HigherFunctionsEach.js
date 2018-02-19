	// 1) 'absAll' create function that accept array as input and check the element 
    //     if it's negative make it positive 
    function each(array, func) {
        for (var i = 0; i < array.length; i++) {
          func(array[i]);
        }
    }
	function absAll(array) {
		var array2 = []
	 each(array , function (array) {
	 	if(array < 0){
	 		array*=-1
	 		array2.push(array)

	 	}
	 	else{
	 		array2.push(array)
	 	}
	 })
	 return array2
	}

	/*
	2) using improved each write function that multiply each element in array with
	 4 if index multiply of 4 


	 var x = [2, 4, 6, 8, 10, 12, 14, 16]
		multiplyOfFour(x);  => [16, 64 , 256] 
    */
   
    function each1(array, func) {
        for (var i = 0; i < array.length; i++) {
            func(array[i], i);
        }
    }
	function multiplyOfFour(array) {
	   var array2 = []
	   var counter = 0 
	   each1(array , function(array,i) {
	   	if (array%4 ===0) {
	   		array2[counter]= array*4
	   		counter ++
	   	}
	   	
	   })
	   return array2 
	}

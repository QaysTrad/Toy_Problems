	// 1) 'absAll' create function that accept array as input and check the element 
    //     if it's negative make it positive 
    function each(array, func) {
        for (var i = 0; i < array.length; i++) {
          func(array[i]);
        }
    }
	function absAll(array) {
<<<<<<< HEAD
	 each(array,function(array){
	 	if (array<0){
	 		array*=-1;
	 	}
	 })
	 return array;
=======
	 //your code here
>>>>>>> 983fe32363f702b69af81ee9e7d313dcaf003f18
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
<<<<<<< HEAD
		var result=[];
		each(array,function(array,i){
			if(array%4===0){
				result.push(array*4)

			}
		})
	    return result
=======
	    //your code here
>>>>>>> 983fe32363f702b69af81ee9e7d313dcaf003f18
	}

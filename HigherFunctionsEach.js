	// 1) 'absAll' create function that accept array as input and check the element 
    //     if it's negative make it positive 
    function each(array, func) {
        for (var i = 0; i < array.length; i++) {
          func(array[i]);
        }
    }

    var objArr = [1,2,3,4,5,6]

	function absAll(array) {
	 //your code here // % !== 2
	 var newArr = []; 
	 	
	 	if(array.length !== % 2) {
	 		newArr = newArr + array.length;
	 		debugger;
	 		
	 	}
	 	return newArr;
	 }


	/*
	2) using improved each write function that multiply each element in array with
	 4 if index multiply of 4 

	 var x = [2, 4, 6, 8, 10, 12, 14, 16]
		multiplyOfFour(x);  => [16, 64 , 256] 
    */
   
   ///////////if(!=== % 4) =>>>> REMOVE .POP?
 
    

    function each(array, func) {
        for (var i = 0; i < array.length; i++) {
            func(array[i], i);
        }
    }

    var multiFourArray = [2, 4, 6, 8, 10, 12, 14, 16]

	function multiplyOfFour(array) {
		
		product = 4;
		
		multiNewArray = [];
	    //your code here
	    for (var i = 0; i < array.length; i++) {
	    	
	    	multiNewArray.push (product * array[i])
	    	
	    		if(multiNewArray !== % 4){
	    			
	    			delete;
	    		}

	    }
	    return multiNewArray;
	}
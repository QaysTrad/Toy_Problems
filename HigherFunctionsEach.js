	// 1) 'absAll' create function that accept array as input and check the element 
    //     if it's negative make it positive 
    function each(array, func) 
    {
        for (var i = 0; i < array.length; i++) {
          func(array[i]);
        }
    }
	function absAll(array) 
	{
	   var arr2 = [];

	   each(array, function(num)
	   {
	   		if(num < 0)
	   			arr2.push(num * -1);
	   		else
	   			arr2.push(num);
	   });

	   return arr2;
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

    //Using improved each, check if the index is multiply of 4 
	function multiplyOfFour(array) 
	{
	    each(array, function(num, i)
	    	{
	    		if(i % 4 === 0)
	    			array[i] = num * 4;
	    		else
	    			array[i] = num;    			
	    	});

	    return array;
	}
	//Using normal each, check each element in the array if it is a multiply of 4 
	function multiplyOfFour(array) 
	{
		var arr2 = [];

		each(array, function(num)
			{
				if(num % 4 === 0)
					arr2.push(num * 4);
			});

		return arr2;
	}


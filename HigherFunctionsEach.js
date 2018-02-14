<<<<<<< HEAD
	

	// 1) 'absAll' create function that accept array as input and check the element 
    //     if it's negative make it positive 
    // arr=[2,-1,3]
=======
	// 1) 'absAll' create function that accept array as input and check the element 
    //     if it's negative make it positive 
>>>>>>> 983fe32363f702b69af81ee9e7d313dcaf003f18
    function each(array, func) {
        for (var i = 0; i < array.length; i++) {
          func(array[i]);
        }
    }
	function absAll(array) {
	 //your code here
<<<<<<< HEAD
	 var newArray=[];
	 for each (array[i]%2 !==0){
	 	array[i].unshift(array[i])
	 } return newArray,
	}

	







=======
	}

>>>>>>> 983fe32363f702b69af81ee9e7d313dcaf003f18
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
<<<<<<< HEAD
    var num=1;
	function multiplyOfFour(array) {
	    //your code here
	    for each(array[i]===0){
	    	array[i].push(array[i]*4)
	    }return num;
	}





















=======
	function multiplyOfFour(array) {
	    //your code here
	}
>>>>>>> 983fe32363f702b69af81ee9e7d313dcaf003f18

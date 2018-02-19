	// 1) 'absAll' create function that accept array as input and check the element 
    //     if it's negative make it positive 
    function each(array, func) {
        for (var i = 0; i < array.length; i++) {
          func(array[i]);
        }
    }

    var array =[1,2,3,-1,-3,-6];
	function absAll(array) {
	 //your code here
	 var arr =[];
	 each(array , function(num){
	 	if(num<0){
	 		arr.push(num*-1);
	 	}else{
	 	arr.push(num)
	 }
	 } )
	 return arr;
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
	    //your code here
	    var arr =[];

	    each(array,function(num,i){
	    	if(num%4===0){
	    		arr.push(num*4)
	    	}
	    	


	    })
	    return arr;
	}

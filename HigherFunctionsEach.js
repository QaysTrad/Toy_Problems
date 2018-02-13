	// 1) 'absAll' create function that accept array as input and check the element 
    //     if it's negative make it positive 

    function each(array, func) {
        for (var i = 0; i < array.length; i++) {
          func(array[i]);
        }
    }
	function absAll(array) {
	  var newArr=[];
	  each(array,function(num){
	  	if(num<0){
	  		newArr.push(num * -1)
	  	}else{
	  		newArr.push(num)
	  	}
	  })
	  return newArr;
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
	    var newArr=[]
	    each(array,function(number){
	    	if(number!==0 && number%4===0 ){
	    		newArr.push(number*4)
	    	}
		})
		return newArr
	}

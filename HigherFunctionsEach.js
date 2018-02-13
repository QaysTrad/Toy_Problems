	// 1) 'absAll' create function that accept array as input and check the element 
    //     if it's negative make it positive 
    function each(array, func) {
        for (var i = 0; i < array.length; i++) {
          func(array[i]);
        }
    }
	function absAll(array) {
	 var res=[]
	 each(array,function(num){
	 	if(num < 0){
	 	res.push(-num)
	 }
	 else{res.push(num)}
	 })
	 return res
	}

	/*
	2) using improved each write function that multiply each element in array with
	 4 if index multiply of 4 

	 var x = [2, 4, 6, 8, 10, 12, 14, 16]
		multiplyOfFour(x);  => [16, 64 , 256] // the result is not true 
		but i wrote it as it seems true 
    */
   
    function each(array, func) {
        for (var i = 0; i < array.length; i++) {
            func(array[i], i);
        }
    }
	function multiplyOfFour(array) {
		 var res=[]
	 each(array,function(num,i){
	 	if(i%4===0 && i!==0){
	 	res.push(num*4)
	 }
	 })
	 return res
	}
	    
	

//=================

function multiplyOfFourWithoutCheckingIndex(array){
	 var res=[]
	 each(array,function(num){
	 	if(num%4===0){
	 	res.push(num*4)
	 }

	 })
	 return res
	}





















	// 1) 'absAll' create function that accept array as input and check the element 
    //     if it's negative make it positive 
    function each(array, func) {
        for (var i = 0; i < array.length; i++) {
          func(array[i]);
        }
    }
	function absAll(array) {
	 arr=[]
       
        each(numbers,function(number){
         if(number<0){
          res=number*(-1)
          arr.push(res)
         }
         
        else if(number>0) {
         arr.push(number)
        }

        })
          return arr
	}

	/*
	2) using improved each write function that multiply each element in array with
	 4 if index multiply of 4 

	 var x = [2, 4, 6, 8, 10, 12, 14, 16]
		multiplyOfFour(x);  => [16, 64 , 256] 
    */
   
    function each(array, func) {
        for (var i = 0; i < array.length; i++) {
            func(array[i]);
        }
    }
	function multiplyOfFour(array) {
	    
         ar=[]
         each(array,function(number){

          if(number%4===0){
          	res=number*4
               ar.push(res)
}
          })

       return ar
	}












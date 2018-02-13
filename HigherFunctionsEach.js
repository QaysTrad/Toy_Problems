	// 1) 'absAll' create function that accept array as input 
	//and check the element 
    //     if it's negative make it positive 
    

function absAll(array) {
	 //your code here
	 for (var i = 0; i<array.length ; i++) {
	 	 if (array[i]<0) {
    	 var negative=-1*array[i]
	    array.splice(i,1,negative)
	 }
	 }
	 return array
	}



	/*
    function each(array, func) {
        for (var i = 0; i < array.length; i++) {
          func(array[i],i,array);
        }
    }
	*/


	/*
	2) using improved each write function that multiply each 
	//element in array with
	 4 if index multiply of 4 
	 var x = [2, 4, 6, 8, 10, 12, 14, 16]
		multiplyOfFour(x);  => [16, 64 , 256] 
    */
    function multiplyOfFour(array) {
	 //your code here
	 var newArray=[]
	 var xyz=1
	 for (var i = 0; i<array.length ; i++) {
	 		 if ((array[i]%4)===0) {
	 	 	xyz=array[i]*4
    	    newArray.push(xyz)
	 }
	 }
	 return newArray
	}


   /*
    function each(array, func) {
        for (var i = 0; i < array.length; i++) {
            func(array[i], i);
        }
    }
	function multiplyOfFour(array) {
	    //your code here

	}
*/


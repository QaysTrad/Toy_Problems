	// 1) 'absAll' create function that accept array as input and check the element 
    //     if it's negative make it positive 
<<<<<<< HEAD
    var negArray=[];
    var multArray=[];
=======
>>>>>>> 983fe32363f702b69af81ee9e7d313dcaf003f18
    function each(array, func) {
        for (var i = 0; i < array.length; i++) {
          func(array[i]);
        }
    }
	function absAll(array) {
	 //your code here
<<<<<<< HEAD
	 	each(array,checkNeg);
	 	return negArray;

	}
	 checkNeg=function(number){
		if(number>0){
			number=-1*number;
		}
		negArray.push(number);

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
	function multiplyOfFour(array) {
<<<<<<< HEAD
		each(array,doTheMul);
		return multArray;
	    //your code here
	}
/*
	doTheMul=function(number,i){
		if(i%4===0&&i!==0){              
			number=number*4;
			multArray.push(number);
		}
	}

*/

	doTheMul=function(number,i){
		if(number%4===0&&number!==0){
			number=number*4;
			multArray.push(number);

		}
	}
	

























=======
	    //your code here
	}
>>>>>>> 983fe32363f702b69af81ee9e7d313dcaf003f18

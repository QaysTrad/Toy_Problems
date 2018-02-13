	// 1) 'absAll' create function that accept array as input and check the element 
    //     if it's negative make it positive 
    function each(array, func) {
        for (var i = 0; i < array.length; i++) {
          func(array[i]);
        }
    }
	function absAll(array)
	{
		var absArr=[];
		each(array,function(x){
			if (x<0)
			{
				absArr.push(-x)
			}
			else
			{
			absArr.push(x)
			}
		})
		return absArr;

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

    // this function return the number if its index is a multiple of 4
    
	function multiplyOfFour(array) {
		var newArr=[];
		each(array,function(num,i)
		{
			if (i%4===0)
			{
				newArr.push(num*4)
			}

		})
		return newArr;
	}

// this funtion return a number if it is a multiple of 4 , multiplied by 4 !!

function multipleOfFour (array)
{
	var newArr=[];
	each(array, function(num,i)
	{
		if (num%4===0)
		{
			newArr.push(num*4)
		}

	})
	return newArr;
}
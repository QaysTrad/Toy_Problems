 // Given a number return the closest number to it that is divisible by 10.
 // Example :
	// 22 ===> 20
	// 25 ===> 30
	// 37 ===> 40
 function closestMultipleOf10(num) {
 	//your code is here
 	var newNum = num%10
 	var str = num +""
 	if(newNum <=5){
 		str = str[0] + "0"
 		str = parseInt(str ,"<br>")
 		return str
 	}
 	else{
 		str = parseInt(str[0] ,"<br>")
 		
 		str +=1
 		str+=""
 		str = str[0] + "0"
 		str = parseInt(str ,"<br>")
 		return str
 	}
 	
 }
	// Given a string, swap the case for each of the letters.
	// IbrAHiM --> iBRahIm
	// ToYPRoblEm --> tOyprOBLeM
	function swap(input){
		//your code is here
		var newstr = ""
		for (var i = 0; i < input.length; i++) {
			
			if(input[i] === input[i].toLowerCase()){
				newstr+=input[i].toUpperCase()
			}
			else if(input[i] === input[i].toUpperCase()){
				newstr+=input[i].toLowerCase()
			}
		}
		return newstr
		
	}
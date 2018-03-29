// Write a function called characPosit, when provided with a letter, return its position in the alphabet.
// 	Input :: "a"
// 	Ouput :: "Position of alphabet: 1"
	function characPosit(character){
		//your code is here
		var newChar = character.toLowerCase();
		var arr = ["a" , "b" , "c" , "d" , "e" , "f" ,"g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" ,"o" ,"p" , "q" , "r" , "s" , "t" , "v" , "w" , "x" , "y" , "z"]

		for (var i = 0; i < arr.length; i++) {
			if(arr[i] === newChar){
				return i+1
			}
		}
	}

// Write a function called repeatStr which repeats the given
// string string exactly n times.
// repeatStr("hello",4) ==> 'hellohellohellohello'
	
	function repeatStr(n, s) {
		//your code is here
		if (s === 0) {
			return ""
		}
		return n + repeatStr(n,s-1)
	}
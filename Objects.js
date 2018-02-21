// 1-define objects for 5 of your classmater containing the following keys:
	// -full name 
	// -age 
	// -favorite sports 
	// -nationality
	// and then save theme in one array called mates!
	var mates = [];

	var obj1 = {
		fullName: "Alaa",
		age: 28,
		sports: ["walking"],
		nationality: "Jordanian"
	};
	var obj2 = {
		fullName: "soso",
		age: 27,
		sports: ["swimming"],
		nationality: "Lebanese"
	};
	var obj3 = {
		fullName: "lolo",
		age: 22,
		sports: ["basket ball", "walking"],
		nationality: "Syrian"
	};
	var obj4 = {
		fullName: "Lama",
		age: 23,
		sports: ["swimming"],
		nationality: "Jordanian"
	};
	var obj5 = {
		fullName: "roro",
		age: 31,
		sports: ["foot ball"],
		nationality: "Palestanian"
	};


	mates.push(obj1);
	mates.push(obj2);
	mates.push(obj3);
	mates.push(obj4);
	mates.push(obj5);
	


// 2-depending on the previous exercises , write a function that returns the older classmate from mates array.
function findOlder(arr)
{
	var oldest = arr[0].age;
	var oldClassmate = {};

	for(var i=1; i<arr.length; i++)
	{
		if(arr[i].age > oldest)
		{
			oldest = arr[i].age;
			oldClassmate = arr[i];
		}
	}

	return oldClassmate;
}
// 3-write a function that takes an object as argument and returns how many keys does that object contain.
	 nbOfObjKeys({}) // ==> 0
	 nbOfObjKeys({name:"housam",age:"3"}) // ==> 2
function nbOfObjKeys(obj)
{
	var count =0;

	for(var key in obj)
	{
		count++;
	}

	return count;
}

// if you finished the above, solve the following:
// write a function that takes array of strings and returns an array of the strings that have the same length
var arr1= ['hi','hello','welcome','hy']; // ==> ["hi","hy"]
function findSameLength(arr)
{
	var length;
	var count = 0
	var arr2 = [];

	for(var i=0; i< arr.length; i++)
	{
		length = arr[i].length;
		for(var j=0; j<arr.length; j++)
		{
			if(length === arr[j].length)
			{
				arr2.push(arr[j]);
				count++;
			}
		}
		if(count === 1)
		{
			arr2.splice(arr2.length-1, 1);
			count=0;
			i--;
		}
		else
		{
			count =0;
		}
	}

	return arr2;
}

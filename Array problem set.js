// FUNCTION REVERSE

function reverse(arr){
	for(var i = arr.length; i >= 0; i--){
		console.log(arr[i]);
	}
}

// ISUNIFOM FUNCTION

function isUniform(arr){
	for(var i = 1; i < arr.length; i++){
		if(arr[i] === arr[0]){
			console.log(true);
		}
		else{
			console.log(false);
		}
	}
	
}

// SUMARRAY FUNCTION

function sumArray(arr){
	var result = 0;
	for(var i = 0; i < arr.length; i++){
		var index = arr[i];
		result += index;
	}
	return result;
}
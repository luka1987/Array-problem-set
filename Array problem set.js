// FUNCTION REVERSE

function reverse(arr){
	for(var i = arr.length; i >= 0; i--){
		console.log(arr[i]);
	}
}

// ISUNIFORM FUNCTION

function isUniform(arr){
	var index = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(arr[i] !== index){
			return false;
		}	
}
return true;
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

// MAX FUNCTION

function max(arr){
	var index = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(arr[i] > index){
			index = arr[i]
		}
	}
	return index;
}
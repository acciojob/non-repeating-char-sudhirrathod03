function firstNonRepeatedChar(str) {
 // Write your code here
	let map = new Map();

	for(let char of str){
		map.set(ch,map.get(ch || 0)+1)
	}

	for(let char of str){
		if(map.get(ch) === 1) return ch
	}
	return -1;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 

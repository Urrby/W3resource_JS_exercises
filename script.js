///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Functions
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
1. Write a JavaScript function that reverse a number. Go to the editor
Example x = 32243;
Expected Output : 34223 
*/
/*
function reverseNum (num) {
	return num.toString().split("").reverse().join("");
}

console.log(reverseNum(1234));
*/

/*
2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
*/
/*
function isPal(str) {
	let originalArr = str.split("");
	let reverseArr = str.split("").reverse();
	for (i = 0; i < originalArr.length; i++) {
		if (originalArr[i] !== reverseArr[i]) {
			return false;
		}
	}
	return true;
}

console.log(isPal("ana"));
console.log(isPal("banana"));
*/

/*
3. Write a JavaScript function that generates all combinations of a string. Go to the editor
Example string : 'dog' 
Expected Output : d,do,dog,o,og,g
*/


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Arrays
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
1. Write a JavaScript function to check whether an `input` is an array or not
*/
/*
function isArr (el) {
	if (Array.isArray(el)) {
		return true;
	} else {
		return false;
	}
};

console.log(isArr([1,2,3]));
console.log(isArr("bla"));

*/
/*
2. Write a JavaScript function to clone an array
*/
/*
function cloneArr(arr) {
	let newArr = arr.slice(0, arr.length + 1);
	return newArr;
}

console.log(cloneArr([1,2,3,4,5]));
console.log(cloneArr([1, 2, [4, 0]]));
*/

/*
3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
*/

/*
5. Write a simple JavaScript program to join all elements of the following array into a string. 
*/
/*
function joinToStr(arr) {
	return arr.join("");
}

console.log(joinToStr(["Red", "Green", "White", "Black"]));
*/

/*
6. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8
*/
/*
function evenDash (num) {
	let numArr = num.toString().split("");
	for (i = 0; i < numArr.length; i++) {
		if (numArr[i] % 2 === 0 && numArr[i + 1] % 2 === 0) {
			numArr[i] = numArr[i] + "-"
		}
	}
	
	return numArr.join("");
}

console.log(evenDash(2568));
console.log(evenDash(2461328));
*/

/*
Write a JavaScript program to sort the items of an array.
*/
/*
function sortArr(arr) {
	return arr.sort(function(a,b) {
		return a-b;
	});
}

console.log(sortArr([ 3, 8, 7, 6, 5, -4, 3, 2, 1 ]));
*/

/*
8. Write a JavaScript program to find the most frequent item of an array. 
*/
/*
function mostCommon(arr) {
	let counter = 0;
	let highestCounter = 0;
	let element;
for (i = 0; i < arr.length; i++) {
	for (j = 0; j < arr.length; j++) {
		if(arr[i] === arr[j]) {
			counter++;
			if(counter > highestCounter) {
				highestCounter = counter;
				element = arr[i];
			}
		}
	}
	counter = 0;
}
	
	return element;

}

console.log(mostCommon([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));
console.log(mostCommon([3, 'a', 'a', 'a', 2, 3, 'a', 3, 3, 3, 3, 3, 3, 3, 3, 'a', 2, 4, 9, 3]));
*/

/*
9. Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
*/
/*
function swapCase(str) {
	let strArr = str.split("");
	for (i = 0; i < strArr.length; i++) {
		if (strArr[i] === strArr[i].toUpperCase()) {
			strArr[i] = strArr[i].toLowerCase();
		} else {
			strArr[i] = strArr[i].toUpperCase();
		}
	}
	return strArr.join("");
}

console.log(swapCase("The Quick Brown Fox"));
console.log(swapCase("I am The GREATEST sHoWmAn alive!"));
*/

/*
10. Write a JavaScript program which prints the elements of the following array. 
Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
Sample Output : 
"row 0" 
" 1" 
" 2" 
" 1"
" 24"
"row 1" 
*/
/*
function printArray(arr) {
	for (i = 0; i < arr.length; i++) {
		console.log("Row " + [i])
		for(j = 0; j < arr[i].length; j++) {
			console.log(arr[i][j])
		}
	}
}

console.log(printArray([[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]));
*/

/*
13. Write a JavaScript program to add items in an blank array and display the items.
*/

let values = [];
let counter = 0;

document.querySelector(".add_btn").addEventListener("click", function() {
	values.push(document.getElementById("textfield").value);
	alert("Element " + (counter + 1) + " = " + values[counter]);
	counter++;
	document.getElementById("textfield").value = "";
	
	
});

document.querySelector(".display_btn").addEventListener("click", function() {
	counter = 0;
	for (i = 0; i < values.length; i++) {
		console.log("Element " + (counter) + " = " + values[counter]);
		document.getElementById("display").innerHTML += "<br>Element " + (counter + 1) + " = " + values[counter];
		counter++
	}
});


















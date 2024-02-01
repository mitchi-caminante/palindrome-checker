//function that checks if a word is a palindrome
function isPalindrome(str) {
	const cleanStr = str.toLowerCase().replace(/[\W_]/g, '');
	const reverseStr = cleanStr.split('').reverse().join('');
	return reverseStr === cleanStr;
}

//constants
let palinCheck = document.getElementById('palinCheck');
let wrapper = document.getElementById('wrapper');
let input = document.getElementById('wordToCheck');
let title = document.getElementById('title');
let charCount = document.getElementById('charCount');
let wordCount = document.getElementById('wordCount');

//function to check if input is a palindrome
palinCheck.addEventListener("submit", (e) => {
	e.preventDefault();
	
	let wordToCheck = input.value;
	//change background and text if yes or no
	if (isPalindrome(wordToCheck)) {
		wrapper.classList.add('yes');
		title.textContent="Yes, it is a palindrome.";
	}
	else {
		wrapper.classList.add('no');
		title.textContent="No, it isn't a palindrome.";
	}
})

function resetForm() {
	input.value='';
	wrapper.classList.remove('yes', 'no');
	title.textContent="Is it a palindrome?";
	charCount.textContent = 0;
	wordCount.textContent = 0;
}
//reset the form, background & title on click on text box
input.addEventListener("click", () =>{
	resetForm();
})

//reset the form w/ reset button
palinCheck.addEventListener("reset", () => {
	resetForm();
})

//count characters and words
input.addEventListener("input", () => {
	charCount.textContent = input.value.length;
	let txt = input.value.trim();
	wordCount.textContent = txt.split(' ').length;
})

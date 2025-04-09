const input = document.getElementById('input');
const button = document.getElementById('button');
const output = document.getElementById('output');

function reverseString(str) {
    return str.split("").reverse().join("");
}

function checkInput() {
    const inputValue = input.value;
    reversed = reverseString(inputValue);
    if (inputValue === reversed) {
        output.innerHTML = 'This is a palindrome';
    }   else {
        output.innerHTML = 'This is not a palindrome';
    }

    input.value = '';
    input.focus();
}
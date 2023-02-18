//task 2
let number = prompt('Please enter 5 digit number', '');
if (number.length !== 5) {
    alert('Please enter 5 digit number!');
} else {
    alert('Your number: ' + number.split('').join(' '));
}



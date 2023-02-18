//task 1
let str1 = prompt("Input your 1st string",);
let str2 = prompt("Input your 2nd string",);
let str3 = prompt("Input your 3rd string",);
alert(`You entered: ${str1} ${str2} ${str3}`);
//task 2
let number = prompt('Please enter 5 digit number', '');
if (number.length !== 5) {
    alert('Please enter 5 digit number!');
} else {
    alert('Your number: ' + number.split('').join(' '));
}



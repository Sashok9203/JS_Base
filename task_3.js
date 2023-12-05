let start = +prompt("Enter start number:");
let end = +prompt("Enter end number:");
let sum = null;
for (let index = start; index <= end; index++) {
    sum += index;
}
alert(`The sum of the digits in the range from ${start} to ${end} is equal ${sum}`);

let number = prompt("Enter number:");
alert(number.length);

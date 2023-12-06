let start = +prompt("Task 3.1\n\nEnter start number:");
let end = +prompt("Task 3.1\n\nEnter end number:");
let sum = 0;
for (let index = start; index <= end; index++) {
    sum += index;
}
alert(`Task 3.1\n\nThe sum of the digits in the range from ${start} to ${end} is equal ${sum}`);

let number = +prompt("Task 3.2\n\nEnter number:");
if(Number.isNaN(number))alert(`Task 3.2\n\nInvalid number`);
else alert(`Task 3.2\n\nCount of digits : ${String(number).length}`);

let arr = new Array();
for (let index = 1; index <= 10; index++) {
    let number =  +prompt(`Task 3.3\n\nEnter ${index}-th number:`);
    arr.push(number);
}
let neg = 0;
let pos = 0;
let zero = 0;
let pair = 0;
let npair = 0;
arr.forEach(element => {
    if(element > 0) pos++;
    else if(element < 0) neg++;
    else zero++;
    if(element%2==0) pair++;
    else npair++;
});
alert(`Task 3.3\n\nNegative numbers: ${neg}\nPositive numbers: ${pos}\nZero: ${zero}\nPair numbers: ${pair}\nNot pair numbers: ${npair}`);

let days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
let dayIndex = 0;
while(confirm(`Task 3.4\n\n"${days[dayIndex]}"\nWant to see the next day?`))
{
    if(dayIndex == days.length-1) dayIndex=0;
    else dayIndex++;
}
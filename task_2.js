let user_number = +prompt("Task 2.1\n\nEnter number from 0 to 9:");
let symbol = null;
switch(user_number)
{
    case 0:
        symbol = ")";
        break;
    case 1:
        symbol = "!";
        break;
    case 2:
        symbol = "@";
        break;
    case 3:
        symbol = "#";
        break;
    case 4:
        symbol = "$";
        break;
    case 5:
        symbol = "%";
        break;
    case 6:
        symbol = "^";
        break;
    case 7:
        symbol = "&";
        break;
    case 8:
        symbol = "*";
        break;
    case 9:
        symbol = "(";
        break;
    default:
        alert("Task 2.1\n\nInvalid number");
}
if( symbol != null) alert(`Task 2.1\n\nOn the key with the number "${user_number}" there is a symbol "${symbol}"`);

let user_year = +prompt("Task 2.2\n\nEnter year:");
alert(`Task 2.2\n\n${user_year} ${user_year % 400 == 0 || (user_year%4 == 0 && user_year % 100 != 0)? "is" : " is not" } a leap year`);

let year = +prompt("Task 2.3\n\nEnter year:");
let month = +prompt("Task 2.3\n\nEnter month:");
let day = +prompt("Task 2.3\n\nEnter day:");
let date = new Date(year,month,day);
date.setDate(date.getDate() + 1);
alert(`Task 2.3\n\nNext day ${date.getDate()}/ ${date.getMonth()}/ ${date.getFullYear()}`);



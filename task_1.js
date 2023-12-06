
const current_year = 2023;
let user_year = +prompt("Task 1.1\n\nEnter your year of birth:");
if(Number.isNaN(user_year)) alert(`Task 1.1\n\nInvalid year`);
else alert(`Task 1.1\n\nYour age is ${current_year -  user_year} years`);
let user_spase = prompt("Task 1.2\n\nEnter the volume of the flash drive(Gb):");
if(Number.isNaN(user_spase))alert(`Task 1.2\n\nInvalid volume`);
else alert(`Task 1.2\n\n${parseInt((user_spase*1024)/820) } files with a size of 820MBb can fit on a flash drive`);

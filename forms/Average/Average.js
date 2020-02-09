let myNumbers = [34,56,117,324,183,231,72,111,-10,207];

let userQuestion = prompt('Would you like the sum or the average of the numbers in the array?');

if (userQuestion === 'sum') {
let sum = myNumbers.reduce(function(a, b){
        return a + b;
    }, 0);
    alert(`The sum of the ${myNumbers.length} numbers is ${sum}.`);
  } else if (userQuestion === 'average') {
    let sum = myNumbers.reduce(function(a, b){
        return a + b;
    }, 0);
    let avg = sum/myNumbers.length
    alert(`The average of the ${myNumbers.length} numbers is ${avg}.`)
  } else {
    alert(`You did not correctly enter a response.`);
    }
    

let firstNumber = parseInt(prompt(`Please enter a number.`))
myNumbers.push(firstNumber);

let secondNumber = parseInt(prompt(`Please enter another number.`))
myNumbers.push(secondNumber);

let thirdNumber = parseInt(prompt(`Please enter a third number.`))
myNumbers.push(thirdNumber);

alert(`The last number in the array plus ten is ${myNumbers[12] + 10}.`);
import {countryList} from "./countries.js"


// 1. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types, Display all the value with there type.
const name = "krihsna";
const graduated = true;
let job;
let x = null;
// console.log(x, typeof x);

// 2. Declare variables to store your first name, last name, marital status, country and age and display them using interploation method.

// 6.
const str = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
const strArr = str.split(", ");

// 8.
const str2 =
  "You cannot end a sentence with because because because is a conjunction";
console.log(str2.search("because"));

// 10.

console.log(null == undefined, !null, !undefined);
console.log(null === undefined, 5 === "5", !5);

// 11.
// 4 !== '4'   true
// 4 != '4'    false
console.log("python".length !== "jargon".length);

//12.

// 15.
const now = new Date();
// console.log(now.getFullYear());
// console.log(now.getMonth() + 1);
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getTime() / 1000);


// 17.
// console.log(now.toISOString().split('T').join(' ').slice(0, -8));

// console.log(`${now.getDate()}-${now.getMonth()+1}-${now.getFullYear()} ${now.getHours()}:${
//   now.getMinutes()
// }`)

// console.log(now.toLocaleDateString(), now.toLocaleTimeString())



// 22.
function numberOfDays(month){
 switch(true){
  case 'January':
  case 'March':
  case 'May':
  case 'July':
  case 'August': 
  case 'October':
  case 'December':
    alert("no.of days are 31");
    break;
  case 'febuary':
    alert("no. of days are 28");
    break;
  default:
    alert("no of days are 30")
    break;
 }
}

// 24.done using Es modules

// 26.
countryList.includes('Ethiopia')?console.log('ETHIOPIA present'):countryList.push('Ethiopia');

// 27.
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const sortedArr = ages.sort((a, b) => a - b);
const max = ages.reduce((prev, current) => (prev > current ? prev : current));
const min = ages.reduce((prev, current) => (prev < current ? prev : current));
// console.log(min, max);

// 27.2
function median(arr) {
  if (arr.length % 2 === 0) {
    return arr[arr.length / 2];
  } else {
    const firstTerm = arr[Math.floor(arr.length / 2)];
    const secondTerm = arr[Math.ceil(arr.length / 2)];
    return (firstTerm + secondTerm) / 2;
  }
}
// console.log(median(sortedArr));

// 27.3
const sum = ages.reduce((accumulator, curValue) => accumulator + curValue);
const avg = sum / ages.length;
// console.log(avg);

// 27.4
// console.log(max - min);

// 27.5
const msg =
  Math.abs(min - avg) > Math.abs(max - avg)
    ? `max students have age < avg age`
    : `max students have age > avg age`;

// 28. Use for loop to iterate from 1 to 100 and print only prime numbers
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
function displayPrime() {
  for (let i = 0; i < 100; i++) {
    if (isPrime(i)) {
      // console.log(i);}
    }
  }
}
displayPrime();

// 29. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let sumOddNums = 0;
let sumEvenNums = 0;
for (let i = 0; i < 100; i++) {
  // if number is even
  if (i % 2 === 0) {
    sumEvenNums += i;
  }
  // if number is odd
  if (i % 2 !== 0) {
    sumOddNums += i;
  }
}
// console.log(
//   `sum of even & odd numbers between 1 to 100 is ${sumEvenNums} & ${sumOddNums} respectively`
// );

// 30. Write a script which generates a random hexadecimal number.
function randomHexGenerator(size) {
  function randomHexDigit() {
    // return single Hex digit
    let hexRef = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
    ];
    return hexRef[Math.floor(Math.random() * 16)];
  }
  let str = "";
  for (let i = 0; i < size; i++) {
    str += randomHexDigit();
  }
  return str;
}
// console.log(randomHexGenerator(8))

console.log(countryList.sort());

//32.1
// console.log(countryList.filter((el) => el.includes("land")));

// 32.2

function findLength(str) {
  return str.length;
}

const highestCountryNameLength = countryList.reduce((prevValue, curValue) =>
  prevValue.length > curValue.length ? prevValue : curValue
);
// console.log(highestCountryNameLength);

// 32.3 Extract all the countries containing only four characters from the countries array and print it as array
const requiredData = countryList.filter((country) => country.length === 4);
// console.log(requiredData);

// 32.4 Extract all the countries containing two or more words from the countries array and print it as array
const capitalizeData = countryList.filter((country) => country.includes(" "));
// console.log(capitalizeData);

// 32.5 Reverse the countries array and  capitalize each country and stored it as an array

countryList.reverse();

// 33.
function BMICalculator(weight, height) {
  // check inputs
  if (!weight || !height) return "pass valid data";

  const bmi = weight / (height * height);
  switch (true) {
    case bmi < 18.5:
      return "underweight";
    case 18.5 <= bmi <= 24.9:
      return "normal weight";
    case 25 <= bmi <= 24.9:
      return "overweight";
    case bmi > 30:
      return "obese";
  }
}
// console.log(BMICalculator(71, 1.72));

// 35. Write a functions which checks if all items are unique in the array.
function checkUniqueArray1(arr) {
  return !arr.some((el, i, myArr) => myArr.indexOf(el) !== i);
}
function checkUniqueArray2(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i + 1] === sortedArr[i]) {
      return false;
    }
  }
  return true;
}
checkUniqueArray2([1, 2, 3, 4]);

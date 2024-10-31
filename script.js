const fizzBuzz = (num1) => {
  if (num1 % 3 === 0 && num1 % 5 === 0) {
    console.log("FizzBuzz");
  } else if (num1 % 3 === 0) {
    console.log("Fizz");
  } else if (num1 % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(num1);
  }
};

const factorialCalc = (num) => {
  let result = 1;
  while (num > 0) {
    result *= num;
    num--;
  }
  return result;
};

const findLongestWord = (sentence1) => {
  const words = sentence1.split(" ");
  let longestWord = "";
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
};

const calculateAverage = (numbers) => {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }

  const average = sum / numbers.length;
  return average;
};

removeDuplicates = (array) => {
  const uniqueArray = [];
  for (const item of array) {
    if (!uniqueArray.includes(item)) {
      uniqueArray.push(item);
    }
  }
  return uniqueArray;
};

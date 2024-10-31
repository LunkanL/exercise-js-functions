# Exercise JS Functions

<details open>
<summary>Table of content</summary>

- [Intro](#intro)
  - [Efficiency and Reusability](#1-efficiency-and-reusability)
  - [Organization and Clarity](#2-organization-and-clarity)
  - [Problem-Solving Skills](#3-problem-solving-skills)
  - [Collaboration and Teamwork](#4-collaboration-and-teamwork)
  - [Foundational Knowledge for Advanced Topics](#5-foundational-knowledge-for-advanced-topics)
- [Exercises](#exercises)
</details>

## Intro

**Why learning functions in JavaScript is vital for your progress within in programming and development**

Imagine you’re a chef in a bustling kitchen. Every day, you whip up delicious meals, but instead of reinventing the wheel with each dish, you have a secret weapon: recipes! Recipes allow you to create the same wonderful dishes over and over again, saving time and ensuring quality. This is exactly what functions do in programming.

### 1. **Efficiency and Reusability**

Functions allow you to write a piece of code once and use it multiple times without having to rewrite it. This is not only efficient but also helps reduce errors. Just like a recipe ensures you don’t forget an ingredient, functions help you maintain consistent results in your code. If you need to change something, you only need to update it in one place!

### 2. **Organization and Clarity**

Functions help organize your code into manageable pieces. Instead of a long, convoluted script, you can break your program into logical sections. This makes your code easier to read, understand, and maintain. Think of it as dividing a big project into smaller, more manageable tasks. Each function handles a specific job, making it clearer what your program does.

### 3. **Problem-Solving Skills**

Programming is essentially about problem-solving. Functions teach you how to break down complex problems into smaller, more manageable parts. By practicing creating functions, you develop critical thinking skills that are essential not only in programming but in everyday life. You’ll learn how to approach challenges methodically, think creatively, and find effective solutions.

### 4. **Collaboration and Teamwork**

In the programming world, collaboration is key. When you work on larger projects with others, functions help different team members understand how parts of the system interact. You can build functions that can be shared and reused by others, making teamwork more effective and enjoyable.

### 5. **Foundational Knowledge for Advanced Topics**

Functions are a building block for more advanced programming concepts, such as object-oriented programming, asynchronous programming, and frameworks. Understanding functions sets you up for success as you explore more complex topics and technologies in the future.

### Conclusion

Learning to create and work with functions in JavaScript isn’t just a skill; it’s an essential part of becoming a competent programmer. It empowers you to write cleaner code, enhances your problem-solving abilities, and prepares you for more complex programming challenges. So, embrace the journey of learning functions, and watch as your coding skills—and confidence—grow!

[Back to top](#exercise-js-functions)

## Exercises

Down below is 15 questions on an easy level and 14 on a more intermediate level. When you try and solve these one, remember to use everything you have learned so far. You will need to use arrays, array methods, loops, maths and other stuff as well. Give them a shot, don't just chatgpt them. Work together with a friend if you find them hard.

I also recommend you to read about these tools/methods in JS

- [filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

<details open>
<summary>Exercises content</summary>

- [Level Easy](#level-easy)

  - [Segment 1, no params, no return values](#segment-1-functions-with-no-parameters-and-no-return-values)
  - [Segment 2, params, no return values](#segment-2-functions-with-parameters-one-or-more)
  - [Segment 3, params and return values](#segment-3-functions-with-parameters-and-return-values)

- [Level Intermediate](#level-intermediate)
</details>

#### Level Easy

### Segment 1: Functions with No Parameters and No Return Values

1. **Basic Greeting**

   - Create a function called `greet` that logs the string `"Hello, World!"` to the console.

2. **Favorite Number**

   - Write a function named `favoriteNumber` that logs your favorite number (e.g., `42`) to the console.

3. **Magic Eight Ball**

   - Create a function called `magicEightBall` that logs a random response from the following list: `"Yes"`, `"No"`, `"Maybe"`, or `"Ask again later"`.

4. **Current Year**

   - Write a function called `getCurrentYear` that logs the current year to the console using the `Date` object.

5. **Random Joke**

   - Create a function called `tellJoke` that logs a random joke from a predefined list of jokes to the console.

[Back to exercies](#exercises)

[Back to top](#exercise-js-functions)

---

### Segment 2: Functions with Parameters (One or More)

6. **Personalized Greeting**

   - Write a function named `personalGreeting` that takes a name as a parameter and logs a greeting string (e.g., `"Hello, [name]!"`) to the console.

7. **Sum of Two Numbers**

   - Create a function called `add` that takes two numbers as parameters and logs their sum to the console.

8. **Age in Months**

   - Write a function named `ageInMonths` that takes a person's age in years as a parameter and logs their age in months (e.g., `age * 12`).

9. **Temperature Converter**

   - Create a function called `celsiusToFahrenheit` that takes a temperature in Celsius as a parameter and logs the equivalent temperature in Fahrenheit to the console.

10. **Full Name**
    - Write a function named `getFullName` that takes two parameters, `firstName` and `lastName`, and logs the full name as a single string (e.g., `"John Doe"`) to the console.

[Back to exercies](#exercises)

[Back to top](#exercise-js-functions)

---

### Segment 3: Functions with Parameters and Return Values

11. **Area of a Rectangle**

    - Create a function called `calculateArea` that takes the length and width of a rectangle as parameters and logs the area to the console.

12. **Find Maximum**

    - Write a function named `findMax` that takes two numbers as parameters and logs the larger of the two.

13. **Count Vowels**

    - Create a function called `countVowels` that takes a string as a parameter and logs the number of vowels (a, e, i, o, u) in that string.

14. **Discount Price**

    - Write a function named `calculateDiscount` that takes the original price and the discount percentage as parameters and logs the price after discount to the console.

15. **Reverse String**
    - Create a function called `reverseString` that takes a string as a parameter and logs the string reversed to the console.

[Back to exercies](#exercises)

[Back to top](#exercise-js-functions)

---

#### Level Intermediate

1. **Palindrome Checker**

   - Write a function called `isPalindrome` that takes a string as a parameter and returns `true` if the string is a palindrome (reads the same forwards and backwards) and `false` otherwise.

2. **FizzBuzz**

   - Create a function named `fizzBuzz` that takes a number as a parameter and returns:
     - `"Fizz"` if the number is divisible by 3,
     - `"Buzz"` if it is divisible by 5,
     - `"FizzBuzz"` if it is divisible by both, and
     - the number itself if none of these conditions are met.

3. **Factorial Calculator**

   - Write a function called `factorial` that takes a positive integer as a parameter and returns the factorial of that number (e.g., `5! = 5 × 4 × 3 × 2 × 1`).

4. **Longest Word**

   - Create a function named `findLongestWord` that takes a string (a sentence) as a parameter and returns the longest word in that sentence.

5. **Array Average**

   - Write a function called `calculateAverage` that takes an array of numbers as a parameter and returns the average of those numbers.

6. **Remove Duplicates**

   - Create a function named `removeDuplicates` that takes an array as a parameter and returns a new array with duplicate values removed.

7. **Capitalize First Letter**

   - Write a function called `capitalizeFirstLetter` that takes a string as a parameter and returns the string with the first letter capitalized.

8. **Count Occurrences**

   - Create a function named `countOccurrences` that takes a string and a character as parameters and returns the number of times the character appears in the string.

9. **Merge Arrays**

   - Write a function called `mergeArrays` that takes two arrays as parameters and returns a new array that contains all the elements from both arrays, ensuring no duplicates.

10. **Random Password Generator**

    - Write a function called `generatePassword` that takes a length as a parameter and returns a randomly generated password of that length, using uppercase letters, lowercase letters, and numbers.

11. **Character Frequency**

    - Create a function named `charFrequency` that takes a string as a parameter and returns an object with each character as a key and the number of times it appears in the string as the value.

12. **Intersection of Arrays**

    - Write a function called `arrayIntersection` that takes two arrays as parameters and returns a new array containing only the elements that are present in both arrays.

13. **String Reversal**

    - Create a function named `reverseWords` that takes a string as a parameter and returns the string with the order of the words reversed (e.g., `"Hello World"` becomes `"World Hello"`).

14. **Find Minimum**

    - Write a function called `findMin` that takes an array of numbers as a parameter and returns the smallest number in the array.

[Back to exercies](#exercises)

[Back to top](#exercise-js-functions)

---
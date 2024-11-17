/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/
console.log('----- exersice 1 -----')
const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log(maxOfTwoNumbers(3, 9));
  
  /*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/
console.log('----- exersice 2 -----')
function isAdult(age){
    if (age >= 18){
        return(`your age is ${age}, you are an adult.`)}
        else{
            return(`your age is ${age}, you are a minor.`)
        }
}
console.log(isAdult(23))
console.log(isAdult(11))

/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/
console.log('----- exersice 3 -----')
function isCharAVowel(character){
    if (character === "a" || character === "u"|| character === "i"|| character === "o"|| character === "e"){
        return('true')
    }
    else{
        return('false')
    }
};
console.log(isCharAVowel("a"))
console.log(isCharAVowel("m"))

/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

console.log('----- exersice 4 -----')
function generateEmail(name,domain){
    return `${name}@${domain}.com`

}
console.log(generateEmail('muhannad','live'))
console.log(generateEmail('johnsmith','icloud'))

/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/
console.log('----- exersice 5 -----')
function greetUser(name,timeOfDay){
    if (timeOfDay === "morning"){
        return(`Good Morning, ${name}`)
    }
    else if (timeOfDay === "afternoon"){
        return(`Good afternoon, ${name}`)
    }
    else if (timeOfDay === "evening"){
        return(`Good evening, ${name}`)
    }
    else{
        return(`do you even know what time it is ${name}?`)
    }

}
console.log(greetUser("Muhannad", "morning"));
console.log(greetUser("Muhannad", "afternoon"));
console.log(greetUser("Muhannad", "evening"));
console.log(greetUser("Muhannad", ""));

/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/
console.log('----- exersice 6 -----')
function maxOfThree(num1,num2,num3){
    if(num1>num2 && num1>num3){
        return num1
    }
    else if(num2>num1 && num2>num3){
        return num2
    }
    else if(num3>num1 && num3>num2){
        return num3
    }
    else{
        console.log('all numbers are equal')
    }
}

console.log(`the largest number is ` + maxOfThree(5, 10, 8));
console.log(`the largest number is ` + maxOfThree(93, 10, 8));

/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/
console.log('----- exersice 7 -----')
function calculateTip(billAmount, tipPercentage){
    return(`the amount of the tip is ${billAmount * tipPercentage/100}`)

}

console.log(calculateTip(50, 20));

/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/
console.log('----- exersice 8 -----')
function convertTemperature(temperature,scale){
    if(scale === "C"){
        return temperature = (temperature * 9/5 ) + 32;
    }
    else if (scale === "F") {
        return temperature = (temperature - 32) * 5/9;
    }
}
console.log(convertTemperature(32, "C"))
console.log(convertTemperature(32, "F"))


/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/
console.log('----- exersice 9 -----')
function basicCalculator(number1,number2,operation){
    if(operation === "subtract"){
        return `the subtraction of ${number1} and ${number2} is ${number1 - number2}` 
    }
    else if(operation === "add"){
        return `the addition of ${number1} and ${number2} is ${number1 + number2}` 
    }
    else if(operation === "multiply"){
        return `the multiplication of ${number1} and ${number2} is ${number1 * number2}`
    }
    else if(operation === "divide"){
        return `the division of ${number1} and ${number2} is ${number1 / number2}`
    }
}

console.log( basicCalculator(10, 5, "subtract"));
console.log( basicCalculator(10, 5, "add"));
console.log( basicCalculator(10, 5, "multiply"));
console.log( basicCalculator(10, 5, "divide"));

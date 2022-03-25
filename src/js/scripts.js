async function main() {
    // Here is where we actually call the declared functions.   
    greeting();

    // When we call functions with parameters, we pass in argument values which get pushed into the parameter "variables".
    greetPerson("Joe");
    greetPerson("Sally");
    
    // The value returned from returnAValue() gets substituted into the calculation, and added to 2.
    let myVariable = returnAValue() + 2;
    output(myVariable);

    // Order of operations, the inner parentheses get resolved first, so returnAValue() substitutes its return in.
    // Then addTwoNumbers resolves and adds that value to 12, substituting the result in and assigning it to mySecondVariable.
    let mySecondVariable = addTwoNumbers(returnAValue(), 12);
    output(mySecondVariable);

    output("--Challenge 1 Test--");
    output(numDigits(7213450.53453));
    output(numDigits(12));
    output(numDigits("6234.32"));
    output(numDigits("yes"));

    output("--Challenge 2 Test--");


    output("--Challenge 3 Test--");


    output("--Challenge 4 Test--");


    output("--Challenge 5 Test--");
    
}

// Below here are function declarations. The function isn't actually run until it is called.
// This is a basic function with no parameters (IE it will behave the exact same way every time it runs).
function greeting() {
    output("Hello!");
    output("How are you?");
    output("That's good.");
}

// This is a function with a parameter, which serves as a placeholder variable to be populated by an argument value.
function greetPerson(name) {
    output("Hello, "+name+"!");
    output("How are you?");
    output("That's good to hear, "+name+".");
}

// This is a parameterless function that returns a value.
function returnAValue()
{
    // The return keyword sends a value back to where the method was called.
    // That value then takes the place of the method call in any calculations.
    return 3.141592654;
}

// This is a function with parameters that returns a value. 
function addTwoNumbers(num1, num2)
{
    return num1 + num2;
}

// Challenge 1: Write a function that returns the number of digits in an integer. Return undefined if it's not a number. Truncate fractional components if it's not an integer.
function numDigits(num)
{
    let count;
    let number = Number(num);
    if(!isNaN(number))
    {
        let integer = Math.floor(number);
        count = String(integer).length;
    }
    return count;
}
// Challenge 2: Write a function that takes in an array of booleans and returns the number of "true" values. If the array contains any non-boolean values, the parameter is not an array, or the array is empty, return undefined. 

// Challenge 3: Write a function that takes in a string composed only of lowercase letters and spaces, return undefined if the argument does not meet these requirements. Return a string with the "words" reversed. IE "hello my name is joe" becomes "joe is name my hello".

// Challenge 4: Write a function that takes in an integer between 1 and 1000 inclusive and returns the closest number to that argument that is part of the Fibbonaci sequence. Do not define the Fibbonaci sequence as a constant. Return undefined if the argument is not a number between 1 and 1000 inclusive.
// https://www.mathsisfun.com/numbers/fibonacci-sequence.html

// Challenge 5: Write a function that takes in a string composed of only the values N, E, S, W. Return undefined if the string has any other characters in it. The function will return true if, using the above values as cardinal (compass) directions, someone would end up where they began if they walked 10 feet in each direction. Return false if they would not. Assume they would not cross either pole.



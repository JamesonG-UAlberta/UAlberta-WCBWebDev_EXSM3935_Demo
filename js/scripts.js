async function main() {
    // This is where the code you're actually experimenting with goes.
    
    /*
        1. Create a program that accepts a number from the user and tells them if it is odd or even.
    */

        // input() will always return a string value.
        let userInput = await input("Please enter a number: ");
        // This will output the type of the userInput variable just in case you doubt me.
        output("userInput is of type: "+typeof userInput);
        // Check to see what the result of our modulus will be so we can see why it took a certain decision path.
        output("Result: "+(userInput % 2));

        // If the result of the modulus is 1, it's even.
        if (userInput % 2 == 1)
        {
            output("That number is odd!");
        }
        // If the result of the modulus is 0, it's odd.
        // However, the else will also catch NaN (Not a Number) results if the user enters something JS can't convert to a number.
        else
        {
            output("That number is even!");
        }
        
    /*
        2. Create a program that accepts a number from the user and tells them if it is positive, negative, or zero.
    */
        // input() will always return a string value.
        let userInputTwo = await input("Please enter a number: ");
        if (userInputTwo > 0)
        {
            output("That number is positive!");
        }
        else if (userInputTwo < 0)
        {
            output("That number is negative!");
        }
        else
        {
            output("That number is zero.");
        }

        // This is the same as above, it just has the second if nested inside of the else.
        // Exactly the same behaviour, people just tend to find the above more readable.
        if (userInputTwo > 0)
        {
            output("That number is positive!");
        }
        else 
        {
            if (userInputTwo < 0)
            {
                output("That number is negative!");
            }
            else
            {
                output("That number is zero.");
            }
        }
    /*    
        3. Create a program that accepts a two numbers from the user and congratulates them if both numbers are positive.

        prompt and store two numbers from the user
        if the first number is positive, and the second number is positive
            congratulate the user
        otherwise
            tell the user to try again 
    */
    let userInputQ3One = await input("Please enter the first number: ");
    let userInputQ3Two = await input("Please enter the second number: ");
    if (userInputQ3One > 0 && userInputQ3Two > 0)
    {
        print("Conglaturations!");
    }
    else
    {
        print("Try again and see if you can get both of them to be positive.");
    }
}



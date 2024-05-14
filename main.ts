/* -- Create a variable named miles and assign a numeric value representing distance in miles.
• Calculate the equivalent distance in kilometers using the conversion factor (1 mile = 
    1.60934 kilometers). You can achieve this by multiplying miles by 1.60934.
    • Store the converted distance in kilometers in a variable named kilometers.
    • Use console.log to print a message in the following format:
    */

    let miles :number =130;
    
    const  conversionFactor = 1.60934;

    let kilometers =miles * conversionFactor;

    console.log(`The distance of 130 kilometers is ${kilometers}`);

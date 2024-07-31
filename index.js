let person3 = {
    pizza: ["Deep Dish", "South Side Thin Crust"],
    tacos: "Anything not from Taco bell",
    burgers: "Portillos Burgers",
    ice_cream: ["Chocolate", "Vanilla", "Oreo"],
    shakes: [{
        oberwise: "Chocolate",
        dunkin: "Vanilla",
        culvers: "All of them",
        mcDonalds: "Sham-rock-shake",
        cupids_candies: "Chocolate Malt"
    }]
};

function displayFavoriteFood(person) {
    // Initialize an empty array to store all favorite food dishes
    let favoriteFoods = [];

    // Iterate through each key-value pair in the object
    for (let key in person) {
        if (Array.isArray(person[key])) {
            // If the value is an array, concatenate its elements to favoriteFoods
            favoriteFoods = favoriteFoods.concat(person[key]);
        } else if (typeof person[key] === 'object') {
            // If the value is an object (nested object), recursively call displayFavoriteFood
            favoriteFoods = favoriteFoods.concat(displayFavoriteFood(person[key]));
        } else {
            // Otherwise, add the value to favoriteFoods
            favoriteFoods.push(person[key]);
        }
    }

    return favoriteFoods;
}

// Call the function and log the result
console.log(displayFavoriteFood(person3));


// Create our Person Prototype
function Person(name, age) {
    this.name = name;
    this.age = age;
    
    // Use an arrow to create the printInfo method
    this.printInfo = () => {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    };

    // Create another arrow function for the addAge method that takes a single parameter
    // Adding to the age
    this.addAge = () => {
        this.age++;
    };
}

// Create two instances of Person using the 'new' keyword
let person1 = new Person('Alice', 25);
let person2 = new Person('Bob', 30);

// Print initial info for both persons
person1.printInfo();  // Output: Name: Alice, Age: 25
person2.printInfo();  // Output: Name: Bob, Age: 30

// Increment age of person1 by 3 years
for (let i = 0; i < 3; i++) {
    person1.addAge();
}

// Print updated info for person1
person1.printInfo();  // Output: Name: Alice, Age: 28

// Print info for person2 again (age should remain unchanged)
person2.printInfo();  // Output: Name: Bob, Age: 30

//codewars1 You probably know that number 42 is "the answer to life, the universe and everything" according to Douglas Adams' "The Hitchhiker's Guide to the Galaxy". For Freud, the answer was quite different...

In the society he lived in, people - women in particular - had to repress their sexual needs and desires. This was simply how the society was at the time. Freud then wanted to study the illnesses created by this, and so he digged to the root of their desires. This led to some of the most important psychoanalytic theories to this day, Freud being the father of psychoanalysis.

Now, basically, when a person hears about Freud, s/he hears "sex" because for Freud, everything was related to, and explained by sex.

In this kata, the function will take a string as its argument, and return a string with every word replaced by the explanation to everything, according to Freud. Note that an empty string, or no arguments, should return an empty string.


public class Freud {

    public static String speak(String sentence) {
        if (sentence == null || sentence.isEmpty()) {
            return "";  // Return empty string for null or empty input
        }
        
        // Split the sentence into words using whitespace as delimiter
        String[] words = sentence.split("\\s+");
        
        // Replace each word with "sex"
        StringBuilder result = new StringBuilder();
        for (int i = 0; i < words.length; i++) {
            result.append("sex");
            if (i < words.length - 1) {
                result.append(" ");
            }
        }
        
        return result.toString();
    }

    public static void main(String[] args) {
        // Test cases
        System.out.println(speak("Hello world"));  // Output: "sex sex"
        System.out.println(speak("This is a test"));  // Output: "sex sex sex sex"
        System.out.println(speak(""));  // Output: ""
        System.out.println(speak(null));  // Output: ""
    }
}


//codewars2 Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

public class MultiplyBy50AndAdd6 {

    public static String multiplyAndAdd(int value) {
        // Check if the input value is a string
        if (value instanceof String) {
            return "Error";
        }

        // Perform the calculation
        int result = value * 50 + 6;
        return String.valueOf(result);
    }

    public static void main(String[] args) {
        // Test cases
        System.out.println(multiplyAndAdd(5));   // Output: 256
        System.out.println(multiplyAndAdd(-10)); // Output: -494
        System.out.println(multiplyAndAdd("hello")); // Output: Error
    }
}




//EXERCISE 3 

// Define the promise-based function
function checkStringLength(str) {
    return new Promise((resolve, reject) => {
        if (typeof str !== 'string') {
            // Reject the promise if the input is not a string
            return reject(new Error('Input must be a string'));
        }

        // Check the length of the string
        if (str.length > 10) {
            resolve('Big word');
        } else {
            resolve('Small Number');
        }
    });
}

// Example usage of the function
checkStringLength('HelloWorld!')
    .then(result => console.log(result)) // Logs 'Big word'
    .catch(error => console.error(error)); // Handles any errors

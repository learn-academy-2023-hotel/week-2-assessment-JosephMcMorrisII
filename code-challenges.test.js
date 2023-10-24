// ASSESSMENT 2: Coding Practical Questions with Jest

// // Please read all questions thoroughly
// // If you get stuck, leave comments to help us understand your thought process

// // Use test driven development to complete the following questions
// // Add appropriate dependencies: $ yarn add jest

// // Reminder: The test will call your function
// // Run the file with the following command: $ yarn jest

// // --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// // a) Create a test with expect statements for each of the variables provided

// //const numbersArray1 = [6, 7, 8, 9, 10]

// // Expected output: [18, 21, 24, 27, 30]
// //const numbersArray2 = [24, 27, 30, 33, 36]
// // Expected output: [72, 81, 90, 99, 108]


// // b) Create the function that makes the test pass.

// // Pseudo code:

// // --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// // a) Create a test with expect statements for each of the variables provided.

//  const object1 = { number: 15 }
// // // Expected output: "15 is divisible by three"
//  const object2 = { number: 0 }
// // // Expected output: "0 is divisible by three"
//  const object3 = { number: -7 }

//  describe("divisibleByThree", () => {
//     it("decides if the number inside it is evenly divisible by three or not", () => {
//         expect(divisibleByThree(object1.number)).toEqual("15 is divisible by three")
//         expect(divisibleByThree(object2.number)).toEqual("0 is divisible by three")
//         expect(divisibleByThree(object3.number)).toEqual("-7 is not divisible by three")
//     })
// })
// const divisibleByThree = (number) => {
//     if(number % 3 === 0){
//         return `${number} is divisible by three`
//     } else {
//         return `${number} is not divisible by three`
//     }
// }
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.

// Pseudo code: Input: Create a function that takes an object
// Write the function that tells if a number ran through the function to decide if its divisible by 3.
//Output: 15 is divisible by 3 , 0 is divisible by 3 , -7 is not divisible by 3



// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.

describe("newArray", () => {
    it("returns new array of words with all the words capitalized", () => {
        expect(newArray(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(newArray(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
})

const capitalized = (array) => {
    return array.map((value) => {  
        return value[0].toUpperCase() + value.substring(1)  
    })
}
//console.log(newArray(randomNouns1))

// Pseudo code: Input: Start by making a function that takes in an array
// return the array using .map
// use .toUpperCase on the new array to capitalize the new letters
// Having trouble getting this one to pass
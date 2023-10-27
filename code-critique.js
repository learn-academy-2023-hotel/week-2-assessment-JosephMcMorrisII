// ASSESSMENT 2: Coding Critique with AI

// Enter the following prompt into ChatGPT or similar AI tool.

// Prompt: Create a function that takes in a string and logs the index of the first vowel.

// Copy and paste the code output here.

function findFirstVowelIndex(inputString) {
    // Define an array of vowels for comparison
    const vowels = ["a", "e", "i", "o", "u"];
    const lowercaseInput = inputString.toLowerCase();
    for (let i = 0; i < lowercaseInput.length; i++) {
      if (vowels.includes(lowercaseInput[i])) {
        console.log(`The first vowel "${lowercaseInput[i]}" is at index ${i}.`);
        return i;
      }
    }
    console.log("No vowels found in the input string.");
    return -1; // Return -1 if no vowels are found
  }
  // Example usage:
  findFirstVowelIndex("hello"); // Output: The first vowel "e" is at index 1.
  findFirstVowelIndex("rhythm"); // Output: No vowels found in the input string.

// Critique the code output. 
// I am a little surpised only because their syntax is a little different that what I am used to seeing from the class
//examples. I also didn't know you could console.log multiple things using a ; so I learned that.
//I expected their output to be correct however I just wasn't familiar seeing it this way.
//I don't like how they have lines commented out inside their code. I prefer the notes to be outside of the code at the bottom commented out. The first line "function" we practice that being called const instead. Also the ; in the for loop in lines 12, 15, 16 are also things we don't practice.

// Things to consider in your critique: Were you surprised by the output? Was the output what you expected? Is the correct output being rendered? What do you like about the code? What do you dislike? Are there best practices that are not being followed? Would you take a different approach? What did you learn? 
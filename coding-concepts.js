// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "Hotel 2023"
//console.log(cohort.split(" "))

// a) Your answer: It will seperate each value ex: H, o, t, e, l, 2, 0, 2, 3
// b) Verify and explain: [ 'Hotel', '2023' ]
//.split method splits a string into an array of substrings
//It turned the string into an array and since (" ") added a space inbetween the 2 values

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
//console.log(greeter("LEARN Student"))

// a) Your answer: Error
// b) Verify and explain: undefined
// It is undfined because there is no return for this function

// --------------------3) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
 //console.log(onlyOdds)

// a) Your answer: 11 , 13, 15
// b) Verify and explain: [11, 13, 15]
//the .filter is going through the array and itentifying all the number values
// then its looking if each number were do be divided by 2 have a remainder of 0 to be false
// therfore you get the odd numbers

// --------------------4) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
 //console.log(myCodingSkills.languages[0])

// a) Your answer: JavaScript
// b) Verify and explain: So its calling on object which is myCodingSkills. then within that object its looking at the key and
// its asking  for languages. from languages you it's asking which one is in the 0 index which would be Javascript

// --------------------5) What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Hotel"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
 console.log(learnStudent)

// a) Your answer: George / error?
// b) Verify and explain: 'Geroge', cohort: 'Hotel', year: 2023
// its calling the the entire object so it listed Hotel and 2023 however we put in the
//parameter "geroge" which is dynamic 

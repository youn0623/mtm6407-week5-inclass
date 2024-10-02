import { mtm6407, colors, points } from './data.js';

//done declaratively

//1. loop thorugh each student and provide these in a new variable (array)

/* 
   - first name
   - last name
   - letter grade + (number grade)
*/

//2. go through each colour and return the colour that is red


//3. create a compass variable (object)
/*
   - north - "N"
   - south - "S
   - east - "E
   - west - "W"
*/


//bonus. if you can add this to an html object and return this to the body and make it look somewhat like a compass

//repo mtm6407-week5-inclass

//send github repo link to email - rodneyl@algonquincollege.com - 9pm

// 1.
const studentGrades = mtm6407.map(student => {
    return {
        givenName: student.firstName,
        surname: student.lastName,
        gradeInfo: `${student.gradeLetter} (${student.gradeNumber})`
    };
});

console.log(studentGrades);

// 2.
const colorRed = colors.find(color => color === "red");
console.log(colorRed);

// 3.
const compass = {};
points.forEach(point => {
    compass[point.name] = point.symbol;
});

console.log(compass);


// STUDENT GRADES

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let grades = [60, 70, 45, 20, 40, 90, 100, 30, 45, 75, 40, 80];
let max = 100; // grade values should be b/t 0 and max

// 50 random grades
for (let i = 0; i < 50; i++) {
   let randomInteger = Math.floor(Math.random() * max)
   grades.push(randomInteger)
}
console.log("grades: " + grades)
// Main Program Loop
requestAnimationFrame(draw);

function draw() {
    // Logic
    let barWidth = cnv.width / grades.length;

    // Drawing
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // Draw Bar Graph
    ctx.fillStyle = "orange";
    ctx.strokeStyle = "grey";
    for (let i = 0; i < grades.length; i++) {
        // Calculate scaled bar height based on cnv.height and canvasMax
        let barHeight = grades[i] * (cnv.height / max);

        ctx.fillRect(i * barWidth, cnv.height - barHeight, barWidth, barHeight);
        ctx.strokeRect(i * barWidth, cnv.height - barHeight, barWidth, barHeight);        
    }

    // Request another Animation Frame
    requestAnimationFrame(draw);
}

// MAIN MENU EVENTS

// DOM Elements
let outputEl = document.getElementById('output');

// Main Menu & Go Button
document.getElementById('go').addEventListener('click', mainMenu);

function mainMenu() {
    // Get value of menu select element
    let selection = document.getElementById('menu').value;

    // Take action based on menu selection
    if (selection == 'first40') {
        // Set the grade of the first student to 40.
       grades.splice(0, 1, 40 )
       console.log("GRADES: " + grades)

      
        outputEl.innerHTML = 'First grade to 40';
    } else if (selection == 'last50') {
        // Set the grade of the last student to 50. 
        grades.splice(grades.length - 1, 1, 50)
    


      
        outputEl.innerHTML = 'Last grade to 50';
    } else if (selection == 'random100') {
        // Set the grade of a random student to 100.
            let randomIndex = Math.floor(Math.random() * grades.length)
            grades.splice(randomIndex, 1, 100 )
 




        outputEl.innerHTML = 'Random grade to 100';
    } else if (selection == 'addRandom') {
        // Add a random grade between 0 and 100 to the end of the array.
        let randomGrade = Math.floor(Math.random() * 100)
        grades.splice(grades.length - 1, 1, randomGrade )
        outputEl.innerHTML = 'Add random grade';
    } else if (selection == 'removeLast') {
        // Remove the last grade.
       grades.pop()
       outputEl.innerHTML = 'Remove the last grade';
    } else if (selection == 'count50') {
        // Count how many grades are below 50.  Output the result.
        let gradesLower50 = grades.filter(item => item < 50).length
        console.log("Grades Less Than 50: " + gradesLower50)
        outputEl.innerHTML = 'Count grades below 50';
    } else if (selection == 'change50') {
        // Change all grades that are below 50 to be equal to 50.
        grades.forEach((item, index) => {
           if (item < 50) {
            grades[index] = 50
           }
        })
        console.log("NEW GRADES: " + grades)
        outputEl.innerHTML = 'Change low grades to 50';
    } else if (selection == 'increase10') {
        // Increase each grade by 10%.
        grades = grades.map(item => item = item * 1.1)
        console.log("INCREASE 10 STUFF: " + grades)
        outputEl.innerHTML = 'Increase all grades by 10%';
    } else if (selection == 'decrease10') {
        // Decrease each grade by 10%.
        grades = grades.map(item => item = item * 0.9)
        console.log("DECREASE 10 Stuff: " + grades)
        outputEl.innerHTML = 'Decrease all grades by 10%';
    } else if (selection == 'remove50') {
        // Remove all grades that are below 50.
       grades =  grades.filter(item => item >= 50)
       console.log("GRADES ABOVE 50: " + grades)
        outputEl.innerHTML = 'Remove grades below 50';
    } 
}


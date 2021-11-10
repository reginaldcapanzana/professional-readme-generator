// TODO: Include packages needed for this application
// DONE
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// DONE
const questions = [
    "Provide project title",
    "Provide a short description of your project",
    "Provide project installation steps",
    "Provide usage of project",
    "Provide credits",
    "Provide license",
    "Provide features",
    "Provide how to contribute",
    "Provide tests"
];

// TODO: Create a function to write README file
// DONE
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log("Success!")
    );
}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();

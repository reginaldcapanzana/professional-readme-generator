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
    "Provide license", //List of options
    "Provide features",
    "Provide how to contribute",
    "Provide tests",
    "Enter github username", //last two used for Questions section
    "Enter email address"
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
//Call inquirer to prompt user for input
    inquirer
        .prompt([
            {
                type: "input",
                name: "title",
                message: questions[0],
            },
            {
                type: "input",
                name: "description",
                message: questions[1],
            },
            {
                type: "input",
                name: "installation",
                message: questions[2],
            },
            {
                type: "input",
                name: "usage",
                message: questions[3],
            },
            {
                type: "input",
                name: "credits",
                message: questions[4],
            },
            {
                type: "list",
                name: "license",
                message: questions[5],
                choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-2-Clause', 'BSD-3-Clause', 'BSD-4-Clause', 'None'],
            },
            {
                type: "input",
                name: "features",
                message: questions[6],
            },
            {
                type: "input",
                name: "contribution",
                message: questions[7],
            },
            {
                type: "input",
                name: "tests",
                message: questions[8],
            },
            {
                type: "input",
                name: "username",
                message: questions[9],
            },
            {
                type: "input",
                name: "email",
                message: questions[10],
            },
        ])
        .then((data) => {
            console.log(data);
            // const{title} = data;
            // const{description} = data;

        });
//Use generateMarkdown js file to create markdown
//Call writeToFile to create readme file

}

// Function call to initialize app
init();

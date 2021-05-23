// TODO: Include packages needed for this application
// apparently var is not valid here
const inq = require("inquirer")
const fs = require("fs")
const generateMD = require("./generateMarkDown.js");



// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: 'name',
        message: 'Enter Project Title?',
        //   usually I'd add please.  Today im in a bad mood.  I'm not ready to lose my cat
    },
    {
        type: 'input',
        name: 'discription',
        message: 'Enter description?',
    },

    {
        type: 'input',
        name: 'contentsTable',
        message: 'What is in the Table of Contents?',
    },
    {
        type: 'input',
        name: 'instalation',
        message: 'How does one install?',
    }, {
        type: 'input',
        name: 'use',
        message: 'What is this to be used for?',
    },
    {
        type: 'rawlist',
        name: 'license',
        message: 'Pick the license you intend to use',
        choice: ['None','Im sad', 'Im really sad','someone please help me']
      }, {
        type: 'input',
        name: 'contribution',
        message: 'Give credit to contributors?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Were test run on this?',
      },
      {
        type: 'input',
        name: 'questions',
        message: 'More questions?',
      },
      {
        type: 'input',
        name: 'gitstuff',
        message: 'What is your github username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Where can you be contacted? (enter email address)',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    fs.makefile(fileName, data)
}

// TODO: Create a function to initialize app
function init() { 
    inq.prompt(questions).then(answers)
    writeToFile('README.md',generateMD(answers))
}

// Function call to initialize app
init();

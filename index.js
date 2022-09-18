// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require ("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the name of your repository?',
        name: 'repository',
    },
    {
        type: 'input',
        message: 'How does a user install this?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'How does a user use this application?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'How can a user contribute to this application?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: "How can a user test this application?",
        name: 'test',
    },
    {
        type: 'input',
        message: 'Describe your User Story.',
        name: 'description',
    },
    {
        type: 'list',
        message: 'Would you like to add a license to this ReadMe?',
        name: 'licenseChoice',
        choices: ['Yes' , 'No'],
    },
    {
        type: 'list',
        message: 'What type of license?',
        name: 'licenseType',
        choices: ['MIT License' , 'GPL License' , 'Apache License'],
    },

  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

  fs.writeFile(fileName, data, (err) =>
    err ? console.log('err') : console.log('Thank you! It has been generated!')
  );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt (questions)
    .then ((answers) => {
        const output = generateMarkdown(answers);
        writeToFile("README.md" , output)
    })
}

  // Function call to initialize app
init();
// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const generateMarkdown = require('generateMarkdown.js');

const fs = require('fs');
// TODO: Create an array of questions for user input
const questions =[
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of this project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a brief description of what your project does.',
        },
        {
            type: 'input',
            name: 'motivation',
            message: 'What was your motivation for creating it?',
        },
        {
            type: 'input',
            name: 'fix',
            message: 'What problem does it solve?',
        },
        {
            type: 'input',
            name: 'learn',
            message: 'What did your learn?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide detailed instructions on how to use your project.',
        },
        {
            type: 'input',
            name: 'collaborators',
            message: 'Who else worked on this project with you?',
        },
        {
            type: 'input',
            name: 'assets',
            message: 'What third party assets were used in creating this?',
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What type of License was used?',
            choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-2-Clause', 'BSD-3-Clause', 'N/A']
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        }
    ];

// TODO: Create a function to write README file
function generateREADME(fileName, data){    
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            throw err
        }
        console.log('Success! README file has been generated!')
    })
};

// TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt(questions)
        .then((answers) => {
            generateREADME('README.md', generateMarkdown(answers));
        });
}

// Function call to initialize app
init();

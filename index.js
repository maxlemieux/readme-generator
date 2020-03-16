const fs = require("fs");
const inquirer = require("inquirer");

//const { name, description, installation, usage, license, contributing, tests, questions } = data;

const questions = [
    {
        message: "Enter the project name",
        name: "name"
    },
    {
        message: "Enter a description for this project",
        name: "description"
    },
    {
        message: "Enter directions for installing this project",
        name: "installation"
    },
    {
        message: "Enter a usage guide for this project",
        name: "usage"
    },
    {
        message: "Enter the software license for this project",
        name: "license"
    },
    {
        message: "Enter information about contributing to this project",
        name: "contributing"
    },
    {
        message: "Enter information about tests for this project",
        name: "tests"
    },
    {
        message: "Enter common questions and answers for this project",
        name: "questions"
    }    
];

function writeToFile(fileName, data) {
}


//prompt the user for information
const buildReadme = () => {
    inquirer
    .prompt(questions)
    .then(function(data) {
        const { name, description, installation, usage, license, contributing, tests, questions } = data;
        const readmeText = `
            #${name}
            ${description}
            
            ## Table of Contents
            * Installation
            * Usage
            * License
            * Contributing
            * Tests
            * Questions
            
            ## Installation
            ${installation}

            ## Usage
            ${usage}

            ## License
            ${license}

            ## Contributing
            ${contributing}

            ## Tests
            ${tests}

            ## Questions
            ${questions}
        `
        fs.writeFile('READ.me', readmeText, function(err) {
            if (err) {
              throw err;
            }
        });
    });    
};

function init() {
    buildReadme();
}

init();

const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown.js');
const api = require('./utils/api.js');

const questions = [
    {   message: "Enter your GitHub username",
        name: "username"
    },
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
        type: "list",
        message: "Enter the software license for this project",
        name: "userLicense",
        choices: ["Apache License", "MIT License", "GPL v2", "GPL v3"]
    },
    {
        message: "Enter information about contributing to this project",
        name: "contributing"
    },
    {
        message: "Enter information about tests for this project",
        name: "tests"
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
          throw err;
        };
    });
};


//prompt the user for information
const buildReadme = () => {
    inquirer
    .prompt(questions)
    .then(data => api(data))
    .then(allData => {
        const readMeText = generateMarkdown(allData);
        return readMeText;
    })
    .then(readMeText => {
        writeToFile('READ.me', readMeText);
    });    
};

function init() {
    buildReadme();
};

init();

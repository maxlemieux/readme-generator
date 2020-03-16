const fs = require("fs");
const inquirer = require("inquirer");

const questions = [
    {
        message: "Enter your name",
        name: "name"
    },
    {
        message: "Enter your location",
        name: "location"
    },
    {
        message: "Enter your bio",
        name: "bio"
    },
    {
        message: "Enter your LinkedIn URL",
        name: "linkedin"
    },
    {
        message: "Enter your GitHub URL",
        name: "github"
    }    
];

function writeToFile(fileName, data) {
}


//prompt the user for information
inquirer
    .prompt(questions)
    .then(function(data) {
        const { name, location, bio, linkedin, github } = data;
        const readmeText = `
            <h1>${name}'s Awesome Page</h1>
            <p>Hailing from ${location}, I like to ${bio}.</p>
            <h2>LinkedIn: ${linkedin}</h2>
            <h2>Github: ${github}</h2>
        </body>
        </html>
        `
        fs.writeFile('READ.me', readmeText, function(err) {
            if (err) {
              throw err;
            }
        });
    });    

function init() {

}

init();

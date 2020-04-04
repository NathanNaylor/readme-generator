// TODO: import fs, path and inquirer modules
const fs = require("fs")
const path = require("path")
const inquirer = require("inquirer")

// TODO: import api and generateMarkdown modules from ./utils/
const api = require("./utils/api")
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Add inquirer question objects to questions array. This should
// include all the necessary questions for the user.
const questions = [{
        type: "input",

        message: "What is your GitHub username?",

        name: "username"
    },
    // Project title
    {
        type: "input",

        message: "What is the name of your Project?",

        name: "title"
    },
    // Description
    {
        type: "input",

        message: "Please write a short description.",

        name: "description"
    },
    // License
    {
        type: "list",

        message: "What kind of license should your project have?",

        name: "license",

        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "MPL 2.0", "None"]
    },
    // Installation
    {
        type: "input",

        message: "What command should be used to install dependencies?",

        default: "npm i",

        name: "install"
    },
    // Tests
    {
        type: "input",

        message: "What command should be used to run tests?",

        default: "npm test",

        name: "test"
    },
    // Usage
    {
        type: "input",

        message: "What does the user need to know about using the repo?",

        name: "usage"
    },
    // Contributing
    {
        type: "input",

        message: "What does the user need to know about contributing to the repo?",

        name: "contributing"
    },
    // User GitHub email
    {
        type: "input",

        message: "What is your email?",

        name: "email"
    }
];

function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
    console.log(`README created successfully.`);
}

// TODO: Use inquirer to prompt the user for each question in the
// questions array. Then call api.getUser to fetch the user profile
// data from GitHub. Finally generate the markdown and use writeToFile
// to create the README.md file.
function init() {

    inquirer.prompt(questions).then(answers => {

        api.getUser(answers.username).then(response => {

            console.log(response)
            const data = {...response, ...answers };
            console.log(data)
            writeToFile("output/README.md", generateMarkdown(data));

        })

    })

};

init();
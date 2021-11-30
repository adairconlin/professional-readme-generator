// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What is the title of your project?",
            validate: titleInput => {
                if(titleInput) {
                    return true;
                } else {
                    console.log("Please enter the title of your project.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "projectDescription",
            message: "Provide a description of the project:",
            validate: descriptionInput => {
                if(descriptionInput) {
                    return true;
                } else {
                    console.log("Please enter a description.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "installation",
            message: "Provide a step-by-step description of how to get the development environment running:",
            validate: installInput => {
                if(installInput) {
                    return true;
                } else {
                    console.log("Please provide installation steps.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "usage",
            message: "Provide instruction and examples for use:",
            validate: usageInput => {
                if(usageInput) {
                    return true;
                } else {
                    console.log("Please provide instructions and examples for use.");
                    return false;
                }
            }
        },
        {
            type: "confirm",
            name: "imageConfirm",
            message: "Would you like to add an image of the project?",
            default: true
        },
        {
            type: "input",
            name: "imageLocation",
            message: "Provide the relative filepath of your image:",
            when: ({imageConfirm}) => {
                if(imageConfirm) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: "confirm",
            name: "licenseConfirm",
            message: "Would you like to add a license badge?",
            default: false
        },
        {
            type: "list",
            name: "license",
            message: "Please select the license you would like to apply:",
            choices:  ["MIT", "Apache", "Apache2", "ISC", "GNU"],
            when: ({licenseConfirm}) => {
                if(licenseConfirm) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "contributions",
            message: "Please add contributing guidelines for this project:"
        },
        {
            type: "input",
            name: "tests",
            message: "Please provide tests for your application as well as how to run them:",
            validate: testInput => {
                if(testInput) {
                    return true;
                } else {
                    console.log("Please provide tests for your project.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "github",
            message: "What is your GitHub username?",
            validate: githubInput => {
                if(githubInput) {
                    return true;
                } else {
                    console.log("Please provide your GitHub username.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?",
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log("Please provide your email.");
                    return false;
                }
            }
        }
    ]);
};

// TODO: Create a function to write README file
function writeToFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile("./README.md", data, err => {
            if(err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: "File created"
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    questions()
        .then(readmeData => {
            return generateMarkdown(readmeData);
        })
        .then(pageHTML => {
            return writeToFile(pageHTML);
        })
};

// Function call to initialize app
init();

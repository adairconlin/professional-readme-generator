
# Professional README.md Generator

![license-badge](https://img.shields.io/badge/license-GPL%203.0-blue)
  
## Description
Having a high-quality README for any application is important. It can make or break another users experience when trying out your application, which could lead to the overall success or failure of your project. This application is meant to dynamically generate a professional README file by using a command-line application. By doing so, this allows project creators spend less time formatting their README file and more time working on their projects. <br><br> This project uses the Inquirer package in order to prompt the user from command line for the information that the user wants on their README. This project requires a project title, description, installation instructions, usage steps, contributing guidelines, tests, and contact information. The optional choices for the user to select include adding an image preview of their application and adding a license that represents their project.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
In order to use this project, you can first clone this repository onto your own system. Make sure you have a `.gitignore` file in the projects root directory with `node_modules` inside of it. Then you will have to add both node.js and Inquirer, which this project requires. Simply enter the command `npm init` to initialize node.js in the projects root directory. Then enter the command `node install inquirer` in the projects root directory order to install the Inquirer package.
## Usage
After both Node.js and the Inquirer package has been installed, you can type `node index` in order to start the application. Respond to the prompts accordingly. When the prompts are complete, head over to the README file to see the outcome of your responses. Feel free to copy and paste the contents of the generated README file into your own projects README file. Watch this video walkthrough as an example of how the application works.
  

## License
This project is licensed under the GPL 3.0 license.
  
## Contributing
Write whatever contribution guidelines your would like for this project when using this application. You can also just include The [Contributor Covenant](https://www.contributor-covenant.org/) which is an industry standard.
## Tests
In order to test this product out, navigate to this projects `test.md` file. Use the default text to generate a README file to see how the prompts work. Make sure to read both the `Usage` and `Installation` section before testing. <br><br> You can also test out prompt validation by leaving questions blank or answering Y/n questions incorrectly in order to see how the application responds.
## Questions
If you have any questions on this project, feel free to reach me through my [GitHub profile](https://github.com/adairconlin), or email me at adairconlin@gmail.com.

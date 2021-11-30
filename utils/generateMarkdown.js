// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  return `
![license-badge](https://img.shields.io/badge/license-${data.license}-blue)
  `
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  return `
  This application is covered by the ${data.license} license. View this license [here](https://img.shields.io/badge/license-${data.license}-blue)
  `
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if(!data.licenseConfirm) {
    return '';
  }

  return `
## License
${renderLicenseBadge(data)}
${renderLicenseLink(data)}
  `
}

function renderImage(data) {
  if(!data.imageConfirm) {
    return '';
  }

  return `
![website-preview](${data.imageLocation})
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.projectTitle}
## Description
${data.projectDescription}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}
## Usage
${data.usage}
${renderImage(data)}
${renderLicenseSection(data)}
## Contributing
${data.contributions}
## Tests
${data.tests}
## Questions
If you have any questions on this project, feel free to reach me through my [GitHub profile](https://github.com/${data.github}), or email me at ${data.email}.
`;
}

module.exports = generateMarkdown;

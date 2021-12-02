// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if(!data.licenseConfirm) {
    return '';
  }

  let license = data.license.replace(" ", "%20");
  return `
![license-badge](https://img.shields.io/badge/license-${license}-blue)
  `
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  // When I asked about this function, the instructor couldn't find what sort of link was necessary to use. It seemed as though any sort of hyperlink was unnecessary as long has the badge was being displayed based on the challenge so I'm leaving this function out.
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if(!data.licenseConfirm) {
    return '';
  }

  return `
## License
This project is licensed under the ${data.license} license.
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
${renderLicenseBadge(data)}
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

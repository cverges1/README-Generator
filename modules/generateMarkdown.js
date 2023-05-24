// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let licenseSection;
let licenseBadge;
let licenseLink;

function renderLicenseBadge(license) {
  if (license === 'N/A') {
    licenseBadge = "";
  }
  if (license === 'MIT') {
    licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
  if (license === 'Apache-2.0') {
    licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }
  if (license === 'GPL-3.0') {
    licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  }
  if (license === 'BSD-2-Clause') {
    licenseBadge = '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
  }
  if (license === 'BSD-3-Clause') {
    licenseBadge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'N/A') {
    return "";
  }
  return "-[License](#license)"
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // renderLicenseLink(license);
  if (license === "N/A") {
    licenseBadge === "";
  }
  renderLicenseBadge(license);
  if (license === "N/A") {
    return "";
  } else {
  return `## Licensing: ${license} ${licenseBadge}`
}};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data.license[0]);
  
  return `
  # ${data.title}
  ${renderLicenseSection(data.license[0])}

  ## Description
  ${data.description} ${data.motivation} ${data.fix} ${data.learn}
  
  ## Table of Contents
  
  -[Installation](#installation)
  -[Usage](#usage)
  -[Credits](#credits)
  ${renderLicenseLink(data.license[0])}  

  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## Credits
  
  - Collaborators: ${data.collaborators}
  - Third Party Assets: ${data.assets}

  ## Questions
  To contact me with additional questions:
  - Github: ${data.github}
  - Email: ${data.email}
  `
    ;
}

module.exports = generateMarkdown;
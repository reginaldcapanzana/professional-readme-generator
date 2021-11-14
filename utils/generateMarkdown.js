// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const{title} = data;
  const{description} = data;
  const{installation} = data;
  const{usage} = data;
  const{credits} = data;
  const{license} = data;
  const{features} = data;
  const{contribution} = data;
  const{tests} = data;
  const{username} = data;
  const{email} = data;
  
  licenseBadge = renderLicenseBadge(license);
  licenseLink = renderLicenseLink(license);
  licenseSection = renderLicenseSection(license);

  const markdown = 
  `
  # ${title}
  ## Badges (ADD BADGES HERE)
  ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath) 
  ## Description
  ${description}
  ## Table of Contents (Optional)
  If your README is long, add a table of contents to make it easy for users to find what they need.
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Features](#features)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Installation
  ${installation}
  ## Usage
  ${usage} 
  ## Credits
  ${credits}
  ## License
  The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
  ---
  🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
  ## Features
  ${features}
  ## Contributing
  ${contribution}
  ## Tests
  ${tests}
  ## Questions
  For additional questions please reach me via email or Github!
  Email: ${email}
  Github: [Github Profile](https://github.com/${username})
  `;
  
  return markdown;
}

module.exports = generateMarkdown;

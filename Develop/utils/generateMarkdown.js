// function to generate markdown for README
function generateMarkdown(data) {
  var licenselogo = data.license.replace(" ", "%20");

  return `# ${data.title}

![License: ${data.license}](https://img.shields.io/badge/License-${licenselogo}-blue.svg)


## Description
${data.description}

## Table of Contents:
-[Description](#description)
-[Installation](#installation)
-[Usage](#usage)
-[Contribution](#contribution)
-[Test](#test)
-[License](#license)
-[Questions](#questions)

## Description
${data.description}

## Installation Instructions
${data.installation}

## Usage
${data.usage}

## Contribution Guidlines
${data.contribution }

## Test
${data.Test}

## License
${data.license}

## Questions
${data.questions}

`;
}

module.exports = generateMarkdown;

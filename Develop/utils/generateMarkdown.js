// TODO: Return markdown string for README file given a data object.
function generateMarkdown(data) {

    return `
# ${data.title}


![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-blue.svg)

## Description
${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

Install required dependencies using the following command:

\`\`\`
${data.install}
\`\`\`

## Usage

${data.usage}

## Licensing

${data.license}

## Contributing

${data.contributing}

## Testing

To run tests, use the following command:

\`\`\`
${data.test}
\`\`\`

## Questions

<img src="${data.avatar_url}" alt="GitHub User Icon" style="border-radius: 30px" width="50">  

If you have questions about the repo, open an issue or contact [${data.username}](${data.html_url}) directly at ${data.email}.
`;
}

module.exports = generateMarkdown;
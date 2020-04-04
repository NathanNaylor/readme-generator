// TODO: Return markdown string for README file given a data object.
function generateMarkdown(data) {
    return `
# ${data.title}

# ${data.description}
# ${data.install}
# ${data.usage}
# ${data.license}
# ${data.contributing}
# ${data.test}
# ${data.avatar_url} ${data.email}

`;
}

module.exports = generateMarkdown;
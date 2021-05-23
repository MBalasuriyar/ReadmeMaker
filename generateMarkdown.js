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
  return `# ${data.name}
  # ${data.description}
  # ${data.contentsTable}
  # ${data.installation}
  # ${data.use}
  # ${data.license}
  # ${data.contribution}
  # ${data.tests}
  # ${data.questions}
  # [GitHub](https://github.com/${data.gitstuff})
  # [Email](Contact:${data.email})

`;
}

module.exports = generateMarkdown;


// made with assistance of Marcus and Adam

function generateMarkdown(data) {
    const { name, description, installation, usage, userLicense, contributing, tests, questions } = data;
    const readmeText = `
        #${name}
        ${description}
        
        ${badgeFunction(userLicense)}

        ## Table of Contents
        * Installation
        * Usage
        * License
        * Contributing
        * Tests
        * Questions
        
        ## Installation
        ${installation}

        ## Usage
        ${usage}

        ## License
        This project is licensed under the ${userLicense}.

        ## Contributing
        ${contributing}

        ## Tests
        ${tests}

        ## Questions
        ${questions}
    `
  return readmeText;
};

function badgeFunction(userLicense) {
  return `[![GitHub license](https://img.shields.io/badge/license-${userLicense}-blue.svg)]`
};
// call badgeFunction(data.license) where needed on the page


module.exports = generateMarkdown;

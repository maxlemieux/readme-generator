/* Generate Markdown for the readme file, using an object containing responses from inquirer.js and axios API data */
function generateMarkdown(allData) {
    const { username, name, description, installation, usage, userLicense, contributing, tests } = allData.data;
    readmeText = `
        #${name}
        ${description}
        
        ${badgeFunction(userLicense)}

        ## Table of Contents
        * [Installation](#installation)
        * [Usage](#usage)
        * [License](#license)
        * [Contributing](#contributing)
        * [Tests](#tests)
        * [Questions](#questions)
        
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
        ![A picture of the author](${allData.apiData.data.avatar_url})
        Questions? Contact the author via email at ${allData.apiData.data.email}.
    `
    return readmeText;
};

function badgeFunction(userLicense) {
  return `[![GitHub license](https://img.shields.io/badge/license-${userLicense}-blue.svg)]`
};
// call badgeFunction(data.license) where needed on the page


module.exports = generateMarkdown;

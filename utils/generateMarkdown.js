function generateMarkdown(data) {
  return `
# ${data.title}

`;
}

function badgeFunction(userLicense) {
  return `[![GitHub license](https://img.shields.io/badge/license-${userLicense}-blue.svg)]`
};
// call badgeFunction(data.license) where needed on the page


module.exports = generateMarkdown;

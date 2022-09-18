// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "MIT License") {
        return "![License](https://img.shields.io/badge/License-MIT-yellow.svg)"
    }
    if (license === "GPL License") {
        return "![License](https://img.shields.io/badge/License-GPLv3-blue.svg)"
    }
    if (license === "Apache License") {
        return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)"
    if (license==="none") 
            return ""
    }
}

// renderLicenseBadge();

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

        if (license === "MIT License") {
            return "https://choosealicense.com/licenses/mit/"
        }
        if (license === "GPL License") {
            return "https://www.gnu.org/licenses/gpl-3.0.en.html"
        }
        if (license === "Apache License") {
            return "https://www.apache.org/licenses/LICENSE-2.0"
        if (license==="none") 
                return ""
        }
}

// renderLicenseLink();

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === "MIT License") {
        return `Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:
        
        The above copyright notice and this permission notice shall be included in all
        copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
        SOFTWARE.`
    }
    if (license === "GPL License") {
        return `Everyone is permitted to copy and distribute verbatim copies
        of this license document, but changing it is not allowed.`
    }
    if (license === "Apache License") {
        return `Licensed under the Apache License, Version 2.0 (the "License");
        you may not use this file except in compliance with the License.
        You may obtain a copy of the License at (Link Above)
        
        Unless required by applicable law or agreed to in writing, software
        distributed under the License is distributed on an "AS IS" BASIS,
        WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        See the License for the specific language governing permissions and
        limitations under the License.`
    if (license==="none") {
            return ""
    }
}
}

// renderLicenseSection();

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.repository}

${renderLicenseSection(answers.licenseType)}

## Table of Contents
- [Description](#description)
- [Usage](#usage)
- [Test](#test)
- [Contribution](#contribution)
- [Instillation](#install)

## Description
${answers.description}

## How To Install
${answers.install}

## How To Use
${answers.usage}

## How To Contribute
${answers.contribution}

## How To Test
${answers.test}

## License
${answers.licenseType}

${renderLicenseBadge(answers.licenseType)}

${renderLicenseLink(answers.licenseType)}

## Contact Me
${answers.email}

## GitHub Profile
${answers.username}

`;
}


module.exports = generateMarkdown;



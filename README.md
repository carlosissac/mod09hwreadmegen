# MOD09 - NODE JS - README Generator
![GitHub last commit](https://img.shields.io/github/last-commit/carlosissac/mod09hwreadmegen) ![Twitter Follow](https://img.shields.io/twitter/follow/zzzakk_cccrlss?style=social) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/carlosissac/mod09hwreadmegen) ![GitHub followers](https://img.shields.io/github/followers/carlosissac?style=social) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md) 
## Description
Target is creating a command line application that dynamically generates a professional README.md from a user's input using Inquirer NPM package, also using a privided documentation as a guideline as to what content does a quality document should have.
## Snapshot
![image](./assets/console.jpg)
## User Story 
```
AS A developer
I WANT a README generator
SO THAT can quickly create a professional README for a new project
```
## Acceptance Crietria

* GIVEN a command-line application that accepts user input,
* WHEN I am prompted for information about my application repository, THEN a quality, professional README.md is generated with the title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions.
- All of these field are required to be filled by the user.

* WHEN I enter my project title
THEN this is displayed as the title of the README
- Done. 

* WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions, THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests.
- Done.

* WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under


* WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile


* WHEN I enter my email address, THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions.


* WHEN I click on the links in the Table of Contents, THEN I am taken to the corresponding section of the README
- Done 
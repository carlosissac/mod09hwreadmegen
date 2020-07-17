# MOD09 - NODE JS - README Generator
![GitHub last commit](https://img.shields.io/github/last-commit/carlosissac/mod09hwreadmegen) ![Twitter Follow](https://img.shields.io/twitter/follow/zzzakk_cccrlss?style=social) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/carlosissac/mod09hwreadmegen) ![GitHub followers](https://img.shields.io/github/followers/carlosissac?style=social) ![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg) 
## Description
Target is creating a command line application that dynamically generates a professional README.md from a user's input using Inquirer NPM package, also using a privided documentation as a guideline as to what content does a quality document should have.
## Snapshot
![image](./assets/console.jpg)
## Table Of Contents
* [Description](#Description)
* [User Story](#User-Story)
* [Acceptance Criteria Checklist](#Acceptance-Criteria-Checklist)
    * [Initial Requirements](#Initial-Requierements)
    * [Minimun Application Requirements Review](#Minimun-Application-Requirements-Review)
    * [Submission Requierements Checklist](#Submission-Requierements-Checklist)
* [Usage](#Usage)
* [Installation](#Installation)
* [Tests](#Tests)
* [Credits](#Credits)
* [Contributing](#Contributing)
## User Story 
AS A developer
I WANT a README generator
SO THAT can quickly create a professional README for a new project
## Acceptance Crietria Checklist
### Initial Requirements
* GIVEN a command-line application that accepts user input,
* WHEN I am prompted for information about my application repository, THEN a quality, professional README.md is generated with the title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions.
    - All of these field are required to be filled by the user. Issac
* WHEN I enter my project title
THEN this is displayed as the title of the README
    - Done. Issac.
* WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions, THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests.
    - Done. Issac.
* WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under  
    - Done. Issac.
* WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
    - Done. Issac.
* WHEN I enter my email address, THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions.
    - Done. Issac.
* WHEN I click on the links in the Table of Contents, THEN I am taken to the corresponding section of the README
    - Done.
### Minimun Application Requirements Review
* Meets [Submission Requirements](#submission-requirements) in the following section.
- Done
* Functional application.
- All functionality required is provided.
* GitHub repository with a unique name and a README describing project.
- GitHub Repo > https://github.com/carlosissac/mod09hwreadmegen
- Project Readme > https://github.com/carlosissac/mod09hwreadmegen/blob/master/README.md
* The generated README includes the following sections: 
  * Title
  * Description
  * Table of Contents
  * Installation
  * Usage
  * License
  * Contributing
  * Tests
  * Questions
- Done.
* The generated README includes 1 badge that's specific to the repository.
- Includes 2 Badges 1) Last Commit and 2) Code Size. Done.
### Submission Requierements Checklist 
* Because this is a CLI App, there will be no need to deploy it to Heroku. This time, though, you need to include a video showing us that you got the app working with no bugs. You should include a link to the video in your application's `README.md` file.
- Link is provided below. Done.
* Create a `.gitignore` file and include `node_modules/` and `.DS_Store/`.
- https://github.com/carlosissac/mod09hwreadmegen/blob/master/.gitignore. Done.
* `node_modules` is not tracked and uploaded to GitHub. (Hint: It is easy if you create your `.gitignore` file before installing dependencies with npm.)
- node_modules folder is not being tracked in our repo. Done.
* Repo **MUST** include `package.json` with required dependencies. (Hint: Run `npm init` when you first setup the project before installing any dependencies.)
- https://github.com/carlosissac/mod09hwreadmegen/blob/master/package.json. Done
* Include a video of the typical user flow through your application. This includes views of the prompts and the responses after their selection.
- Link will be provided in thenext section. Done.
* Include any other screenshots you deem necessary to help someone who has never been introduced to your application understand the purpose and function of it. This is how you will communicate to potential employers/other developers in the future what you built and why, and to show how it works.
- Application Usage section will be provided in this ReadMe. Done
* Because screenshots (and well-written READMEs) are extremely important in the context of GitHub, this will be part of the grading.
- All usage details will be provided in this ReadMe file. Done.
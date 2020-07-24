var inquirer = require("inquirer");
var fs = require("fs");
var generateMarkdown = require("./utils/generateMarkdown.js");




// array of questions for user
function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "title",
        message: "Please enter a title for your ReadMe!"
      },
      {
        type: "input",
        name: "description",
        message: "Enter a description for the ReadMe."
      },
      {
        type: "input",
        name: "installation",
        message: "Please give a detailed instruction for the installation of the application."
      },
      {
        type: "input",
        name: "usage",
        message: "Enter any usage detail for the project. "
      },
      {
        type: "input",
        name: "contribution",
        message: "Who is allowed to make contribution to the project?"
      },
      {
        type: "input",
        name: "Test",
        message: "Enter test instructions for this project."
      },
      {
        type: "input",
        name: "github",
        message: "Enter your GitHub Username."
      },
      {
          type: "input",
          name: "email",
          message:"Please enter your email address."

      },
      {
        type: "list",
        name: "license",
        message: "Select a license you would like to use.",
        choices: ["PDDL", "GNU AGPLv3", "GNU LGPLv3", "MPL 2.0","MIT", "Apache 2.0",  "Boost 1.0"]
      },
      {
      type: "input",
      name: "questions",
      message: "Please enter any questions and queries you might have.",
      },
    ]);
  }
  

promptUser()
.then(function(response) {
    console.log(response);
    fs.writeFile("MyReadMe.md",generateMarkdown(response),function(error){
        if (error) {
            return console.log(error);
        }
    })
});


// function call to initialize program
//init();




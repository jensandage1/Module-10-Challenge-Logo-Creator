const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");
const generateLogo = require("./generatelogo");
const validateColor = require("validate-color").default;



const question = [
    {
        type: "input",
        name: "characters",
        message: "Input 3 characters you would like to use for your logo.",
        validate: (characters) => {
            if(characters.length !== 3) {
                return 'Invalid. You must input exactly 3 characters.'
            }

            return true;
        }
            
    },
    {
        type: "input",
        name: "textColor",
        message: "Input the color name or Hexidecimal # of the color you would like your text to be.",
        validate: validateColor
    },
    {
        type: "list",
        name: "shape",
        message: "Choose your shape.",
        choices: [
            "Circle",
            "Triangle",
            "Square"
        ]
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Input the color name or the Hexidecimal # of the color you would like your shape to be.",
        validate: validateColor
    }
]




const createSvg = (answers) => {
    const svgTemplate = generateLogo(answers);

    fs.writeFile("Logo.svg", svgTemplate, (err) => {
        err ? console.err(err) : console.log("logo.svg created.")
    })
}

function init(){
    inquirer
    .prompt(question)
.then((answers) => {
    createSvg(answers)
})
}

init();


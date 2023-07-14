const MyShape = require("./shapes.js");

function generateLogo ({characters, textColor, shape, shapeColor}){
    

    function createShape(shapeColor) {
       
        if(shape === "Circle"){
            return `<${MyShape.circle.shape} stroke="none" fill="${shapeColor}" stroke-width="5"/>`
        } else if (shape === "Square"){
            return `<${MyShape.square.shape} stroke="none" fill="${shapeColor}" stroke-width="5"/>`
        } else {
            return `<${MyShape.triangle.shape} stroke="none" fill="${shapeColor}" stroke-width="5"/>`
        }
    } 
     
    
    const finishedShape = createShape(shapeColor);

    const svg = 
    `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
     ${finishedShape}  
      <text text-anchor="middle" x="150" y="125" font-size="40" fill="${textColor}">${characters}</text>       
    </svg>
    `
    
    return svg;
}

module.exports = generateLogo;



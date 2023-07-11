function generateLogo ({characters, textColor, shape, shapeColor}){
    
    function createShape(shape, shapeColor){
        const userInput = "";
        if(userInput === "circle") {
            return shape = `<circle cx="150" cy="100" r="80" stroke="black" fill="${shapeColor}" stroke-width="5"/>`
        } else if (userInput === "square") {
            return shape = `<rect x="90" y="40" width="120" height="120" stroke="black" fill="${shapeColor}" stroke-width="5"/>`    
        } else {
            return shape = `<polygon points="150, 18 244, 182 56, 182" stroke="black" fill="${shapeColor}" stroke-width="5"/>`
         }
        };

       const finishedShape= createShape(shape,shapeColor);


    const svg = 
`<?xml version="1.0" encoding="UTF-8"?>
<svg width="300" height="200">
      <characters fill="${textColor}">${characters}</characters>
        <shape>${finishedShape}</shape>        
</svg>
    `

    return svg;
}

module.exports = generateLogo;

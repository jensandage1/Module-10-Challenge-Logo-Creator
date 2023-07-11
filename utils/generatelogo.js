function generateLogo ({characters, textColor, shape, shapeColor}){
    
    function createShape(shape, shapeColor){
        const userInput = "";
        if(userInput === "circle") {
            return shape = `<circle cx="25" cy="75" r="20" stroke="black" fill="${shapeColor}" stroke-width="5"/>`
        } else if (userInput === "square") {
            return shape = `<rect x="10" y="10" width="30" height="30" stroke="black" fill="${shapeColor}" stroke-width="5"/>`    
        } else {
            return shape = `<polygon points="12 2, 22 22, 2 22" stroke="black" fill="${shapeColor}" stroke-width="5"/>`
         }
        };

       const finishedShape= createShape(shape,shapeColor);


    const svg = 
`<?xml version="1.0" encoding="UTF-8"?>
<svg width="300" height="200">
      <characters x="10" y = "10" fill="${textColor}">${characters}</characters>
        <shape>${finishedShape}</shape>

         
</svg>
    `

    return svg;
}

module.exports = generateLogo;

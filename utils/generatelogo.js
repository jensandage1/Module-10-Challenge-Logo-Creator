function generateLogo ({characters, textColor, shape, shapeColor}){
    
    function createShape(shape, shapeColor){
        const userInput = "";
        if(userInput === "Circle") {
            return shape = `<circle cx="150" cy="100" r="80" stroke="none" fill="${shapeColor}" stroke-width="5"/>`;
        } else if (userInput === "Square") {
            return shape = `<rect x="90" y="40" width="120" height="120" stroke="none" fill="${shapeColor}" stroke-width="5"/>`;    
        } else {
            return shape = `<polygon points="150, 18 244, 182 56, 182" stroke="none" fill="${shapeColor}" stroke-width="5"/>`;
         }
        };

       let finishedShape = createShape(shape,shapeColor);

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

//finished shape not populating with anything but the triangle option
//This XML file does not appear to have any style information associated with it. The document tree is shown below. 
//above is error getting when opening the svg
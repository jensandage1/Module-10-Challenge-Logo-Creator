function generateLogo ({characters, textColor, shape, shapeColor}){
    
    function MyShape(shape) {
        this.shape=shape;
    }
    const circle = new MyShape('circle cx="150" cy="100" r="80"');
    const square = new MyShape('rect x="90" y="40" width="120" height="120"');
    const triangle = new MyShape('polygon points="150, 18 244, 182 56, 182"');
    

    function createShape(shapeColor) {
       
        if(shape === "Circle"){
            return `<${circle.shape} stroke="none" fill="${shapeColor}" stroke-width="5"/>`
        } else if (shape === "Square"){
            return `<${square.shape} stroke="none" fill="${shapeColor}" stroke-width="5"/>`
        } else {
            return `<${triangle.shape} stroke="none" fill="${shapeColor}" stroke-width="5"/>`
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



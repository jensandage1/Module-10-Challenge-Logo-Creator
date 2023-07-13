function MyShape(shape) {
    this.shape=shape;
}
const circle = new MyShape('circle cx="150" cy="100" r="80"');

const square = new MyShape('rect x="90" y="40" width="120" height="120"');

const triangle = new MyShape('polygon points="150, 18 244, 182 56, 182"');



const userInput = "";
function createShape(shape, shapeColor) {
    if(userInput === "Circle"){
        return shape = `<${circle} stroke="none" fill="${shapeColor}" stroke-width="5"/>`
    } else if (userInput === "Square"){
        return shape = `<${square} stroke="none" fill="${shapeColor}" stroke-width="5"/>`
    } else {
        return shape =  `<${triangle} stroke="none" fill="${shapeColor}" stroke-width="5"/>`
    }
}

const finishedShape = createShape(shape,shapeColor);

const svg = 
`
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
 ${finishedShape}  
  <text text-anchor="middle" x="150" y="125" font-size="40" fill="${textColor}">${characters}</text>       
</svg>
`

return svg;

class Circle {
    constructor(shape) {
        this.shape = shape;
    }
}

class Square {
    constructor(shape) {
        this.shape = shape;
    }
}
class Triangle {
    constructor(shape) {
        this.shape = shape;
    }
}

const circle = new Circle ('circle cx="150" cy="100" r="80"');
const square = new Square('rect x="90" y="40" width="120" height="120"');
const triangle = new Triangle('polygon points="150, 18 244, 182 56, 182"');

module.exports = {
    circle, square,triangle
};
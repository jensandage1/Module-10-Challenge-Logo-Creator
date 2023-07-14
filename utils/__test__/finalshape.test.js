const MyShape = require('../generatelogo.js');

describe("MyShape", ()=>{
    describe("circle",() =>{
        it("Should return value for a circle",()=>{
            const circle = 'circle cx="150" cy="100" r="80"'
            const myShape = new MyShape;
            const result = myShape.circle('circle cx="150" cy="100" r="80"');
            expect(result).toEqual(circle);
        })
    })
})

describe("MyShape", ()=>{
    describe("square",() =>{
        it("Should return value for a square",()=>{
            const circle = 'rect x="90" y="40" width="120" height="120"'
            const myShape = new MyShape;
            const result = myShape.circle('rect x="90" y="40" width="120" height="120"');
            expect(result).toEqual(circle);
        })
    })
})

describe("MyShape", ()=>{
    describe("triangle",() =>{
        it("Should return value for a triangle",()=>{
            const circle = 'polygon points="150, 18 244, 182 56, 182"'
            const myShape = new MyShape;
            const result = myShape.circle('polygon points="150, 18 244, 182 56, 182"');
            expect(result).toEqual(circle);
        })
    })
})
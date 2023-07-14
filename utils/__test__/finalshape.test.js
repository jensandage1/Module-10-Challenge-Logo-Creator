const myShapes = require("../shapes");


describe("shapes", ()=>{
    describe("circle",() =>{
        it("Should return correct value for a circle",()=>{
            const circleFormula = 'circle cx="150" cy="100" r="80"';
            const result = myShapes.circle.shape;
            expect(result).toEqual(circleFormula);
        })
    })
})

describe("shapes", ()=>{
    describe("square",() =>{
        it("Should return correct value for a square",()=>{
            const squareFormula = 'rect x="90" y="40" width="120" height="120"';
            const result = myShapes.square.shape;
            expect(result).toEqual(squareFormula);
        })
    })
})

describe("shapes", ()=>{
    describe("triangel",() =>{
        it("Should return correct value for a triangle",()=>{
            const triangleFormula = 'polygon points="150, 18 244, 182 56, 182"';
            const result = myShapes.triangle.shape;
            expect(result).toEqual(triangleFormula);
        })
    })
})

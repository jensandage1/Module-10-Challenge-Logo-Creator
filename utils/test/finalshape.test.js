const FinalShape = require('../index');

describe('FinalShape', () => {
    describe ('circle', () => {
        it('should return the value of a circle and input the users choice of color', ()=> {
            const circleFinal = `<circle cx="150" cy="100" r="80" stroke="none" fill="${shapeColor}" stroke-width="5"/>`
            const finalShape = new FinalShape();
            expect(finalshape.circle('circle cx="150" cy="100" r="80"', "")).toEqual(circleFinal)
        });
    });
});
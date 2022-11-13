const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;

// Suits = ACE, DIAMOND, SPADE, HEART

describe('Suits', () => {
    describe('#array', () => {
        it('should contain four values', (done) => {
            /* Arrange */

            /* Act / Invoke */

            /* Assert */
            expect(Suits.length).to.equal(4);
            done();
        });


        it('should contain Spades', (done) => {
            /* Arrange */
            let expectedSuit = 'Spades';
            /* Act / Invoke */

            /* Assert */
            expect(Suits).to.contain(expectedSuit);
            done();
        });

        it('should contain Hearts', (done) => {
            /* Arrange */
            let expectedSuit = 'Hearts';
            /* Act / Invoke */

            /* Assert */
            expect(Suits).to.contain(expectedSuit);
            done();
        });

        it('should contain Spades', (done) => {
            /* Arrange */
            let expectedSuit = 'Spades';
            /* Act / Invoke */

            /* Assert */
            expect(Suits).to.contain(expectedSuit);
            done();
        });

        it('should contain Diamonds', (done) => {
            /* Arrange */
            let expectedSuit = 'Diamonds';
            /* Act / Invoke */

            /* Assert */
            expect(Suits).to.contain(expectedSuit);
            done();
        });
    });
});

const Suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs']; 
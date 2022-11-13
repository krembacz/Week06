const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;


describe('CreateDeck', () => {
    describe("#constructor", function () {
        it("with empty constructor it will create 52 cards in one deck", (done) => {
            /* Arrange */
            let testDeck = new Deck();
            /* Act / Invoke */
            console.log(testDeck.deck);
            /* Assert */
            expect(testDeck.deck.length).to.equal(52);
            done();
        });
    });
});

describe('cryptosquare', function() {
    it('capital letters are converted to lowercase letters', function() {
        expect(cryptosquare("R")).to.eql([['r']]);
    });

    it('a single-word message returns an array of multiple letters', function() {
        expect(cryptosquare("hello")).to.eql([['h', 'e', 'l', 'l', 'o']]);
    });

    // it('any words with punctuation have the punctuation removed', function() {
    //     expect(cryptosquare("don't")).to.eql([['d', 'o', 'n', 't']])
    // });

    it('multiple words are split based on the spaces', function() {
        expect(cryptosquare("R R")).to.eql([['r'], ['r']]);
    });



});

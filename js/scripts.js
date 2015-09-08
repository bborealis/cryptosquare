var cryptosquare = function(message) {
    var lowercase_message = message.toLowerCase();
    var words = lowercase_message.split(' ');

    var letters = [];
    words.forEach(function(word){
        var characters = word.split('');
        letters.push(characters);
    });

    return letters;
}


//explode message

//count letters in message
    //var.length; = #
//determine square size
    //square root of var.length = # of columns
//arrange letters into square
    //example: message = cowsphones
    //cowsphones.length = 10;
    //square root of 10 = 3.16, so we will move through the array in sections of 3;
    //remainder letters are tacked on to the bottom
        // c o w
        // s p h
        // o n e
        // s
    //array = [c, o, w, s, p, h, o, n, e, s]
    //print = array[0] + array[3] + array[6] + array[9];
    //          c           s           o       s
    //print = array[1] + array[4] + array[7];
    //          o           p           n
    //print = array[2] + array[5] + array[8];
    //          w           h           e
//return coded message
    //coded_message = csos opn whe

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
//determine square size
//arrange letters into square
//read down the square from left to right to get coded message
//organize coded message
//return coded message

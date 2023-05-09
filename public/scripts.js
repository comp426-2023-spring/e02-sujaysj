// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver
const endpoint = "app/";
const url = document.baseURI+endpoint;

// utility function
function clearRadio(name) {
    var radio = document.getElementsByName(name);
    for (var i = 0; i < radio.length; i++) {
        radio[i].checked = false;
    }
}

var opponent;
var game;

var output_types = document.getElementsByName('outputtype');
for (let i = 0; i < output_types.length; i++) {
    output_types[i].addEventListener("change", function(event) {
        opponent = event.target.value;
        document.getElementById('Game Selection').style.display = 'block';
    })
}

var gameselect = document.getElementsByName('gameselect');
for (let i = 0; i < gameselect.length; i++) {
    gameselect[i].addEventListener("change", function(event) {
        game = event.target.value;
        if (game = 'rps' && ) {
            
        }
        if (game = 'rpsls') {

        }
    })
}


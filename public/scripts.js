// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

// utility function
function clearRadio(name) {
    var radio = document.getElementsByName(name);
    for (var i = 0; i < radio.length; i++) {
        radio[i].checked = false;
    }
}

var opponent;
var game;

// chooses what elements to display based on opponent selection
var output_types = document.getElementsByName('outputtype');
for (let i = 0; i < output_types.length; i++) {
    output_types[i].addEventListener("change", function(event) {
        opponent = event.target.value;
        document.getElementById('Game_Selection').style.display = 'block';

        if (opponent == 'random') {
            clearRadio('throws');
            document.getElementById('Throw_Selection').style.display = 'none';
        }
        if (opponent == 'opponent') {
            document.getElementById('Throw_Selection').style.display = 'block';
        }
    })
}

// chooses what throws to display based on game selection
var gameselect = document.getElementsByName('gameselect');
for (let j = 0; j < gameselect.length; j++) {
    gameselect[j].addEventListener("change", function(event) {
        game = event.target.value;
        if (game == 'rps') {
            document.getElementById('lizard').style.display = 'none';
            document.getElementById('spock').style.display = 'none';
        }
        if (game == 'rpsls') {
            document.getElementById('lizard').style.display = 'block';
            document.getElementById('spock').style.display = 'block';
        }
    })
}


document.getElementById('submit').addEventListener('change', submitrps)

async function submitrps(event) {
    const endpoint = "app/";
    const url = document.baseURI+endpoint;

    if (opponent = 'random')

}
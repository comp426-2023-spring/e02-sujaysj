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

document.addEventListener('DOMContentLoaded', function () {
    var opponent;
    var game;

    // chooses what elements to display based on opponent selection
    var output_types = document.getElementsByName('outputtype');
    for (let i = 0; i < output_types.length; i++) {
        output_types[i].addEventListener("change", function(event) {
            opponent = event.target.value;
            document.getElementById('Game_Selection').style.display = 'block';
            clearRadio('throws');
            clearRadio('gameselect');

            if (opponent == 'random') {
                document.getElementById('Throw_Selection').style.display = 'none';
                document.getElementById('Submit_Selection').style.display = 'block';
            }
            if (opponent == 'opponent') {
                document.getElementById('Throw_Selection').style.display = 'block';
                document.getElementById('Submit_Selection').style.display = 'none';
            }
        })
    }

    // chooses what throws to display based on game selection
    var gameselect = document.getElementsByName('gameselect');
    for (let j = 0; j < gameselect.length; j++) {
        gameselect[j].addEventListener("change", function(event) {
            game = event.target.value;
            clearRadio('throws');

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

    var shot;

    var throwselect = document.getElementsByName('throws');
    for (let k = 0; k < gameselect.length; k++) {
        gameselect[j].addEventListener("change", function(event) {
            shot = event.target.value;
            document.getElementById('Submit_Selection').style.display = 'block';
        })
    }

    document.getElementById('submit').addEventListener('change', submitgame)

    async function submitgame(event) {
        const endpoint = "app/";
        const url = document.baseURI + endpoint + game + '/';

        if (opponent == 'opponent') {
            url = url + 'play/' + shot + '/';
        }
        const response = await fetch(url);
        const data = await response.json();

        if (opponent == 'random') {
            document.getElementById('Random_Results').style.display = 'block';
            document.getElementById('random').innerHTML += data.player;
        }
        if (opponent == 'opponent') {
            document.getElementById('Game_Results').style.display = 'block';
            document.getElementById('player').innerHTML += data.player;
            document.getElementById('opponent').innerHTML += data.opponent;
            document.getElementById('result').innerHTML += data.result;
        }
    }

    document.getElementById('reset').addEventListener('change', resetgame)

    function resetgame(event) {
        window.location.reload();
    }
});
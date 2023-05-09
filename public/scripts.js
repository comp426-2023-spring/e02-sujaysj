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

addEventListener("DOMContentLoaded", (event) => {
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
            
            document.getElementById('lizard').style.display = 'none';
            document.getElementById('spock').style.display = 'none';
            document.getElementById('lizardlabel').style.display = 'none';
            document.getElementById('spocklabel').style.display = 'none';

            if (opponent == 'random') {
                document.getElementById('Throw_Selection').style.display = 'none';
                document.getElementById('Submit_Selection').style.display = 'none';
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
            document.getElementById('Submit_Selection').style.display = 'none';

            document.getElementById('lizard').style.display = 'none';
            document.getElementById('spock').style.display = 'none';
            document.getElementById('lizardlabel').style.display = 'none';
            document.getElementById('spocklabel').style.display = 'none';

            if (opponent == 'random') {
                document.getElementById('Submit_Selection').style.display = 'block';
            }

            if (game == 'rps') {
                document.getElementById('lizard').style.display = 'none';
                document.getElementById('spock').style.display = 'none';
                document.getElementById('lizardlabel').style.display = 'none';
                document.getElementById('spocklabel').style.display = 'none';
            }
            if (game == 'rpsls') {
                document.getElementById('lizard').style.display = 'inline';
                document.getElementById('spock').style.display = 'inline';
                document.getElementById('lizardlabel').style.display = 'inline';
                document.getElementById('spocklabel').style.display = 'inline';
            }
        })
    }

    var shot;

    var throwselect = document.getElementsByName('throws');
    for (let k = 0; k < throwselect.length; k++) {
        throwselect[k].addEventListener("change", function(event) {
            shot = event.target.value;
            document.getElementById('Submit_Selection').style.display = 'block';
        })
    }

    document.getElementById('submit').addEventListener('click', submitgame)

    function showRandom(data) {
        document.getElementById('randomresult').innerHTML += data.player;
        document.getElementById('Random_Results').style.display = 'block';
    }

    function showGame(data) {
        console.log(data);
        document.getElementById('playerresult').innerHTML += data.player;
        document.getElementById('opponentresult').innerHTML += data.opponent;
        document.getElementById('totalresult').innerHTML += data.result;
        document.getElementById('Game_Results').style.display = 'block';
    }

    async function submitgame(event) {
        const endpoint = "app/";
        var url = document.baseURI + endpoint + game + '/';

        if (opponent == 'opponent') {
            url = url + 'play/' + shot + '/';
        }
        const response = await fetch(url);
        const data = await response.json();

        if (opponent == 'random') {
            showRandom(data);
        }
        if (opponent == 'opponent') {
            showGame(data);
        }
    }

    document.getElementById('reset').addEventListener('click', resetgame)

    function resetgame(event) {
        window.location.reload();
    }
});
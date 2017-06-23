$(document).ready(function() {

    Pokemon = ['assets/images/eevee.jpg', 'assets/images/jolteon.png', 'assets/images/flareon.jpg', 'assets/images/vaporeon.jpg'];

    var counter = 0;
    var wins = 0;
    var losses = 0;
    $('#win').text(wins);
    $('#loss').text(losses);

    newPokemon();
    newGame();

    function newPokemon() {
        var numbers = []
        while (numbers.length < 4) {
            var randomnumber = Math.ceil(Math.random() * 12)
            var found = false;
            for (var i = 0; i < numbers.length; i++) {
                if (numbers[i] == randomnumber) {
                    found = true;
                    break
                }
            }
            if (!found) numbers[numbers.length] = randomnumber;
        }
        console.log(numbers);

        for (i = 0; i < numbers.length; i++) {
            var imagePokemon = $('<img>');
            imagePokemon.attr('data-num', numbers[i]);
            imagePokemon.attr('src', Pokemon[i]);
            imagePokemon.attr('alt', 'Pokemon');
            imagePokemon.addClass('PokemonImage')
            $('#Pokemon').append(imagePokemon);
        }
    }

    function newGame() {

        counter = 0;
        $('#yourScore').text(counter);

        function randomIntFromInterval(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        var numberToGuess = randomIntFromInterval(19, 120);

        $('.value').text(numberToGuess);


        $('.PokemonImage').on('click', function() {
            counter = counter + parseInt($(this).data('num'));

            $('#yourScore').text(counter);

            if (counter == numberToGuess) {
                $('#status').text('You are ready to become a Pokemon Master!');
                wins++;
                $('#win').text(wins);
                console.log(wins)
                $('#Pokemon').empty();
                newPokemon();
                newGame();

            } else if (counter > numberToGuess) {
                $('#status').text('You are not ready to become a Pokemon Master!')
                losses++;
                $('#loss').text(losses);
                console.log(losses)
                $('#Pokemon').empty();
                newPokemon();
                newGame();
            }
        });
    }

});

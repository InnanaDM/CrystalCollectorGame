$(document).ready(function () {
    // *Above Line(AL) calls html page to act, one big function, everything you want to be dynamic will happen in this function

    // linking crystal imgs to variable crystals, variable crystals now holds the imgs as values 
    crystals = [
        'blue copy.png', 'pink copy.png', 'red copy.png', 'yellow copy.png'
    ];
    // this sets variables **userScore/counter**, win, lose with starting values of 0
    var userScore = 0;
    var winAmm = 0;
    var lossAmm = 0;

    // jquery calls/links html id's #userScore #winAmm #lossAmm to var above, lavendar is html blue is js variable
    $("#wins").text(winAmm);
    $("#losses").text(lossAmm);

    newCrystals();
    newGame();

    newCrystals = function () {
        var numbers = []
        while (numbers.length < 4) {
            var randNum = Math.ceil(Math.random() * 15)

            var match = false;
            for (var i = 0; i < numbers.length; i++) {
                if (numbers[i] == randNum) {
                    match = true; break
                }
            }
            if (!match) numbers[numbers.length] = randNum;
        }

        for (var i = 0; i < numbers.length; i++) {
            var crystalImg = $("<img>");
            crystalImg.attr("data-num", numbers[i]);
            crystalImg.attr("src", crystals[i]);
            // crystalImg.attr("alt", "crystals");
            crystalImg.addClass("imgCrystal")
            $("#crystals").append(crystalImg);
        }
    }

    newGame = function () {
        userScore = 0;
        $("#userStartScore").text(userScore);

        function randomIntFromInterval(min, max) {
            return Math.floor(Math.random() * (max - min) + 1);
        }

        var guessRandNum = randomIntFromInterval(19, 120);

        $(".numVal").text(guessRandNum);

        $(".imgCrystal").on("click", function () {
            userScore = userScore + parseInt($(this).data('num'));

            $("#userStartScore").text(userScore);

            if (userScore == guessRandNum) {

                $("#userScores").text("You matched!");
                winAmm++;

                $("#wins").text(winAmm);
                console.log(winAmm);

                $("#crystals").empty();

                newCrystals();
                newGame();

            } else if (userScore > guessRandNum) {

                $("#userScores").text("You did not match. Try Again!");
                lossAmm++;

                $("#losses").text(lossAmm);
                console.log(lossAmm)
                $("#crystals").empty();
                newCrystals();
                newGame();
            }
        });


    }
});
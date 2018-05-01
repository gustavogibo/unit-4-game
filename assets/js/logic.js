function toggleDiv(statement, divName) {

    var element = document.getElementById(divName);

    if(statement != 0) {

        element.classList.remove("d-none");

    } else {

        element.classList.add("d-none");

    }
    
}

function changeDivContent(divName, content) {

    var element = document.getElementById(divName);

    element.textContent = content;

}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomNumber(target, max) {

    var result = 0;

    if(target == 1) {

        return Math.floor(Math.random() * Math.floor(19)) + Math.floor(Math.random() * Math.floor(19));

    } else {

        return Math.floor(Math.random() * Math.floor(max));

    }

    return result;

}

function removeIndex(array, element) {
    const index = array.indexOf(element);
    // console.log(index);
    array.splice(index, 1);
}

$(document).ready(function() {

    var game = {
        wins: 0,
        losses: 0,
        randomNumber: 0,
        numberSoFar: 0,
        resetGame: function() {
            
            this.randomNumber = getRandomInt(19,120);
            this.randomNumber = parseInt(this.randomNumber);
            $("#number-board").html(this.randomNumber);

            this.numberSoFar = 0;
            $("#number-user").html(this.numberSoFar);

            this.generateNewValues();
        },
        compareGoal: function() {


            if(this.numberSoFar == this.randomNumber) {

                return 1;

            } else if(this.numberSoFar < this.randomNumber){

                return 2;

            } else {

                return 3;

            }
            
        },
        generateNewValues: function() {

            var arrImages = ["assets/img/bandana-dee.png", "assets/img/kind-dedede.png", "assets/img/kirby.png", "assets/img/meta-knight.png"];
            var iterator = 3;

            for (let count = 3; count >= 0; count--) {
                var r = getRandomInt(0,iterator);
                var valueOne = "#img-"+count;
                $(valueOne).attr("src", arrImages[r]);
                // console.log(arrImages);
                removeIndex(arrImages, arrImages[r]);
                iterator--;
                
            }

            $(".img-score").each(function(i, obj) {

                $(this).attr("value", getRandomInt(1, 12));

                
                
            });

            var valueOne = "#img-"+getRandomInt(0,3);

            $(valueOne).attr("value", 1);

            //generating random srcs to the img tags
            


        }


    }

    game.resetGame();

    $(".img-score").on("click", function() {

        var value = $(this).attr("value");

        value = parseInt(value);

        game.numberSoFar = parseInt(game.numberSoFar);

        game.numberSoFar = game.numberSoFar + value;
        $("#number-user").empty().append(value);

        if(game.compareGoal() == 1) {

            game.wins++;
            $("#wins").html(game.wins);

            var newGame = confirm("Good Job! Do you want to start a new game?");

            if(newGame == true) {

                game.resetGame();

            } else {

                alert("Alright! See you later!");
                location.reload();

            }

        }else if(game.compareGoal() == 2) {

            $("#number-user").empty().append(game.numberSoFar);
            $(".number-user-box").addClass("bg-primary").addClass("text-white");

        } else {

            game.losses++;
            $("#losses").html(game.losses);

            var newGame = confirm("You lost! Do you want to start a new game?");

            if(newGame == true) {

                game.resetGame();

            } else {

                alert("Alright! See you later!");
                location.reload();

            }

        }







    });



});
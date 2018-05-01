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

function remove(array, element) {
    const index = array.indexOf(element);
    array.splice(index, 1);
}

$(document).ready(function() {

    var game = {
        wins: 0,
        losses: 0,
        randomNumber: 0,
        numberSoFar: 0,
        imagesSrc: ["assets/img/badana-dee.png", "assets/img/kind-dedede.png", "assets/img/kirby.png", "assets/img/meta-knight.png"],
        creaturesValues: [0,0,0,0],
        resetGame: function() {
            
            this.wins = 0;
            this.losses = 0;
            this.randomNumber = getRandomInt(19,120);

            for (let i = 0; i < this.creatureValues.length; i++) {
                this.creaturesValues[i] = getRandomInt(1,12);
            }
        },
        compareGoal: function() {

            if(this.numberSoFar > randomNumber) {

                return 1;

            } else {

                return 0;
            }
            
        },
        generateNewValues: function() {

            var values = [1,2,3,4];

            $(".img-score").each(function(i, obj) {

                $(this).attr("value", getRandomInt(1, 12));
                
            });

        }


    }

    game.generateNewValues();

    $(".img-score").on("click", function() {

        var value = $(this).val();





    });



});
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

function randomNumber(target, max) {

    var result = 0;

    if(target == 1) {

        return Math.floor(Math.random() * Math.floor(max));

    } else {

        return Math.floor(Math.random() * Math.floor(max));

    }

    return result;

}

$(document).ready(function() {

    console.log(randomNumber(1, 13));
    console.log(randomNumber(1, 12));
    console.log(randomNumber(1, 12));
    console.log(randomNumber(1, 12));
    console.log(randomNumber(1, 12));

    var game = {

        randonNumber: 0,
        imagesSrc: ["assets/img/badana-dee.png", "assets/img/kind-dedede", "kirby.png", "meta-knight.png"],
        creaturesValues: [],
        resetGame: function() {


        },
    }



});
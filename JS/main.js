var myText = 'Welcome to KM website',

    i = 0;

window.onload = function () {

    'use strict';

    var typeWriter = setInterval(function () {

        document.getElementById('type').textContent += myText[i]

        i = i + 1

        if (i > myText.length - 1) {

            clearInterval(typeWriter)

        }

    },200)

}
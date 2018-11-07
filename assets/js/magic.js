$('document').ready(function () {

    $('body').on('keydown', function (k) {
        if (k.which == 81) someNoise("#Q", "Heater-1");
        if (k.which == 87) someNoise("#W", "Heater-2");
        if (k.which == 69) someNoise("#E", "Heater-3");

        if (k.which == 65) someNoise("#A", "Chord-1");
        if (k.which == 83) someNoise("#S", "Chord-2");
        if (k.which == 68) someNoise("#D", "Chord-3");

        if (k.which == 90) someNoise("#Z", "punchy_kick_1");
        if (k.which == 88) someNoise("#X", "side_stick_1");
        if (k.which == 67) someNoise("#C", "RP4_KICK_1");
    });

    $("#q-wrap").click(function () {
        someNoise("#Q", "Heater-1");
    });

    $("#w-wrap").click(function () {
        someNoise("#W", "Heater-2");
    });

    $("#e-wrap").click(function () {
        someNoise("#E", "Heater-3");
    });



    $("#a-wrap").click(function () {
        someNoise("#A", "Chord-1")
    });

    $("#s-wrap").click(function () {
        someNoise("#S", "Chord-2");
    });

    $("#d-wrap").click(function () {
        someNoise("#D", "Chord-3");
    });


    $("#z-wrap").click(function () {
        someNoise("#Z", "punchy_kick_1");
    });

    $("#x-wrap").click(function () {
        someNoise("#X", "side_stick_1");
    });

    $("#c-wrap").click(function () {
        someNoise("#C", "RP4_KICK_1");
    });

});


function someNoise(id, bank) {
    $(id)[0].play();
    $("#display").text(bank);
}
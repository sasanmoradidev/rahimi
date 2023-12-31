$(function () {
    var mediaVideo = $("#mine video").get(0);
    $("#mine").on('appear', function () {
        mediaVideo.play();
        if (mediaVideo.paused) {
            mediaVideo.play();
        }
    });

    $("#mine").on('disappear', function () {
        mediaVideo.pause();
    });

    $("#mine").appear();
});
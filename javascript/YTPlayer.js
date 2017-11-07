var player,
    time_update_interval = 0;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('beat-video', {
        width: 60,
        height: 40,
        videoId: 'Xa0Q0J5tOP0',
        playerVars: {
            color: 'white',
            playlist: 'taJ60kskkns,FG0fTKAqZ5g'
        },
        events: {
            onReady: initialize
        }
    });
}

function initialize(){

    // Update the controls on load
    updateTimerDisplay();
    updateProgressBar();

    // Clear any old interval.
    clearInterval(time_update_interval);

    // Start interval to update elapsed time display and
    // the elapsed part of the progress bar every second.
    time_update_interval = setInterval(function () {
        updateTimerDisplay();
        updateProgressBar();
    }, 1000);


    $('#volume-input').val(Math.round(player.getVolume()));
}

$('#beatslider').on('change', function () {
    player.setVolume($(this).val());
});




// var player,
//     time_update_interval = 0;
//
// function onYouTubeIframeAPIReady() {
//     player = new YT.Player('speech-video', {
//         width: 60,
//         height: 40,
//         videoId: 'Xa0Q0J5tOP0',
//         playerVars: {
//             color: 'white',
//             playlist: 'taJ60kskkns,FG0fTKAqZ5g'
//         },
//         events: {
//             onReady: initialize
//         }
//     });
// }
//
// function initialize(){
//
//     // Update the controls on load
//     updateTimerDisplay();
//     updateProgressBar();
//
//     // Clear any old interval.
//     clearInterval(time_update_interval);
//
//     // Start interval to update elapsed time display and
//     // the elapsed part of the progress bar every second.
//     time_update_interval = setInterval(function () {
//         updateTimerDisplay();
//         updateProgressBar();
//     }, 1000);
//
//
//     $('#volume-input').val(Math.round(player.getVolume()));
// }
//
// $('#speechslider').on('change', function () {
//     player.setVolume($(this).val());
// });

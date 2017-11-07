var beat,
    time_update_interval = 0;

var speech,
    time_update_interval = 0;

function onYouTubeIframeAPIReady() {
    beat = new YT.Player('beat-video', {
        width: 60,
        height: 40,
        videoId: 'nT6NWc3J0-o',
        playerVars: {
            color: 'white',
            playlist: 'taJ60kskkns,FG0fTKAqZ5g'
        },
        events: {
            onReady: initialize
        }
    });
    speech = new YT.Player('speech-video', {
        width: 60,
        height: 40,
        videoId: 'Ga8tQrG4ZSw',
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



// Volume Sliders

$('#volume-input').val(Math.round(player.getVolume()));
}

$('#beatslider').on('change', function () {
    beat.setVolume($(this).val());
});

$('#speechslider').on('change', function () {
    speech.setVolume($(this).val());
});



// Play & Pause

$('#playpausebutton').on('click', function () {
    var state = beat.getPlayerState();
    var button = document.getElementById("buttonicon");
    if(state==1){
      beat.pauseVideo();
      speech.pauseVideo();
      button.src = "images/play.png"
    } else {
      beat.playVideo();
      speech.playVideo();
      button.src = "images/pause.png";
    };

});

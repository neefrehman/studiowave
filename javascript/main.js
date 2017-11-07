// YouTube Player Logic

var beatPlayer;
var speechPlayer;
var isPlaying = false;

// MODEL

const beatArray = [
  {
    "title": "Lifted (Chillwave - Retrowave - Synthwave Mix)",
    "url": "3ZdSDUyxFmc",
    "id": "1"
  },
  {
    "title": "24/7 Lofi Hiphop Radio",
    "url": "ezvTXN6vXRM",
    "id": "2"
  },
  {
    "title": "24/7 lofi hip hop radio",
    "url": "6rReMbO42uE",
    "id": "3"
  },
  {
    "title": "Tycho - Dive",
    "url": "Z6ih1aKeETk",
    "id": "4"
  },
  {
    "title": "Turquoise Memories - Glowing Dreams Mix",
    "url": "fQ5cb7A1mjA",
    "id": "5"
  },
  {
    "title": "Future Vision",
    "url": "prHFVUaL_bU",
    "id": "6"
  },
  {
    "title": "Lofi Hip Hop Radio 24/7",
    "url": "AQBh9soLSkI",
    "id": "7"
  },
  {
    "title": "Home - Odyssey",
    "url": "gJOfuGj-n9M",
    "id": "8"
  },
  {
    "title": "Jon Hopkins - Open Eye Signal",
    "url": "Q04ILDXe3QE",
    "id": "9"
  },
  {
    "title": "Vessels - Dilate",
    "url": "nT6NWc3J0-o",
    "id": "10"
  }
];

const speechesArray = [
  {
    "title": "Charlie Chaplin - The Great Dictator Speech",
    "url": "J7GY1Xg6X20",
    "id": "1"
  },
  {
    "title": "T S Eliot reads his Four Quartets",
    "url": "Ga8tQrG4ZSw",
    "id": "2"
  },
  {
    "title": "JFK - The Speech That Killed Him",
    "url": "y8HTr-F-FVM",
    "id": "3"
  },
  {
    "title": "Steve Jobs' 2005 Stanford Commencement Address",
    "url": "UF8uR6Z6KLc",
    "id": "4"
  },
  {
    "title": "scent of a woman",
    "url": "TuYhfCkRxyE",
    "id": "5"
  },
  {
    "title": "Full Metal Jacket Opening",
    "url": "3j3_iPskjxk",
    "id": "6"
  },
  {
    "title": "Pale Blue Dot",
    "url": "-pvxKdvuwIw",
    "id": "7"
  },
  {
    "title": "University of Texas Address - Admiral McRaven",
    "url": "pxBQLFLei70",
    "id": "8"
  },
  {
    "title": "Richard Burton - Under Milk Wood",
    "url": "WJtzOD3KbLM",
    "id": "9"
  },
  {
    "title": "Eleanor Roosevelt Speech Human Rights",
    "url": "sPVWmmVKVk0",
    "id": "10"
  },
  {
    "title": "Winston S Churchill: We Shall Fight on the Beaches",
    "url": "MkTw3_PmKtc",
    "id": "11"
  },
  {
    "title": "Mahatma Gandhi Speech",
    "url": "_SakitCoNYc",
    "id": "12"
  },
  {
    "title": "Leonard Nimoy: College of Fine Arts Convocation Address",
    "url": "A26MnVnL8K4",
    "id": "13"
  },
  {
    "title": "The Lord of the Rings Audiobook Part 1",
    "url": "aazxRl5b7Ms",
    "id": "14"
  },
  {
    "title": "Jim Rohn Learn To Master These Skills",
    "url": "5ZBuWVvQMn8",
    "id": "15"
  },
  {
    "title": "Frost/Nixon: The Watergate Interviews",
    "url": "9OCOn3yKmwQ",
    "id": "16"
  },
  {
    "title": "Steve Jobs - THE MAJOR THINKERS",
    "url": "VnNBbR-JeDQ",
    "id": "17"
  },
  {
    "title": "2004 Barack Obama Keynote Speech",
    "url": "_fMNIofUw2I",
    "id": "18"
  },
  {
    "title": "Earl Nightingale The Dean of Personal Development",
    "url": "Bp8aP6pJB1Y",
    "id": "19"
  },
];

// jQuery

$(document).ready(function(){
  // Initialize a new plugin instance for all
  // e.g. $('input[type="range"]') elements.
  $('input[type="range"]').rangeslider({polyfill: false});

  // Destroy all plugin instances created from the
  // e.g. $('input[type="range"]') elements.
  // $('input[type="range"]').rangeslider('destroy');

  // Update all rangeslider instances for all
  // e.g. $('input[type="range"]') elements.
  // Usefull if you changed some attributes e.g. `min` or `max` etc.
  $('input[type="range"]').rangeslider('update', true);


// YouTube Wrapper Shit

$('#beatslider').on('change', function () {
    beatPlayer.setVolume($(this).val());
});

$('#speechslider').on('change', function () {
    speechPlayer.setVolume($(this).val());
});



// Play & Pause

$('#playpausebutton').on('click', function () {
    var beatPlayerState = beatPlayer.getPlayerState();
    var speechPlayerState = speechPlayer.getPlayerState();
    var button = document.getElementById("buttonicon");

    isPlaying = !isPlaying;

    if (isPlaying == true) {

      button.src = "images/pause.png";

    }
    else {

      button.src = "images/play.png";

    }

    if(beatPlayerState == 1){
      beatPlayer.pauseVideo();
      speechPlayer.pauseVideo();
    } else {
      beatPlayer.playVideo();
      speechPlayer.playVideo();
    };

});

});


// if it is a agent detected mobile hideClass small_screen and show mobile_device

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 // some code..
  $('.mobile_device').css('display', 'block');
  $('.small_screen').css('display', 'none');
}


// Randomise video to be played

function getRandomBeat() {

return beatArray[Math.floor(Math.random() * beatArray.length)];

}

function getRandomSpeech() {

return speechesArray[Math.floor(Math.random() * speechesArray.length)];

}


function onYouTubeIframeAPIReady() {

    // Obtain a speech model -> URL from it

    // Obtain a beat model -> URL from it

    const speechURL = getRandomSpeech().url;
    const beatURL = getRandomBeat().url;

    beatPlayer = new YT.Player('beat-video', {
        width: 60,
        height: 40,
        videoId: beatURL,
        playerVars: {
            color: 'white',
            playlist: 'prHFVUaL_bU,6rReMbO42uE'
        },
        events: {
            onReady: beatInitialized
        }
    });
    speechPlayer = new YT.Player('speech-video', {
        width: 60,
        height: 40,
        videoId: speechURL,
        playerVars: {
            color: 'white',
            playlist: 'A26MnVnL8K4,3j3_iPskjxk'
        },
        events: {
            onReady: speechInitialized
        }
    });
}

function speechInitialized() {

}

function beatInitialized() {

}

// Volume Sliders

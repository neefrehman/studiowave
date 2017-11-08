// YouTube Player Logic

var beatPlayer;
var speechPlayer;
var isPlaying = false;

// MODEL

const beatArray = [
  {
    "title": "Lifted (Chillwave - Retrowave - Synthwave Mix)",
    "id": "3ZdSDUyxFmc",
    "url": "https://www.youtube.com/watch?v=3ZdSDUyxFmc",
    "tag": "1"
  },
  {
    "title": "24/7 Lofi Hiphop Radio",
    "id": "ezvTXN6vXRM",
    "url": "https://www.youtube.com/watch?v=ezvTXN6vXRM",
    "tag": "2"
  },
  {
    "title": "24/7 lofi hip hop radio",
    "id": "6rReMbO42uE",
    "url": "https://www.youtube.com/watch?v=6rReMbO42uE",
    "tag": "3"
  },
  {
    "title": "Tycho - Dive",
    "id": "Z6ih1aKeETk",
    "url": "https://www.youtube.com/watch?v=Z6ih1aKeETk",
    "tag": "4"
  },
  {
    "title": "Turquoise Memories - Glowing Dreams Mix",
    "id": "fQ5cb7A1mjA",
    "url": "https://www.youtube.com/watch?v=fQ5cb7A1mjA",
    "tag": "5"
  },
  {
    "title": "Future Vision",
    "id": "prHFVUaL_bU",
    "url": "https://www.youtube.com/watch?v=prHFVUaL_bU",
    "tag": "6"
  },
  {
    "title": "Lofi Hip Hop Radio 24/7",
    "id": "AQBh9soLSkI",
    "url": "https://www.youtube.com/watch?v=AQBh9soLSkI",
    "tag": "7"
  },
  {
    "title": "Home - Odyssey",
    "id": "gJOfuGj-n9M",
    "url": "https://www.youtube.com/watch?v=gJOfuGj-n9M",
    "tag": "8"
  },
  {
    "title": "Jon Hopkins - Open Eye Signal",
    "id": "Q04ILDXe3QE",
    "url": "https://www.youtube.com/watch?v=Q04ILDXe3QE",
    "tag": "9"
  },
  {
    "title": "Vessels - Dilate",
    "id": "nT6NWc3J0-o",
    "url": "https://www.youtube.com/watch?v=nT6NWc3J0-o",
    "tag": "10"
  }
];

const speechesArray = [
  {
    "title": "Charlie Chaplin - The Great Dictator Speech",
    "id": "J7GY1Xg6X20",
    "url": "https://www.youtube.com/watch?v=J7GY1Xg6X20",
    "tag": "1"
  },
  {
    "title": "T S Eliot reads his Four Quartets",
    "id": "Ga8tQrG4ZSw",
    "url": "https://www.youtube.com/watch?v=Ga8tQrG4ZSw",
    "tag": "2"
  },
  {
    "title": "JFK - The Speech That Killed Him",
    "id": "y8HTr-F-FVM",
    "url": "https://www.youtube.com/watch?v=y8HTr-F-FVM",
    "tag": "3"
  },
  {
    "title": "Steve Jobs' 2005 Stanford Commencement Address",
    "id": "UF8uR6Z6KLc",
    "url": "https://www.youtube.com/watch?v=UF8uR6Z6KLc",
    "tag": "4"
  },
  {
    "title": "scent of a woman",
    "id": "TuYhfCkRxyE",
    "url": "https://www.youtube.com/watch?v=TuYhfCkRxyE",
    "tag": "5"
  },
  {
    "title": "Full Metal Jacket Opening",
    "id": "3j3_iPskjxk",
    "url": "https://www.youtube.com/watch?v=3j3_iPskjxk",
    "tag": "6"
  },
  {
    "title": "Pale Blue Dot",
    "id": "-pvxKdvuwIw",
    "url": "https://www.youtube.com/watch?v=-pvxKdvuwIw",
    "tag": "7"
  },
  {
    "title": "University of Texas Address - Admiral McRaven",
    "id": "pxBQLFLei70",
    "url": "https://www.youtube.com/watch?v=pxBQLFLei70",
    "tag": "8"
  },
  {
    "title": "Richard Burton - Under Milk Wood",
    "id": "WJtzOD3KbLM",
    "url": "https://www.youtube.com/watch?v=WJtzOD3KbLM",
    "tag": "9"
  },
  {
    "title": "Eleanor Roosevelt Speech Human Rights",
    "id": "sPVWmmVKVk0",
    "url": "https://www.youtube.com/watch?v=sPVWmmVKVk0",
    "tag": "10"
  },
  {
    "title": "Winston S Churchill: We Shall Fight on the Beaches",
    "id": "MkTw3_PmKtc",
    "url": "https://www.youtube.com/watch?v=MkTw3_PmKtc",
    "tag": "11"
  },
  {
    "title": "Mahatma Gandhi Speech",
    "id": "_SakitCoNYc",
    "url": "https://www.youtube.com/watch?v=_SakitCoNYc",
    "tag": "12"
  },
  {
    "title": "Leonard Nimoy: College of Fine Arts Convocation Address",
    "id": "A26MnVnL8K4",
    "url": "https://www.youtube.com/watch?v=A26MnVnL8K4",
    "tag": "13"
  },
  {
    "title": "The Lord of the Rings Audiobook Part 1",
    "id": "aazxRl5b7Ms",
    "url": "https://www.youtube.com/watch?v=aazxRl5b7Ms",
    "tag": "14"
  },
  {
    "title": "Jim Rohn Learn To Master These Skills",
    "id": "5ZBuWVvQMn8",
    "url": "https://www.youtube.com/watch?v=5ZBuWVvQMn8",
    "tag": "15"
  },
  {
    "title": "Frost/Nixon: The Watergate Interviews",
    "id": "9OCOn3yKmwQ",
    "url": "https://www.youtube.com/watch?v=9OCOn3yKmwQ",
    "tag": "16"
  },
  {
    "title": "Steve Jobs - THE MAJOR THINKERS",
    "id": "VnNBbR-JeDQ",
    "url": "https://www.youtube.com/watch?v=VnNBbR-JeDQ",
    "tag": "17"
  },
  {
    "title": "2004 Barack Obama Keynote Speech",
    "id": "_fMNIofUw2I",
    "url": "https://www.youtube.com/watch?v=_fMNIofUw2I",
    "tag": "18"
  },
  {
    "title": "Earl Nightingale The Dean of Personal Development",
    "id": "Bp8aP6pJB1Y",
    "url": "https://www.youtube.com/watch?v=Bp8aP6pJB1Y",
    "tag": "19"
  },
];


// RangeSlider

$(document).ready(function(){
  $('input[type="range"]').rangeslider({polyfill: false});
  $('input[type="range"]').rangeslider('update', true);


// YouTube Volume

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


// Next video

$('#beatreset').on('click', function () {
    beatPlayer.nextVideo()
    if (!isPlaying) {
      beatPlayer.pauseVideo();
      speechPlayer.pauseVideo();
    }
});

$('#speechreset').on('click', function () {
    speechPlayer.nextVideo()
    if (!isPlaying) {
      beatPlayer.pauseVideo();
      speechPlayer.pauseVideo();
    }
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


// Generate YouTube Players

function onYouTubeIframeAPIReady() {

    const speechId = getRandomSpeech().id;
    console.log(speechId)
    const beatId = getRandomBeat().id;
    console.log(beatId)

    beatPlayer = new YT.Player('beatvideo', {
        width: 60,
        height: 40,
        videoId: beatId,
        playerVars: {
            color: 'white',
            playlist: 'gJOfuGj-n9M,Z6ih1aKeETk,prHFVUaL_bU,6rReMbO42uE'
        },
        events: {
            onReady: beatInitialized
        }
    });
    speechPlayer = new YT.Player('speechvideo', {
        width: 60,
        height: 40,
        videoId: speechId,
        playerVars: {
            color: 'white',
            playlist: 'sPVWmmVKVk0,Bp8aP6pJB1Y,A26MnVnL8K4,3j3_iPskjxk'
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

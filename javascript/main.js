// YouTube Player Logic

var beatPlayer;
var speechPlayer;
var isPlaying = false;
var speechOrder;
var beatOrder;
var currentSpeechId;
var currentBeatId;
var speechKey;
var beatKey;


// URL jump to shared pair

$.urlParam = function(name) {
  var results = new RegExp('[/?&]' + name + '=([^&#]*)')
                  .exec(window.location.href);
  console.log(name);
  console.log(results);
  return results [1] || 0;
}


// Share Clipboard

$(document).ready(function(){
  new Clipboard('.sharebutton');
  speechKey = $.urlParam('speech');
  beatKey = $.urlParam('beat');
})

function linkBuilder() {
  var link = window.location.pathname + '?beat=' + currentBeatId + '&speech=' + currentSpeechId;
  $('.sharebutton').attr('data-clipboard-text', link);
}

var clipboard = new Clipboard('.sharebutton');
clipboard.on('success', function(e) {
    console.info('Text:', e.text);
  })


// Tooltip

$('.sharebutton').on('click', function () {
    var $this = $('#tooltip').toggleClass("override");
    setTimeout(function () {
        $this.toggleClass("override");
    }, 1000)
  });


// MODEL

const beatArray = {
  "3ZdSDUyxFmc": {
    "title": "Lifted (Chillwave/Retrowave Mix)",
    "id": "3ZdSDUyxFmc",
    "url": "https://www.youtube.com/watch?v=3ZdSDUyxFmc"
  },
  "ezvTXN6vXRM": {
    "title": "24/7 Lofi Hiphop Radio",
    "id": "ezvTXN6vXRM",
    "url": "https://www.youtube.com/watch?v=ezvTXN6vXRM"
  },
  "6rReMbO42uE": {
    "title": "24/7 lofi hip hop",
    "id": "6rReMbO42uE",
    "url": "https://www.youtube.com/watch?v=6rReMbO42uE"
  },
  "Z6ih1aKeETk": {
    "title": "Tycho - Dive",
    "id": "Z6ih1aKeETk",
    "url": "https://www.youtube.com/watch?v=Z6ih1aKeETk"
  },
  "fQ5cb7A1mjA": {
    "title": "Turquoise Memories - Glowing Dreams",
    "id": "fQ5cb7A1mjA",
    "url": "https://www.youtube.com/watch?v=fQ5cb7A1mjA"
  },
  "prHFVUaL_bU": {
    "title": "Future Vision",
    "id": "prHFVUaL_bU",
    "url": "https://www.youtube.com/watch?v=prHFVUaL_bU"
  },
  "AQBh9soLSkI": {
    "title": "Lofi HipHop Radio 24/7",
    "id": "AQBh9soLSkI",
    "url": "https://www.youtube.com/watch?v=AQBh9soLSkI"
  },
  "gJOfuGj-n9M": {
    "title": "Home - Odyssey",
    "id": "gJOfuGj-n9M",
    "url": "https://www.youtube.com/watch?v=gJOfuGj-n9M"
  },
  "Q04ILDXe3QE": {
    "title": "Jon Hopkins - Open Eye Signal",
    "id": "Q04ILDXe3QE",
    "url": "https://www.youtube.com/watch?v=Q04ILDXe3QE"
  },
  "nT6NWc3J0-o": {
    "title": "Vessels - Dilate",
    "id": "nT6NWc3J0-o",
    "url": "https://www.youtube.com/watch?v=nT6NWc3J0-o"
  }
};

const speechArray = {
  'J7GY1Xg6X20': {
    "title": "Charlie Chaplin - The Great Dictator",
    "id": "J7GY1Xg6X20",
    "url": "https://www.youtube.com/watch?v=J7GY1Xg6X20"
  },
  'Ga8tQrG4ZSw': {
    "title": "T S Eliot reads his Four Quartets",
    "id": "Ga8tQrG4ZSw",
    "url": "https://www.youtube.com/watch?v=Ga8tQrG4ZSw"
  },
  'y8HTr-F-FVM': {
    "title": "JFK - The Speech That Killed Him",
    "id": "y8HTr-F-FVM",
    "url": "https://www.youtube.com/watch?v=y8HTr-F-FVM"
  },
  'UF8uR6Z6KLc': {
    "title": "Steve Jobs' 2005 Stanford Address",
    "id": "UF8uR6Z6KLc",
    "url": "https://www.youtube.com/watch?v=UF8uR6Z6KLc"
  },
  'TuYhfCkRxyE': {
    "title": "Scent of a woman speech",
    "id": "TuYhfCkRxyE",
    "url": "https://www.youtube.com/watch?v=TuYhfCkRxyE"
  },
  '3j3_iPskjxk': {
    "title": "Full Metal Jacket Opening",
    "id": "3j3_iPskjxk",
    "url": "https://www.youtube.com/watch?v=3j3_iPskjxk"
  },
  '-pvxKdvuwIw': {
    "title": "Pale Blue Dot",
    "id": "-pvxKdvuwIw",
    "url": "https://www.youtube.com/watch?v=-pvxKdvuwIw"
  },
  'pxBQLFLei70': {
    "title": "Admiral McRaven University of Texas Address",
    "id": "pxBQLFLei70",
    "url": "https://www.youtube.com/watch?v=pxBQLFLei70"
  },
  'WJtzOD3KbLM': {
    "title": "Richard Burton - Under Milk Wood",
    "id": "WJtzOD3KbLM",
    "url": "https://www.youtube.com/watch?v=WJtzOD3KbLM"
  },
  'sPVWmmVKVk0': {
    "title": "Eleanor Roosevelt Speech Human Rights",
    "id": "sPVWmmVKVk0",
    "url": "https://www.youtube.com/watch?v=sPVWmmVKVk0"
  },
  'MkTw3_PmKtc': {
    "title": "Winston S Churchill: Fight on the Beaches",
    "id": "MkTw3_PmKtc",
    "url": "https://www.youtube.com/watch?v=MkTw3_PmKtc"
  },
  '_SakitCoNYc': {
    "title": "Mahatma Gandhi Speech",
    "id": "_SakitCoNYc",
    "url": "https://www.youtube.com/watch?v=_SakitCoNYc"
  },
  'A26MnVnL8K4': {
    "title": "Leonard Nimoy College of Fine Arts Address",
    "id": "A26MnVnL8K4",
    "url": "https://www.youtube.com/watch?v=A26MnVnL8K4"
  },
  'aazxRl5b7Ms': {
    "title": "The Lord of the Rings Audiobook",
    "id": "aazxRl5b7Ms",
    "url": "https://www.youtube.com/watch?v=aazxRl5b7Ms"
  },
  '5ZBuWVvQMn8': {
    "title": "Jim Rohn Learn To Master These Skills",
    "id": "5ZBuWVvQMn8",
    "url": "https://www.youtube.com/watch?v=5ZBuWVvQMn8"
  },
  '9OCOn3yKmwQ': {
    "title": "The Watergate Interviews",
    "id": "9OCOn3yKmwQ",
    "url": "https://www.youtube.com/watch?v=9OCOn3yKmwQ"
  },
  'VnNBbR-JeDQ': {
    "title": "Steve Jobs - The Major Thinkers",
    "id": "VnNBbR-JeDQ",
    "url": "https://www.youtube.com/watch?v=VnNBbR-JeDQ"
  },
  '_fMNIofUw2I': {
    "title": "2004 Barack Obama Keynote Speech",
    "id": "_fMNIofUw2I",
    "url": "https://www.youtube.com/watch?v=_fMNIofUw2I"
  },
  'Bp8aP6pJB1Y': {
    "title": "The Dean of Personal Development",
    "id": "Bp8aP6pJB1Y",
    "url": "https://www.youtube.com/watch?v=Bp8aP6pJB1Y"
  },
  'MOqIotJrFVM': {
    "title": "Malala Yousafzai Nobel Peace Prize Speech",
    "id": "MOqIotJrFVM",
    "url": "https://www.youtube.com/watch?v=MOqIotJrFVM"
  },
  'oJJGuIZVfLM': {
    "title": "Severn Cullis-Suzuki at Rio Summit",
    "id": "oJJGuIZVfLM",
    "url": "https://www.youtube.com/watch?v=oJJGuIZVfLM"
  },
  'Fg0mu32h5IY': {
    "title": "Maya Angelou - On the Pulse of Morning",
    "id": "Fg0mu32h5IY",
    "url": "https://www.youtube.com/watch?v=Fg0mu32h5IY"
  },
  'ov4iyFoKcIs': {
    "title": "Dr Maya Angelou Love Liberates",
    "id": "ov4iyFoKcIs",
    "url": "https://www.youtube.com/watch?v=ov4iyFoKcIs"
  },
  'keCwRdbwNQY': {
    "title": "Steve Jobs - Think different",
    "id": "keCwRdbwNQY",
    "url": "https://www.youtube.com/watch?v=keCwRdbwNQY"
  },
  'UWzNsxRyvew': {
    "title": "Warren Buffett - How to Stay Out of Debt",
    "id": "UWzNsxRyvew",
    "url": "https://www.youtube.com/watch?v=UWzNsxRyvew"
  },
  '5897dMWJiSM': {
    "title": "Marcus Aurelius - Lecture on Stoicism",
    "id": "5897dMWJiSM",
    "url": "https://www.youtube.com/watch?v=5897dMWJiSM"
  },
  'UpiBUXXE8oU': {
    "title": "Earl Nightingale - Why do you go to work?",
    "id": "UpiBUXXE8oU",
    "url": "https://www.youtube.com/watch?v=UpiBUXXE8oU"
  },
  '4IdEjAbH-LA': {
    "title": "Earl Nightingale - Imagination Is Everything",
    "id": "4IdEjAbH-LA",
    "url": "https://www.youtube.com/watch?v=4IdEjAbH-LA"
  },
  '8PaAl51TV1o': {
    "title": "30 day Challenge - Earl Nightingale",
    "id": "8PaAl51TV1o",
    "url": "https://www.youtube.com/watch?v=8PaAl51TV1o"
  },
  '_vmBQvYX8ig': {
    "title": "The Key to Happiness - Earl Nightingale",
    "id": "_vmBQvYX8ig",
    "url": "https://www.youtube.com/watch?v=_vmBQvYX8ig"
  },
  'dFRpjk7seF8': {
    "title": "Sadhguru at TED",
    "id": "dFRpjk7seF8",
    "url": "https://www.youtube.com/watch?v=dFRpjk7seF8"
  }
};


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

$('#playpausebutton img').on('click', function () {
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

$('#beatreset img').on('click', function () {
  if (beatOrder[beatOrder.length - 1] === currentBeatId) {
    beatPlayer.playVideoAt(0)
  } else {
    beatPlayer.nextVideo()
  }
    if (!isPlaying) {
      beatPlayer.pauseVideo();
      speechPlayer.pauseVideo();
    }
});

$('#speechreset img').on('click', function () {
    if (speechOrder[speechOrder.length - 1] === currentSpeechId) {
      speechPlayer.playVideoAt(0)
    } else {
      speechPlayer.nextVideo()
    }
    if (!isPlaying) {
      speechPlayer.pauseVideo();
      beatPlayer.pauseVideo();
    }
});


// if it is a agent detected mobile hideClass small_screen and show mobile_device

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 // some code..
  $('.mobile_device').css('display', 'block');
  $('.small_screen').css('display', 'none');
}


// Shuffle

function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}


function onBeatStateChange() {
  const index = beatPlayer.getPlaylistIndex();
  const key = beatOrder[index];
  const object = beatArray[key];
  currentBeatId = key;
  var BeatTitle = document.getElementById("BeatTitle");
  BeatTitle.innerHTML = object.title;
  BeatTitle.href = object.url;
  linkBuilder()
}

function onSpeechStateChange() {
  const index = speechPlayer.getPlaylistIndex();
  const key = speechOrder[index];
  const object = speechArray[key];
  currentSpeechId = key;
  var SpeechTitle = document.getElementById("SpeechTitle");
  SpeechTitle.innerHTML = object.title;
  SpeechTitle.href = object.url;
  linkBuilder()
}

// Generate YouTube Players and jump to shared pair logic

function onYouTubeIframeAPIReady() {

    if (beatKey && beatArray[beatKey]) {
      let beatArrayCopy = Object.assign({}, beatArray);
      delete beatArrayCopy[beatKey];
      beatOrder = [beatKey].concat(shuffle(Object.keys(beatArrayCopy)));
    }
    else {
      beatOrder = shuffle(Object.keys(beatArray));
    }
    if (speechKey && speechArray[speechKey]) {
      let speechArrayCopy = Object.assign({}, speechArray);
      delete speechArrayCopy[speechKey];
      speechOrder = [speechKey].concat(shuffle(Object.keys(speechArrayCopy)));
    }
    else {
      speechOrder = shuffle(Object.keys(speechArray));
    }

    beatPlayer = new YT.Player('beatvideo', {
        width: 60,
        height: 40,
        playerVars: {
            color: 'white',
            playlist: beatOrder.join(',')
        },
        events: {
            onReady: beatInitialized,
            onStateChange: onBeatStateChange
        }
    });
    speechPlayer = new YT.Player('speechvideo', {
        width: 60,
        height: 40,
        playerVars: {
            color: 'white',
            playlist: speechOrder.join(',')
        },
        events: {
            onReady: speechInitialized,
            onStateChange: onSpeechStateChange
        }
    });

}

function speechInitialized() {

}

function beatInitialized() {

}

// Volume Sliders

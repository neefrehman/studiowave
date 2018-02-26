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
  var link = 'www.studiowave.fm/' + '?beat=' + currentBeatId + '&speech=' + currentSpeechId;
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


// MODEL IWD

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
  },
  "3ZdSDUyxFmc": {
    "title": "Lifted (Chillwave/Retrowave Mix)",
    "id": "3ZdSDUyxFmc",
    "url": "https://www.youtube.com/watch?v=3ZdSDUyxFmc"
  },
  "QGpgAz__uXs": {
    "title": "Lounge Instrumental Chillout music",
    "id": "QGpgAz__uXs",
    "url": "https://www.youtube.com/watch?v=QGpgAz__uXs"
  },
  "kPChs1S6s1E": {
    "title": "Lifted (Weekend Relaxation)",
    "id": "kPChs1S6s1E",
    "url": "https://www.youtube.com/watch?v=kPChs1S6s1E"
  },
  "JSyOjpiL2AY": {
    "title": "Voyage (Chillwave/Retrowave/Synthwave Mix)",
    "id": "JSyOjpiL2AY",
    "url": "https://www.youtube.com/watch?v=JSyOjpiL2AY"
  },
  "jLFd6k1BHDk": {
    "title": "Lifted (Mogwai - Auto Rock)",
    "id": "jLFd6k1BHDk",
    "url": "https://www.youtube.com/watch?v=jLFd6k1BHDk"
  },
  "JzIK5FaC38w": {
    "title": "Lifted (Explosions In The Sky - Your Hand In Mine)",
    "id": "JzIK5FaC38w",
    "url": "https://www.youtube.com/watch?v=JzIK5FaC38w"
  },
  "sQKdl_0cpJc": {
    "title": "Indecence - Next In Life",
    "id": "sQKdl_0cpJc",
    "url": "https://www.youtube.com/watch?v=sQKdl_0cpJc"
  },
  "u5IR7nBU3C4": {
    "title": "Vessels - 4AM",
    "id": "u5IR7nBU3C4",
    "url": "https://www.youtube.com/watch?v=u5IR7nBU3C4"
  },
  "wPjN5GNpCTI": {
    "title": "Vessels - Elliptic",
    "id": "wPjN5GNpCTI",
    "url": "https://www.youtube.com/watch?v=wPjN5GNpCTI"
  },
  "mGBK8-u5h20": {
    "title": "Ulrich Schnauss - Far away trains passing by",
    "id": "mGBK8-u5h20",
    "url": "https://www.youtube.com/watch?v=mGBK8-u5h20"
  },
  "F9L4q-0Pi4E": {
    "title": "２８１４ - 新しい日の誕生/Birth of a New Day",
    "id": "F9L4q-0Pi4E",
    "url": "https://www.youtube.com/watch?v=F9L4q-0Pi4E"
  },
  "kFafKvgpIRo": {
    "title": "Lazerhawk - Visitors",
    "id": "kFafKvgpIRo",
    "url": "https://www.youtube.com/watch?v=kFafKvgpIRo"
  },
  "kg9gjQnSCAw": {
    "title": "Tycho - Epoch",
    "id": "kg9gjQnSCAw",
    "url": "https://www.youtube.com/watch?v=kg9gjQnSCAw"
  },
  "39MvD2DK-nY": {
    "title": "Chillhop Cafe 24/7",
    "id": "39MvD2DK-nY",
    "url": "https://www.youtube.com/watch?v=39MvD2DK-nY"
  },
  "xrw_6brs9tI": {
    "title": "Lofi Hip Hop Radio 24/7",
    "id": "xrw_6brs9tI",
    "url": "https://www.youtube.com/watch?v=xrw_6brs9tI"
  },
  "bR9-2As-XMk": {
    "title": "Kiasmos - Burn",
    "id": "bR9-2As-XMk",
    "url": "https://www.youtube.com/watch?v=bR9-2As-XMk"
  },
  "cr4bsdoZKxQ": {
    "title": "Kiasmos - Thrown",
    "id": "cr4bsdoZKxQ",
    "url": "https://www.youtube.com/watch?v=cr4bsdoZKxQ"
  },
  "3ycP6FvxYFo": {
    "title": "Kiasmos - Looped",
    "id": "3ycP6FvxYFo",
    "url": "https://www.youtube.com/watch?v=3ycP6FvxYFo"
  },
  "WfYOMuX-tH8": {
    "title": "Stranger Things Soundtrack",
    "id": "WfYOMuX-tH8",
    "url": "https://www.youtube.com/watch?v=WfYOMuX-tH8"
  },
  "ZPfNgIj2eNU": {
    "title": "Best of Tycho",
    "id": "ZPfNgIj2eNU",
    "url": "https://www.youtube.com/watch?v=ZPfNgIj2eNU"
  },
  "u9TJ1L9VpZU": {
    "title": "Vessels - Attica",
    "id": "u9TJ1L9VpZU",
    "url": "https://www.youtube.com/watch?v=u9TJ1L9VpZU"
  },
  "fi0KOScfBys": {
    "title": "Tycho - Sunrise Projector",
    "id": "fi0KOScfBys",
    "url": "https://www.youtube.com/watch?v=fi0KOScfBys"
  },
  "Kr-xTnrxMq8": {
    "title": "Bing & Ruth - Tomorrow Was the Golden Age",
    "id": "Kr-xTnrxMq8",
    "url": "https://www.youtube.com/watch?v=Kr-xTnrxMq8"
  },
  "vNwYtllyt3Q": {
    "title": "Brian Eno - Ambient 1: Music for Airports",
    "id": "vNwYtllyt3Q",
    "url": "https://www.youtube.com/watch?v=vNwYtllyt3Q"
  },
  "7Cc-0beyRXE": {
    "title": "Huerco S. - Those Of You Who Have Never",
    "id": "7Cc-0beyRXE",
    "url": "https://www.youtube.com/watch?v=7Cc-0beyRXE"
  },
  "_JxiJ9GX1yA": {
    "title": "Vessels - Mobilise",
    "id": "_JxiJ9GX1yA",
    "url": "https://www.youtube.com/watch?v=_JxiJ9GX1yA"
  },
  "ggLh9P9x24Q": {
    "title": "Vessels - The Sky Was Pink",
    "id": "ggLh9P9x24Q",
    "url": "https://www.youtube.com/watch?v=ggLh9P9x24Q"
  },
  "NHo7fSJ9ItE": {
    "title": "ＣＨＩＬＬ　ＲＡＤＩＯ　 ２４／７",
    "id": "NHo7fSJ9ItE",
    "url": "https://www.youtube.com/watch?v=NHo7fSJ9ItE"
  }
};

const speechArray = {
  'sPVWmmVKVk0': {
    "title": "Eleanor Roosevelt Speech Human Rights",
    "id": "sPVWmmVKVk0",
    "url": "https://www.youtube.com/watch?v=sPVWmmVKVk0"
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
  '48wgDP9pc2E': {
    "title": "Oprah Winfrey - Power of Belief",
    "id": "48wgDP9pc2E",
    "url": "https://www.youtube.com/watch?v=48wgDP9pc2E"
  },
  'GMWFieBGR7c': {
    "title": "Oprah Winfrey - Harvard Commencement",
    "id": "GMWFieBGR7c",
    "url": "https://www.youtube.com/watch?v=GMWFieBGR7c"
  },
  '0sV3miSCTG0': {
    "title": "Amelia Earhart On Women In Flying",
    "id": "0sV3miSCTG0",
    "url": "https://www.youtube.com/watch?v=0sV3miSCTG0"
  },
  'aaiPkEhB0lY': {
    "title": "Audrey Tatou interview",
    "id": "aaiPkEhB0lY",
    "url": "https://www.youtube.com/watch?v=aaiPkEhB0lY"
  },
  'JqOqo50LSZ0': {
    "title": "Maya Angelou - And Still I Rise",
    "id": "JqOqo50LSZ0",
    "url": "https://www.youtube.com/watch?v=JqOqo50LSZ0"
  },
  'CN9DN_PImy8': {
    "title": "Maya Angelou - The Mask",
    "id": "CN9DN_PImy8",
    "url": "https://www.youtube.com/watch?v=CN9DN_PImy8"
  },
  'J7GY1Xg6X20': {
    "title": "Ellen Hovde/Muffie Myer/Susan Froemke on documentaries",
    "id": "J7GY1Xg6X20",
    "url": "https://www.youtube.com/watch?v=J7GY1Xg6X20"
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


// titles and links

function onBeatStateChange() {
  if (event.data == YT.PlayerState.BUFFERING) {
      event.target.setPlaybackQuality('small');
  }
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
  if (event.data == YT.PlayerState.BUFFERING) {
      event.target.setPlaybackQuality('small');
  }
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
        width: 30,
        height: 20,
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
        width: 30,
        height: 20,
        playerVars: {
            color: 'white',
            playlist: speechOrder.join(',')
        },
        events: {
            onReady: speechInitialized,
            onStateChange: onSpeechStateChange
        }
    });

    history.replaceState( {} , 'Studiowave', '/' );

}

function speechInitialized(event) {
  event.target.setPlaybackQuality('small');
}

function beatInitialized(event) {
  event.target.setPlaybackQuality('small');
}

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
    "title": "Far away trains passing by",
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
  "wOMwO5T3yT4": {
    "title": "ＳＰＡＣＥ ＴＲＩＰ - Retrowave Mix",
    "id": "wOMwO5T3yT4",
    "url": "https://www.youtube.com/watch?v=wOMwO5T3yT4"
  },
  "Jmv5pTyz--I": {
    "title": "Stranger Things Theme Song (C418 REMIX)",
    "id": "Jmv5pTyz--I",
    "url": "https://www.youtube.com/watch?v=Jmv5pTyz--I"
  },
  "WI4-HUn8dFc": {
    "title": "ＳＰＡＣＥ ＴＲＩＰ no. II - Retrowave Mix",
    "id": "WI4-HUn8dFc",
    "url": "https://www.youtube.com/watch?v=WI4-HUn8dFc"
  },
  "1LHNmGe8HWk": {
    "title": "Perfect Day Legend Of Zelda Mix | Lo fi Hip Hop",
    "id": "1LHNmGe8HWk",
    "url": "https://www.youtube.com/watch?v=1LHNmGe8HWk"
  },
  "YV9gP5xp7OE": {
    "title": "Night on Mountain | lofi hip hop |",
    "id": "YV9gP5xp7OE",
    "url": "https://www.youtube.com/watch?v=YV9gP5xp7OE"
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
    "title": "Ellen Hovde & co. on documentaries",
    "id": "J7GY1Xg6X20",
    "url": "https://www.youtube.com/watch?v=J7GY1Xg6X20"
  },
  'iqm-XEqpayc': {
    "title": "Sheryl Sandberg Berkley Speech",
    "id": "iqm-XEqpayc",
    "url": "https://www.youtube.com/watch?v=iqm-XEqpayc"
  },
  '1hlCEIUATzg': {
    "title": "Ellen Page - Time to Thrive Conference",
    "id": "1hlCEIUATzg",
    "url": "https://www.youtube.com/watch?v=1hlCEIUATzg"
  },
  'c9SUAcNlVQ4': {
    "title": "Emma Watson UN address: I'm a Feminist",
    "id": "c9SUAcNlVQ4",
    "url": "https://www.youtube.com/watch?v=c9SUAcNlVQ4"
  },
  'a7_49EXuLoQ': {
    "title": "Mindy Kalin on Growing Up",
    "id": "a7_49EXuLoQ",
    "url": "https://www.youtube.com/watch?v=a7_49EXuLoQ"
  },
  'YlQzmwBiHdk': {
    "title": "Angelina Jolie Honors Agnes Varga",
    "id": "YlQzmwBiHdk",
    "url": "https://www.youtube.com/watch?v=YlQzmwBiHdk"
  },
  'DVCfFBlKpN8': {
    "title": "Nora Ephron - Wellesley College Commencement",
    "id": "DVCfFBlKpN8",
    "url": "https://www.youtube.com/watch?v=DVCfFBlKpN8"
  },
  'ZPCkfARH2eE': {
    "title": "Lupita Nyong'o on self-acceptance",
    "id": "ZPCkfARH2eE",
    "url": "https://www.youtube.com/watch?v=ZPCkfARH2eE"
  },
  'xHHzHu289Ws': {
    "title": "Sarah Key: Private Parts",
    "id": "xHHzHu289Ws",
    "url": "https://www.youtube.com/watch?v=xHHzHu289Ws"
  },
  'sXfrVdhmilI': {
    "title": "Amy Cuddy's Amazing Story",
    "id": "sXfrVdhmilI",
    "url": "https://www.youtube.com/watch?v=sXfrVdhmilI"
  },
  '1RhbOPFSetE': {
    "title": "Dame Stephanie Shirley",
    "id": "1RhbOPFSetE",
    "url": "https://www.youtube.com/watch?v=1RhbOPFSetE"
  },
  'EZpPgwaNaWI': {
    "title": "Billie Jean King: Coming Out",
    "id": "EZpPgwaNaWI",
    "url": "https://www.youtube.com/watch?v=EZpPgwaNaWI"
  },
  'Vyn_xLrtZaY': {
    "title": "Margaret Heffernan",
    "id": "Vyn_xLrtZaY",
    "url": "https://www.youtube.com/watch?v=Vyn_xLrtZaY"
  },
  'wpv1qtiwdHQ': {
    "title": "Mellody Hobson Commencement SC 2015",
    "id": "wpv1qtiwdHQ",
    "url": "https://www.youtube.com/watch?v=wpv1qtiwdHQ"
  },
  'FDreaW2cEUI': {
    "title": "Emilia Earhart on Woman's place in science",
    "id": "FDreaW2cEUI",
    "url": "https://www.youtube.com/watch?v=FDreaW2cEUI"
  },
  'FIN1F0TyadM': {
    "title": "Michelle Obama speech - International Women's Day",
    "id": "FIN1F0TyadM",
    "url": "https://www.youtube.com/watch?v=FIN1F0TyadM"
  },
  'TIzVOwIuWvQ': {
    "title": "Gloria Steinem",
    "id": "TIzVOwIuWvQ",
    "url": "https://www.youtube.com/watch?v=TIzVOwIuWvQ"
  },
  'xXM4E23Efvk': {
    "title": "Hillary Clinton - Womens Rights Are Human Rights",
    "id": "xXM4E23Efvk",
    "url": "https://www.youtube.com/watch?v=xXM4E23Efvk"
  },
  'IDH4RKX428Y': {
    "title": "Aint I A Woman - Sojourner Truth",
    "id": "IDH4RKX428Y",
    "url": "https://www.youtube.com/watch?v=IDH4RKX428Y"
  },
  'zcbY04JrMaU': {
    "title": "Virginia Woolf - Craftsmanship",
    "id": "zcbY04JrMaU",
    "url": "https://www.youtube.com/watch?v=zcbY04JrMaU"
  },
  '8qEEqAZgULU': {
    "title": "Reni Eddo-Lodge: ...Talking to White People About Race",
    "id": "8qEEqAZgULU",
    "url": "https://www.youtube.com/watch?v=8qEEqAZgULU"
  },
  'D9Ihs241zeg': {
    "title": "Chimamanda Ngozi Adichie - The danger of a single story",
    "id": "D9Ihs241zeg",
    "url": "https://www.youtube.com/watch?v=D9Ihs241zeg"
  },
  'cbecKv2xR14': {
    "title": "Maya Angelou: Love Liberates",
    "id": "cbecKv2xR14",
    "url": "https://www.youtube.com/watch?v=cbecKv2xR14"
  },
  'JMxG0reODQY': {
    "title": "Emma Gonzalez on guns and the NRA",
    "id": "JMxG0reODQY",
    "url": "https://www.youtube.com/watch?v=JMxG0reODQY"
  },
  'IdJbJMUFzZA': {
    "title": "Deborah Frances-White",
    "id": "IdJbJMUFzZA",
    "url": "https://www.youtube.com/watch?v=IdJbJMUFzZA"
  },
  'xAgawjzimjc': {
    "title": "Ashley Graham - Plus-size? More Like My Size",
    "id": "xAgawjzimjc",
    "url": "https://www.youtube.com/watch?v=xAgawjzimjc"
  },
  'iauet4reDn4': {
    "title": "My name is Truth: the life of Sojourner Truth",
    "id": "iauet4reDn4",
    "url": "https://www.youtube.com/watch?v=iauet4reDn4"
  },
  'z-sNlQJTBYA': {
    "title": "Janet Mock - Trans people are who they say they are",
    "id": "z-sNlQJTBYA",
    "url": "https://www.youtube.com/watch?v=z-sNlQJTBYA"
  },
  'mM5ONxQxQu8': {
    "title": "Viola Davis speaks at Women's March",
    "id": "mM5ONxQxQu8",
    "url": "https://www.youtube.com/watch?v=mM5ONxQxQu8"
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

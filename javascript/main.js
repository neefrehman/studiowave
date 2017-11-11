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
  "J8fk96dAKZE": {
    "title": "24/7 ＣＨＩＬＬ ｉｎ ＪＡＰＡＮ",
    "id": "J8fk96dAKZE",
    "url": "https://www.youtube.com/watch?v=J8fk96dAKZE"
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
  },
  'BkvEpoqFx6c': {
    "title": "Henry Rollins: The One Decision",
    "id": "BkvEpoqFx6c",
    "url": "https://www.youtube.com/watch?v=BkvEpoqFx6c"
  },
  'fajfkO_X0l0': {
    "title": "Sam Harris: The Self is an Illusion",
    "id": "fajfkO_X0l0",
    "url": "https://www.youtube.com/watch?v=fajfkO_X0l0"
  },
  'evM1NX3ebFE': {
    "title": "Conquer Life's Challenges - Cornel West",
    "id": "evM1NX3ebFE",
    "url": "https://www.youtube.com/watch?v=evM1NX3ebFE"
  },
  'kn2Rp51Vpiw': {
    "title": "Bryan Cranston's Career Advice",
    "id": "kn2Rp51Vpiw",
    "url": "https://www.youtube.com/watch?v=kn2Rp51Vpiw"
  },
  'gHbYJfwFgOU': {
    "title": "Bill Nye: Creationism Isn't Appropriate For Children",
    "id": "gHbYJfwFgOU",
    "url": "https://www.youtube.com/watch?v=gHbYJfwFgOU"
  },
  'tfWll1Eb_dY': {
    "title": "David Bowie talks about pain/happiness/life",
    "id": "tfWll1Eb_dY",
    "url": "https://www.youtube.com/watch?v=tfWll1Eb_dY"
  },
  '-ZRLe6jYu0s': {
    "title": "'Happiness isn't about what the world gives you'",
    "id": "-ZRLe6jYu0s",
    "url": "https://www.youtube.com/watch?v=-ZRLe6jYu0s"
  },
  'Tc24RCmvlTU': {
    "title": "The Truth About Happiness",
    "id": "Tc24RCmvlTU",
    "url": "https://www.youtube.com/watch?v=Tc24RCmvlTU"
  },
  'zWjuZ0OvtNU': {
    "title": "How To Train Your Brain To Stay Focused",
    "id": "zWjuZ0OvtNU",
    "url": "https://www.youtube.com/watch?v=zWjuZ0OvtNU"
  },
  'CzSMC5rWvos': {
    "title": "Neil deGrasse Tyson: Atheist or Agnostic",
    "id": "CzSMC5rWvos",
    "url": "https://www.youtube.com/watch?v=CzSMC5rWvos"
  },
  'ouRbkBAOGEw': {
    "title": "JFK - We choose to go to the Moon",
    "id": "ouRbkBAOGEw",
    "url": "https://www.youtube.com/watch?v=ouRbkBAOGEw"
  },
  'IyArUh8eqJ0': {
    "title": "JFK/Eisenhower during Cuban Missile Crisis",
    "id": "IyArUh8eqJ0",
    "url": "https://www.youtube.com/watch?v=IyArUh8eqJ0"
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
  'J7GY1Xg6X20': {
    "title": "Charlie Chaplin - The Great Dictator",
    "id": "J7GY1Xg6X20",
    "url": "https://www.youtube.com/watch?v=J7GY1Xg6X20"
  },
  'bHOHi5ueo0A': {
    "title": "The laughing heart",
    "id": "bHOHi5ueo0A",
    "url": "https://www.youtube.com/watch?v=bHOHi5ueo0A"
  },
  'MTPxWkBgW6U': {
    "title": "Charles Bukowski on dying and how to write",
    "id": "MTPxWkBgW6U",
    "url": "https://www.youtube.com/watch?v=MTPxWkBgW6U"
  },
  'P5hhqvNDak8': {
    "title": "Charlie Chaplin - The Great Dictator",
    "id": "P5hhqvNDak8",
    "url": "https://www.youtube.com/watch?v=P5hhqvNDak8"
  },
  'J7GY1Xg6X20': {
    "title": "Charles Bukowski - The Secret of My Endurance",
    "id": "J7GY1Xg6X20",
    "url": "https://www.youtube.com/watch?v=J7GY1Xg6X20"
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
  'AlVQ7QffzjM': {
    "title": "Dougal Wilson on making music videos",
    "id": "AlVQ7QffzjM",
    "url": "https://www.youtube.com/watch?v=AlVQ7QffzjM"
  },
  '5K_UAowTszU': {
    "title": "Richard Linklater on being self-taught ",
    "id": "5K_UAowTszU",
    "url": "https://www.youtube.com/watch?v=5K_UAowTszU"
  },
  'T74EBhm5IFU': {
    "title": "Charlie Chaplin - The Great Dictator",
    "id": "T74EBhm5IFU",
    "url": "https://www.youtube.com/watch?v=T74EBhm5IFU"
  },
  'J7GY1Xg6X20': {
    "title": "Ellen Hovde/Muffie Myer/Susan Froemke on documentaries",
    "id": "J7GY1Xg6X20",
    "url": "https://www.youtube.com/watch?v=J7GY1Xg6X20"
  },
  '91uiHjHmEZc': {
    "title": "Ridley Scott on filmmaking",
    "id": "91uiHjHmEZc",
    "url": "https://www.youtube.com/watch?v=91uiHjHmEZc"
  },
  'g9lBlD04sDs': {
    "title": "Aaron Draplin on Working with Free Vectors",
    "id": "g9lBlD04sDs",
    "url": "https://www.youtube.com/watch?v=g9lBlD04sDs"
  },
  'v3vJ5Pvfbzk': {
    "title": "Draw Blindfolded - Shantell Martin",
    "id": "v3vJ5Pvfbzk",
    "url": "https://www.youtube.com/watch?v=v3vJ5Pvfbzk"
  },
  'e80BbX05D7Y': {
    "title": "How To Begin Your Presentation - Simon Sinek",
    "id": "e80BbX05D7Y",
    "url": "https://www.youtube.com/watch?v=e80BbX05D7Y"
  },
  'Ry94tFG4CIM': {
    "title": "Do Not Think Too Much - Alan Watts",
    "id": "Ry94tFG4CIM",
    "url": "https://www.youtube.com/watch?v=Ry94tFG4CIM"
  },
  'kB5UCVW5zj4': {
    "title": "Alan Watts - Stop Negative Thoughts",
    "id": "kB5UCVW5zj4",
    "url": "https://www.youtube.com/watch?v=kB5UCVW5zj4"
  },
  'kiSoxFHyjGY': {
    "title": "Dan Rather's account of JFK assasination",
    "id": "kiSoxFHyjGY",
    "url": "https://www.youtube.com/watch?v=kiSoxFHyjGY"
  },
  '8-lLC4c_Mso': {
    "title": "Dan Rather Final Goodbye",
    "id": "8-lLC4c_Mso",
    "url": "https://www.youtube.com/watch?v=8-lLC4c_Mso"
  },
  'PDv32Oo8PmE': {
    "title": "Justin Trudeau speech at Edinburgh University",
    "id": "PDv32Oo8PmE",
    "url": "https://www.youtube.com/watch?v=PDv32Oo8PmE"
  },
  'xKCuDxpccYM': {
    "title": "Elon Musk's Break Down on Climate Change",
    "id": "xKCuDxpccYM",
    "url": "https://www.youtube.com/watch?v=xKCuDxpccYM"
  },
  'MfXEnPO4R_s': {
    "title": "Ludacris Breaks Down His Favorite Rap Lyrics",
    "id": "MfXEnPO4R_s",
    "url": "https://www.youtube.com/watch?v=MfXEnPO4R_s"
  },
  'b2mMX6vFc4s': {
    "title": "George the Poet - My City",
    "id": "b2mMX6vFc4s",
    "url": "https://www.youtube.com/watch?v=b2mMX6vFc4s"
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

function speechInitialized() {
  event.speechPlayer.setPlaybackQuality('hd720');
}

function beatInitialized() {
  event.beatPlayer.setPlaybackQuality('hd720');
}


function onBeatStateChange() {
  if (event.data == YT.PlayerState.BUFFERING) {
      event.target.setPlaybackQuality('hd720');
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
      event.target.setPlaybackQuality('hd720');
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

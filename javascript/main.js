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
  },
  "T0nodan87dM": {
    "title": "Vaporwave~Hiphop~Vibes",
    "id": "T0nodan87dM",
    "url": "https://www.youtube.com/watch?v=T0nodan87dM"
  },
  "wOMwO5T3yT4": {
    "title": "ＳＰＡＣＥ　ＴＲＩＰ",
    "id": "wOMwO5T3yT4",
    "url": "https://www.youtube.com/watch?v=wOMwO5T3yT4"
  },
  '-FlxM_0S2lA': {
    "title": "Lofi hip hop mix",
    "id": "-FlxM_0S2lA",
    "url": "https://www.youtube.com/watch?v=-FlxM_0S2lA"
  },
  'uHaZzrUVnmw': {
    "title": "Hip-Hop Instrumentals Vol.2 - Aroto",
    "id": "uHaZzrUVnmw",
    "url": "https://www.youtube.com/watch?v=uHaZzrUVnmw"
  },
  'GGBm9gTY2NU': {
    "title": "DownTown | Jazzy HipHop",
    "id": "GGBm9gTY2NU",
    "url": "https://www.youtube.com/watch?v=GGBm9gTY2NU"
  },
  'tXQzAApb4WM': {
    "title": "Questlove - Goodbye Isaac",
    "id": "tXQzAApb4WM",
    "url": "https://www.youtube.com/watch?v=tXQzAApb4WM"
  },
  'Agl1TgVfls0': {
    "title": "J Dilla - Life (Instrumental)",
    "id": "Agl1TgVfls0",
    "url": "https://www.youtube.com/watch?v=Agl1TgVfls0"
  },
  'rSibMLeJYaE': {
    "title": "Hip Hop Jazz Chill - Need for Weekend",
    "id": "rSibMLeJYaE",
    "url": "https://www.youtube.com/watch?v=rSibMLeJYaE"
  },
  '9ka5bgHnHyg': {
    "title": "Hip Hop Funk Jazz - Ours Samplus",
    "id": "9ka5bgHnHyg",
    "url": "https://www.youtube.com/watch?v=9ka5bgHnHyg"
  },
  'V93yBHhxHTM': {
    "title": "Instrumental Hip Hop Buena Vista Chan Chan",
    "id": "V93yBHhxHTM",
    "url": "https://www.youtube.com/watch?v=V93yBHhxHTM"
  },
  'Au46lJu8icA': {
    "title": "Old School Instrumental Hip Hop Session",
    "id": "Au46lJu8icA",
    "url": "https://www.youtube.com/watch?v=Au46lJu8icA"
  },
  '_Rd2vKI6Amk': {
    "title": "Chill Instrumental Hiphop & JazzHop Mix",
    "id": "_Rd2vKI6Amk",
    "url": "https://www.youtube.com/watch?v=_Rd2vKI6Amk"
  },
  'UHffJ0qC9Ko': {
    "title": "Gramatik Just Jammin",
    "id": "UHffJ0qC9Ko",
    "url": "https://www.youtube.com/watch?v=UHffJ0qC9Ko"
  },
  '7ZguAEoNpZw': {
    "title": "L'indécis - Soulful",
    "id": "7ZguAEoNpZw",
    "url": "https://www.youtube.com/watch?v=7ZguAEoNpZw"
  },
  'KjQSSYOTXzk': {
    "title": "Khruangbin - Friday Morning",
    "id": "KjQSSYOTXzk",
    "url": "https://www.youtube.com/watch?v=KjQSSYOTXzk"
  },
  'e05rLVZQKiU': {
    "title": "Tommy Guerrero - No Mans Land ",
    "id": "e05rLVZQKiU",
    "url": "https://www.youtube.com/watch?v=e05rLVZQKiU"
  },
  'zdYzL6wkr0A': {
    "title": "Time (Chillwave - Lofi - Electronic Mix)",
    "id": "zdYzL6wkr0A",
    "url": "https://www.youtube.com/watch?v=zdYzL6wkr0A"
  },
  'ksaWk4ng_yA': {
    "title": "Hentzup - Out Of The Blue",
    "id": "ksaWk4ng_yA",
    "url": "https://www.youtube.com/watch?v=ksaWk4ng_yA"
  },
  'gS62leDULLY': {
    "title": "Aso - Dreamer",
    "id": "gS62leDULLY",
    "url": "https://www.youtube.com/watch?v=gS62leDULLY"
  },
  '6Y1naR7xDY8': {
    "title": "Saiko - In Space",
    "id": "6Y1naR7xDY8",
    "url": "https://www.youtube.com/watch?v=6Y1naR7xDY8"
  },
  'kO43brxekLI': {
    "title": "Sounds Positive ☛ Jazz Oldschool HipHop",
    "id": "kO43brxekLI",
    "url": "https://www.youtube.com/watch?v=kO43brxekLI"
  },
  'lSU1eFxgr68': {
    "title": "Vanilla - Origin (Full Album)",
    "id": "lSU1eFxgr68",
    "url": "https://www.youtube.com/watch?v=lSU1eFxgr68"
  },
  'IFS0Eo1eh6Y': {
    "title": "Joey Bada$$ - Waves Instrumental",
    "id": "IFS0Eo1eh6Y",
    "url": "https://www.youtube.com/watch?v=IFS0Eo1eh6Y"
  },
  'XG5umW9LTfo': {
    "title": "Flatbush ZOMBiES - Palm Trees",
    "id": "XG5umW9LTfo",
    "url": "https://www.youtube.com/watch?v=XG5umW9LTfo"
  },
  '9eBfa9nNzvk': {
    "title": "DOOM & RZA - Books Of War",
    "id": "9eBfa9nNzvk",
    "url": "https://www.youtube.com/watch?v=9eBfa9nNzvk"
  },
  'GJ-rORq34js': {
    "title": "J-Force - Pink Chicken '98",
    "id": "GJ-rORq34js",
    "url": "https://www.youtube.com/watch?v=GJ-rORq34js"
  },
  'SU6x6nWQWI0': {
    "title": "Wio-K - We Nah Easy",
    "id": "SU6x6nWQWI0",
    "url": "https://www.youtube.com/watch?v=SU6x6nWQWI0"
  },
  '7t2PhJUddIk': {
    "title": "Late June - You & I",
    "id": "7t2PhJUddIk",
    "url": "https://www.youtube.com/watch?v=7t2PhJUddIk"
  },
  '1N8jKsu1NCE': {
    "title": "Julien Marchal - Insight XX",
    "id": "1N8jKsu1NCE",
    "url": "https://www.youtube.com/watch?v=1N8jKsu1NCE"
  },
  'mYntXSsNnDQ': {
    "title": "Pete Rock - Lost Sessions",
    "id": "mYntXSsNnDQ",
    "url": "https://www.youtube.com/watch?v=mYntXSsNnDQ"
  },
  'isIj3tuQTDY': {
    "title": "Glitch Mix",
    "id": "isIj3tuQTDY",
    "url": "https://www.youtube.com/watch?v=isIj3tuQTDY"
  }
};

const speechArray = {
  'ccNkksrfls': {
    "title": "Maradona 'Hand of God' 1986 World Cup",
    "id": "ccNkksrfls",
    "url": "https://www.youtube.com/watch?v=-ccNkksrfls"
  },
  '1QJ6P8Yxil4': {
    "title": "Mario Götze Germany vs Argentina 2014",
    "id": "1QJ6P8Yxil4",
    "url": "https://www.youtube.com/watch?v=1QJ6P8Yxil4"
  },
  '3HG7lcKh3w4': {
    "title": "Brazil Germany 7-1",
    "id": "3HG7lcKh3w4",
    "url": "https://www.youtube.com/watch?v=3HG7lcKh3w4"
  },
  '3th82ZfFsUg': {
    "title": "Brazil vs Italy 1982 World Cup - Classic match",
    "id": "3th82ZfFsUg",
    "url": "https://www.youtube.com/watch?v=3th82ZfFsUg"
  },
  'WeXLV_tu7fA': {
    "title": "England 3-0 Poland (1989)",
    "id": "WeXLV_tu7fA",
    "url": "https://www.youtube.com/watch?v=WeXLV_tu7fA"
  },
  'exZqMY1CUQ': {
    "title": "1958 Pelé vs Sweden - WORLD CUP FINAL",
    "id": "exZqMY1CUQ",
    "url": "https://www.youtube.com/watch?v=-exZqMY1CUQ"
  },
  'z2PJnLgOPyo': {
    "title": "World Cup Mexico 1970: Brazil - Italy 4-1 (Final)",
    "id": "z2PJnLgOPyo",
    "url": "https://www.youtube.com/watch?v=z2PJnLgOPyo"
  },
  '3HCA7Ei2KAQ': {
    "title": "1962 Pelé vs Mexico - WORLD CUP",
    "id": "3HCA7Ei2KAQ",
    "url": "https://www.youtube.com/watch?v=3HCA7Ei2KAQ"
  },
  'XzzeGrU3vZg': {
    "title": "FRANCE vs ITALIE - WORLD CUP 1998",
    "id": "XzzeGrU3vZg",
    "url": "https://www.youtube.com/watch?v=XzzeGrU3vZg"
  },
  '3tZYvld1_2k': {
    "title": "FRANCE vs PARAGUAY - WORLD CUP 1998",
    "id": "3tZYvld1_2k",
    "url": "https://www.youtube.com/watch?v=3tZYvld1_2k"
  },
  '0cHzpeOjosU': {
    "title": "Argentina v Netherlands World Cup QF 1998",
    "id": "0cHzpeOjosU",
    "url": "https://www.youtube.com/watch?v=0cHzpeOjosU"
  },
  'z6yZMIDoXPo': {
    "title": "1994 FIFA World Cup First Goals",
    "id": "z6yZMIDoXPo",
    "url": "https://www.youtube.com/watch?v=z6yZMIDoXPo"
  },
  'O9cQJJ9M3cc': {
    "title": "World Cup 1962: Brazil vs Mexico",
    "id": "O9cQJJ9M3cc",
    "url": "https://www.youtube.com/watch?v=O9cQJJ9M3cc"
  },
  'AXQowsm_Fco': {
    "title": "FRANCE - RFA - 1990",
    "id": "AXQowsm_Fco",
    "url": "https://www.youtube.com/watch?v=AXQowsm_Fco"
  },
  'M5HbmeNKino': {
    "title": "Carlos Alberto Goal 1970 World Cup Final",
    "id": "M5HbmeNKino",
    "url": "https://www.youtube.com/watch?v=M5HbmeNKino"
  },
  'RP6HzL_b1n4': {
    "title": "1986 Diego Maradona vs England - World Cup",
    "id": "RP6HzL_b1n4",
    "url": "https://www.youtube.com/watch?v=RP6HzL_b1n4"
  },
  'I4qeDBad2Go': {
    "title": "Michael Owen Goal",
    "id": "I4qeDBad2Go",
    "url": "https://www.youtube.com/watch?v=I4qeDBad2Go"
  },
  'd1axsnMRbbo': {
    "title": "Archie Gemmell",
    "id": "d1axsnMRbbo",
    "url": "https://www.youtube.com/watch?v=d1axsnMRbbo"
  },
  'F9FiNNnG22I': {
    "title": "Nigeria Italy 94",
    "id": "F9FiNNnG22I",
    "url": "https://www.youtube.com/watch?v=F9FiNNnG22I"
  },
  '0E9qCaoEgl8': {
    "title": "Maradona 86",
    "id": "0E9qCaoEgl8",
    "url": "https://www.youtube.com/watch?v=0E9qCaoEgl8"
  },
  'Ck6swtUa1Ok': {
    "title": "Socrates Italy 82",
    "id": "Ck6swtUa1Ok",
    "url": "https://www.youtube.com/watch?v=Ck6swtUa1Ok"
  },
  'uh4p4MyfPMM': {
    "title": "Spain vs France - 2006",
    "id": "uh4p4MyfPMM",
    "url": "https://www.youtube.com/watch?v=uh4p4MyfPMM"
  },
  'IHCqp7Xbjdg': {
    "title": "England Argentina Full Highlights 1998",
    "id": "IHCqp7Xbjdg",
    "url": "https://www.youtube.com/watch?v=IHCqp7Xbjdg"
  },
  'pw-q9wVJmvQ': {
    "title": "England vs Uruagay 2014",
    "id": "pw-q9wVJmvQ",
    "url": "https://www.youtube.com/watch?v=pw-q9wVJmvQ"
  },
  'wtjNU6sXtCI': {
    "title": "Brazil vs France - 1986",
    "id": "wtjNU6sXtCI",
    "url": "https://www.youtube.com/watch?v=wtjNU6sXtCI"
  },
  'X9jrLD_If1w': {
    "title": "Scotland vs Brazil - 1998",
    "id": "X9jrLD_If1w",
    "url": "https://www.youtube.com/watch?v=X9jrLD_If1w"
  },
  'bkeaw6ooyz0': {
    "title": "Zidane vs Brazil - 2006",
    "id": "bkeaw6ooyz0",
    "url": "https://www.youtube.com/watch?v=bkeaw6ooyz0"
  },
  'BVSBPnEdeaE': {
    "title": "Top 10 EPIC Goals in World Cup History",
    "id": "BVSBPnEdeaE",
    "url": "https://www.youtube.com/watch?v=BVSBPnEdeaE"
  },
  'xzHvT_hlkak': {
    "title": "10 Most Shocking Moments in World Cup History",
    "id": "xzHvT_hlkak",
    "url": "https://www.youtube.com/watch?v=xzHvT_hlkak"
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

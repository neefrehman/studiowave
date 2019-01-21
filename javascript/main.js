/* jshint esversion: 6 */
var beatPlayer;
var speechPlayer;
var isPlaying = false;
var speechOrder;
var beatOrder;
var currentSpeechId;
var currentBeatId;
var speechKey;
var beatKey;


// MODEL
const beatArray = {
  '3ZdSDUyxFmc': {
    title: "Lifted (Chillwave/Retrowave Mix)",
    id: "3ZdSDUyxFmc",
    url: "https://www.youtube.com/watch?v=3ZdSDUyxFmc"
  },
  '6rReMbO42uE': {
    title: "24/7 lofi hip hop",
    id: "6rReMbO42uE",
    url: "https://www.youtube.com/watch?v=6rReMbO42uE"
  },
  'Z6ih1aKeETk': {
    title: "Tycho - Dive",
    id: "Z6ih1aKeETk",
    url: "https://www.youtube.com/watch?v=Z6ih1aKeETk"
  },
  'fQ5cb7A1mjA': {
    title: "Turquoise Memories - Glowing Dreams",
    id: "fQ5cb7A1mjA",
    url: "https://www.youtube.com/watch?v=fQ5cb7A1mjA"
  },
  'prHFVUaL_bU': {
    title: "Future Vision",
    id: "prHFVUaL_bU",
    url: "https://www.youtube.com/watch?v=prHFVUaL_bU"
  },
  'AQBh9soLSkI': {
    title: "Lofi HipHop Radio 24/7",
    id: "AQBh9soLSkI",
    url: "https://www.youtube.com/watch?v=AQBh9soLSkI"
  },
  'gJOfuGj-n9M': {
    title: "Home - Odyssey",
    id: "gJOfuGj-n9M",
    url: "https://www.youtube.com/watch?v=gJOfuGj-n9M"
  },
  'Q04ILDXe3QE': {
    title: "Jon Hopkins - Open Eye Signal",
    id: "Q04ILDXe3QE",
    url: "https://www.youtube.com/watch?v=Q04ILDXe3QE"
  },
  'nT6NWc3J0-o': {
    title: "Vessels - Dilate",
    id: "nT6NWc3J0-o",
    url: "https://www.youtube.com/watch?v=nT6NWc3J0-o"
  },
  'QGpgAz__uXs': {
    title: "Lounge Instrumental Chillout music",
    id: "QGpgAz__uXs",
    url: "https://www.youtube.com/watch?v=QGpgAz__uXs"
  },
  'kPChs1S6s1E': {
    title: "Lifted (Weekend Relaxation)",
    id: "kPChs1S6s1E",
    url: "https://www.youtube.com/watch?v=kPChs1S6s1E"
  },
  'JSyOjpiL2AY': {
    title: "Voyage (Chillwave/Retrowave/Synthwave Mix)",
    id: "JSyOjpiL2AY",
    url: "https://www.youtube.com/watch?v=JSyOjpiL2AY"
  },
  'jLFd6k1BHDk': {
    title: "Lifted (Mogwai - Auto Rock)",
    id: "jLFd6k1BHDk",
    url: "https://www.youtube.com/watch?v=jLFd6k1BHDk"
  },
  'JzIK5FaC38w': {
    title: "Lifted (Explosions In The Sky - Your Hand In Mine)",
    id: "JzIK5FaC38w",
    url: "https://www.youtube.com/watch?v=JzIK5FaC38w"
  },
  'sQKdl_0cpJc': {
    title: "Indecence - Next In Life",
    id: "sQKdl_0cpJc",
    url: "https://www.youtube.com/watch?v=sQKdl_0cpJc"
  },
  'u5IR7nBU3C4': {
    title: "Vessels - 4AM",
    id: "u5IR7nBU3C4",
    url: "https://www.youtube.com/watch?v=u5IR7nBU3C4"
  },
  'wPjN5GNpCTI': {
    title: "Vessels - Elliptic",
    id: "wPjN5GNpCTI",
    url: "https://www.youtube.com/watch?v=wPjN5GNpCTI"
  },
  'mGBK8-u5h20': {
    title: "Ulrich Schnauss - Far away trains passing by",
    id: "mGBK8-u5h20",
    url: "https://www.youtube.com/watch?v=mGBK8-u5h20"
  },
  'F9L4q-0Pi4E': {
    title: "２８１４ - 新しい日の誕生/Birth of a New Day",
    id: "F9L4q-0Pi4E",
    url: "https://www.youtube.com/watch?v=F9L4q-0Pi4E"
  },
  'kFafKvgpIRo': {
    title: "Lazerhawk - Visitors",
    id: "kFafKvgpIRo",
    url: "https://www.youtube.com/watch?v=kFafKvgpIRo"
  },
  'kg9gjQnSCAw': {
    title: "Tycho - Epoch",
    id: "kg9gjQnSCAw",
    url: "https://www.youtube.com/watch?v=kg9gjQnSCAw"
  },
  'bR9-2As-XMk': {
    title: "Kiasmos - Burn",
    id: "bR9-2As-XMk",
    url: "https://www.youtube.com/watch?v=bR9-2As-XMk"
  },
  'cr4bsdoZKxQ': {
    title: "Kiasmos - Thrown",
    id: "cr4bsdoZKxQ",
    url: "https://www.youtube.com/watch?v=cr4bsdoZKxQ"
  },
  '3ycP6FvxYFo': {
    title: "Kiasmos - Looped",
    id: "3ycP6FvxYFo",
    url: "https://www.youtube.com/watch?v=3ycP6FvxYFo"
  },
  'WfYOMuX-tH8': {
    title: "Stranger Things Soundtrack",
    id: "WfYOMuX-tH8",
    url: "https://www.youtube.com/watch?v=WfYOMuX-tH8"
  },
  'ZPfNgIj2eNU': {
    title: "Best of Tycho",
    id: "ZPfNgIj2eNU",
    url: "https://www.youtube.com/watch?v=ZPfNgIj2eNU"
  },
  'u9TJ1L9VpZU': {
    title: "Vessels - Attica",
    id: "u9TJ1L9VpZU",
    url: "https://www.youtube.com/watch?v=u9TJ1L9VpZU"
  },
  'fi0KOScfBys': {
    title: "Tycho - Sunrise Projector",
    id: "fi0KOScfBys",
    url: "https://www.youtube.com/watch?v=fi0KOScfBys"
  },
  'Kr-xTnrxMq8': {
    title: "Bing & Ruth - Tomorrow Was the Golden Age",
    id: "Kr-xTnrxMq8",
    url: "https://www.youtube.com/watch?v=Kr-xTnrxMq8"
  },
  'vNwYtllyt3Q': {
    title: "Brian Eno - Ambient 1: Music for Airports",
    id: "vNwYtllyt3Q",
    url: "https://www.youtube.com/watch?v=vNwYtllyt3Q"
  },
  '7Cc-0beyRXE': {
    title: "Huerco S. - Those Of You Who Have Never",
    id: "7Cc-0beyRXE",
    url: "https://www.youtube.com/watch?v=7Cc-0beyRXE"
  },
  '_JxiJ9GX1yA': {
    title: "Vessels - Mobilise",
    id: "_JxiJ9GX1yA",
    url: "https://www.youtube.com/watch?v=_JxiJ9GX1yA"
  },
  'ggLh9P9x24Q': {
    title: "Vessels - The Sky Was Pink",
    id: "ggLh9P9x24Q",
    url: "https://www.youtube.com/watch?v=ggLh9P9x24Q"
  },
  'wOMwO5T3yT4': {
    title: "ＳＰＡＣＥ ＴＲＩＰ - Retrowave Mix",
    id: "wOMwO5T3yT4",
    url: "https://www.youtube.com/watch?v=wOMwO5T3yT4"
  },
  'Jmv5pTyz--I': {
    title: "Stranger Things Theme Song (C418 REMIX)",
    id: "Jmv5pTyz--I",
    url: "https://www.youtube.com/watch?v=Jmv5pTyz--I"
  },
  'WI4-HUn8dFc': {
    title: "ＳＰＡＣＥ ＴＲＩＰ no. II - Retrowave Mix",
    id: "WI4-HUn8dFc",
    url: "https://www.youtube.com/watch?v=WI4-HUn8dFc"
  },
  '1LHNmGe8HWk': {
    title: "Perfect Day Legend Of Zelda Mix | Lo fi Hip Hop",
    id: "1LHNmGe8HWk",
    url: "https://www.youtube.com/watch?v=1LHNmGe8HWk"
  },
  'YV9gP5xp7OE': {
    title: "Night on Mountain | lofi hip hop |",
    id: "YV9gP5xp7OE",
    url: "https://www.youtube.com/watch?v=YV9gP5xp7OE"
  },
  'T0nodan87dM': {
    title: "Vaporwave~Hiphop~Vibes",
    id: "T0nodan87dM",
    url: "https://www.youtube.com/watch?v=T0nodan87dM"
  },
  '-FlxM_0S2lA': {
    title: "Lofi hip hop mix",
    id: "-FlxM_0S2lA",
    url: "https://www.youtube.com/watch?v=-FlxM_0S2lA"
  },
  'uHaZzrUVnmw': {
    title: "Hip-Hop Instrumentals Vol.2 - Aroto",
    id: "uHaZzrUVnmw",
    url: "https://www.youtube.com/watch?v=uHaZzrUVnmw"
  },
  'GGBm9gTY2NU': {
    title: "DownTown | Jazzy HipHop",
    id: "GGBm9gTY2NU",
    url: "https://www.youtube.com/watch?v=GGBm9gTY2NU"
  },
  'tXQzAApb4WM': {
    title: "Questlove - Goodbye Isaac",
    id: "tXQzAApb4WM",
    url: "https://www.youtube.com/watch?v=tXQzAApb4WM"
  },
  'Agl1TgVfls0': {
    title: "J Dilla - Life (Instrumental)",
    id: "Agl1TgVfls0",
    url: "https://www.youtube.com/watch?v=Agl1TgVfls0"
  },
  'rSibMLeJYaE': {
    title: "Hip Hop Jazz Chill - Need for Weekend",
    id: "rSibMLeJYaE",
    url: "https://www.youtube.com/watch?v=rSibMLeJYaE"
  },
  '9ka5bgHnHyg': {
    title: "Hip Hop Funk Jazz - Ours Samplus",
    id: "9ka5bgHnHyg",
    url: "https://www.youtube.com/watch?v=9ka5bgHnHyg"
  },
  'V93yBHhxHTM': {
    title: "Instrumental Hip Hop Buena Vista Chan Chan",
    id: "V93yBHhxHTM",
    url: "https://www.youtube.com/watch?v=V93yBHhxHTM"
  },
  'Au46lJu8icA': {
    title: "Old School Instrumental Hip Hop Session",
    id: "Au46lJu8icA",
    url: "https://www.youtube.com/watch?v=Au46lJu8icA"
  },
  '_Rd2vKI6Amk': {
    title: "Chill Instrumental Hiphop & JazzHop Mix",
    id: "_Rd2vKI6Amk",
    url: "https://www.youtube.com/watch?v=_Rd2vKI6Amk"
  },
  'UHffJ0qC9Ko': {
    title: "Gramatik Just Jammin",
    id: "UHffJ0qC9Ko",
    url: "https://www.youtube.com/watch?v=UHffJ0qC9Ko"
  },
  '7ZguAEoNpZw': {
    title: "L'indécis - Soulful",
    id: "7ZguAEoNpZw",
    url: "https://www.youtube.com/watch?v=7ZguAEoNpZw"
  },
  'KjQSSYOTXzk': {
    title: "Khruangbin - Friday Morning",
    id: "KjQSSYOTXzk",
    url: "https://www.youtube.com/watch?v=KjQSSYOTXzk"
  },
  'e05rLVZQKiU': {
    title: "Tommy Guerrero - No Mans Land ",
    id: "e05rLVZQKiU",
    url: "https://www.youtube.com/watch?v=e05rLVZQKiU"
  },
  'zdYzL6wkr0A': {
    title: "Time (Chillwave - Lofi - Electronic Mix)",
    id: "zdYzL6wkr0A",
    url: "https://www.youtube.com/watch?v=zdYzL6wkr0A"
  },
  'ksaWk4ng_yA': {
    title: "Hentzup - Out Of The Blue",
    id: "ksaWk4ng_yA",
    url: "https://www.youtube.com/watch?v=ksaWk4ng_yA"
  },
  'gS62leDULLY': {
    title: "Aso - Dreamer",
    id: "gS62leDULLY",
    url: "https://www.youtube.com/watch?v=gS62leDULLY"
  },
  '6Y1naR7xDY8': {
    title: "Saiko - In Space",
    id: "6Y1naR7xDY8",
    url: "https://www.youtube.com/watch?v=6Y1naR7xDY8"
  },
  'kO43brxekLI': {
    title: "Sounds Positive ☛ Jazz Oldschool HipHop",
    id: "kO43brxekLI",
    url: "https://www.youtube.com/watch?v=kO43brxekLI"
  },
  'lSU1eFxgr68': {
    title: "Vanilla - Origin (Full Album)",
    id: "lSU1eFxgr68",
    url: "https://www.youtube.com/watch?v=lSU1eFxgr68"
  },
  'IFS0Eo1eh6Y': {
    title: "Joey Bada$$ - Waves Instrumental",
    id: "IFS0Eo1eh6Y",
    url: "https://www.youtube.com/watch?v=IFS0Eo1eh6Y"
  },
  'XG5umW9LTfo': {
    title: "Flatbush ZOMBiES - Palm Trees",
    id: "XG5umW9LTfo",
    url: "https://www.youtube.com/watch?v=XG5umW9LTfo"
  },
  '9eBfa9nNzvk': {
    title: "DOOM & RZA - Books Of War",
    id: "9eBfa9nNzvk",
    url: "https://www.youtube.com/watch?v=9eBfa9nNzvk"
  },
  'GJ-rORq34js': {
    title: "J-Force - Pink Chicken '98",
    id: "GJ-rORq34js",
    url: "https://www.youtube.com/watch?v=GJ-rORq34js"
  },
  'SU6x6nWQWI0': {
    title: "Wio-K - We Nah Easy",
    id: "SU6x6nWQWI0",
    url: "https://www.youtube.com/watch?v=SU6x6nWQWI0"
  },
  '7t2PhJUddIk': {
    title: "Late June - You & I",
    id: "7t2PhJUddIk",
    url: "https://www.youtube.com/watch?v=7t2PhJUddIk"
  },
  '1N8jKsu1NCE': {
    title: "Julien Marchal - Insight XX",
    id: "1N8jKsu1NCE",
    url: "https://www.youtube.com/watch?v=1N8jKsu1NCE"
  },
  'mYntXSsNnDQ': {
    title: "Pete Rock - Lost Sessions",
    id: "mYntXSsNnDQ",
    url: "https://www.youtube.com/watch?v=mYntXSsNnDQ"
  },
  'isIj3tuQTDY': {
    title: "Glitch Mix",
    id: "isIj3tuQTDY",
    url: "https://www.youtube.com/watch?v=isIj3tuQTDY"
  }
};

const speechArray = {
  'J7GY1Xg6X20': {
    title: "Charlie Chaplin - The Great Dictator",
    id: "J7GY1Xg6X20",
    url: "https://www.youtube.com/watch?v=J7GY1Xg6X20"
  },
  'Ga8tQrG4ZSw': {
    title: "T S Eliot reads his Four Quartets",
    id: "Ga8tQrG4ZSw",
    url: "https://www.youtube.com/watch?v=Ga8tQrG4ZSw"
  },
  'y8HTr-F-FVM': {
    title: "JFK - The Speech That Killed Him",
    id: "y8HTr-F-FVM",
    url: "https://www.youtube.com/watch?v=y8HTr-F-FVM"
  },
  'UF8uR6Z6KLc': {
    title: "Steve Jobs' 2005 Stanford Address",
    id: "UF8uR6Z6KLc",
    url: "https://www.youtube.com/watch?v=UF8uR6Z6KLc"
  },
  '9KvDvRUNw9k': {
    title: "Simon Sinek - How to Find Fulfillment",
    id: "9KvDvRUNw9k",
    url: "https://www.youtube.com/watch?v=9KvDvRUNw9k"
  },
  '3j3_iPskjxk': {
    title: "Full Metal Jacket Opening",
    id: "3j3_iPskjxk",
    url: "https://www.youtube.com/watch?v=3j3_iPskjxk"
  },
  '-pvxKdvuwIw': {
    title: "Pale Blue Dot",
    id: "-pvxKdvuwIw",
    url: "https://www.youtube.com/watch?v=-pvxKdvuwIw"
  },
  'pxBQLFLei70': {
    title: "Admiral McRaven University of Texas Address",
    id: "pxBQLFLei70",
    url: "https://www.youtube.com/watch?v=pxBQLFLei70"
  },
  'tY5It0jnD6M': {
    title: "Black Mirror - 15 Million Merits",
    id: "tY5It0jnD6M",
    url: "https://www.youtube.com/watch?v=tY5It0jnD6M"
  },
  'DLLihqJ22Vo': {
    title: "Adaptation: Intro",
    id: "DLLihqJ22Vo",
    url: "https://www.youtube.com/watch?v=DLLihqJ22Vo"
  },
  'xAhSc6akNPo': {
    title: "A Lesson by Robert McKee on dialogue",
    id: "xAhSc6akNPo",
    url: "https://www.youtube.com/watch?v=xAhSc6akNPo"
  },
  'PgU71nWCNeY': {
    title: "Fight Club Speech",
    id: "PgU71nWCNeY",
    url: "https://www.youtube.com/watch?v=PgU71nWCNeY"
  },
  'bivrs6stgHo': {
    title: "'More Was Never Enough'",
    id: "bivrs6stgHo",
    url: "https://www.youtube.com/watch?v=bivrs6stgHo"
  },
  'Nb9yu6dljAU': {
    title: "There Will Be Blood - Milkshake",
    id: "Nb9yu6dljAU",
    url: "https://www.youtube.com/watch?v=Nb9yu6dljAU"
  },
  'FkJLTGweKl0': {
    title: "Rocky Balboa - speech to his son",
    id: "FkJLTGweKl0",
    url: "https://www.youtube.com/watch?v=FkJLTGweKl0"
  },
  'WINDtlPXmmE': {
    title: "Network - Mad as Hell",
    id: "WINDtlPXmmE",
    url: "https://www.youtube.com/watch?v=WINDtlPXmmE"
  },
  'hopNAI8Pefg': {
    title: "A Few Good Men",
    id: "hopNAI8Pefg",
    url: "https://www.youtube.com/watch?v=hopNAI8Pefg"
  },
  'r0pOE8JlJbI': {
    title: "Richard Dawkins - We are going to Die",
    id: "r0pOE8JlJbI",
    url: "https://www.youtube.com/watch?v=r0pOE8JlJbI"
  },
  '0R3yJA7TnSk': {
    title: "Sam Harris - Reality of your life is Now",
    id: "0R3yJA7TnSk",
    url: "https://www.youtube.com/watch?v=0R3yJA7TnSk"
  },
  'cWXnT6Bwit4': {
    title: "What If? - Jon Jorgenson",
    id: "cWXnT6Bwit4",
    url: "https://www.youtube.com/watch?v=cWXnT6Bwit4"
  },
  'rOX1ETA0eUo': {
    title: "No choices without chances - George the Poet",
    id: "rOX1ETA0eUo",
    url: "https://www.youtube.com/watch?v=rOX1ETA0eUo"
  },
  'NZ4IoOXJiwQ': {
    title: "The Most Astounding Fact - Neil deGrasse Tyson",
    id: "NZ4IoOXJiwQ",
    url: "https://www.youtube.com/watch?v=NZ4IoOXJiwQ"
  },
  'WJtzOD3KbLM': {
    title: "Richard Burton - Under Milk Wood",
    id: "WJtzOD3KbLM",
    url: "https://www.youtube.com/watch?v=WJtzOD3KbLM"
  },
  'sPVWmmVKVk0': {
    title: "Eleanor Roosevelt Speech Human Rights",
    id: "sPVWmmVKVk0",
    url: "https://www.youtube.com/watch?v=sPVWmmVKVk0"
  },
  'MkTw3_PmKtc': {
    title: "Winston S Churchill: Fight on the Beaches",
    id: "MkTw3_PmKtc",
    url: "https://www.youtube.com/watch?v=MkTw3_PmKtc"
  },
  '_SakitCoNYc': {
    title: "Mahatma Gandhi Speech",
    id: "_SakitCoNYc",
    url: "https://www.youtube.com/watch?v=_SakitCoNYc"
  },
  'A26MnVnL8K4': {
    title: "Leonard Nimoy College of Fine Arts Address",
    id: "A26MnVnL8K4",
    url: "https://www.youtube.com/watch?v=A26MnVnL8K4"
  },
  '5ZBuWVvQMn8': {
    title: "Jim Rohn Learn To Master These Skills",
    id: "5ZBuWVvQMn8",
    url: "https://www.youtube.com/watch?v=5ZBuWVvQMn8"
  },
  '9OCOn3yKmwQ': {
    title: "The Watergate Interviews",
    id: "9OCOn3yKmwQ",
    url: "https://www.youtube.com/watch?v=9OCOn3yKmwQ"
  },
  'VnNBbR-JeDQ': {
    title: "Steve Jobs - The Major Thinkers",
    id: "VnNBbR-JeDQ",
    url: "https://www.youtube.com/watch?v=VnNBbR-JeDQ"
  },
  '_fMNIofUw2I': {
    title: "2004 Barack Obama Keynote Speech",
    id: "_fMNIofUw2I",
    url: "https://www.youtube.com/watch?v=_fMNIofUw2I"
  },
  'Bp8aP6pJB1Y': {
    title: "The Dean of Personal Development",
    id: "Bp8aP6pJB1Y",
    url: "https://www.youtube.com/watch?v=Bp8aP6pJB1Y"
  },
  'MOqIotJrFVM': {
    title: "Malala Yousafzai Nobel Peace Prize Speech",
    id: "MOqIotJrFVM",
    url: "https://www.youtube.com/watch?v=MOqIotJrFVM"
  },
  'oJJGuIZVfLM': {
    title: "Severn Cullis-Suzuki at Rio Summit",
    id: "oJJGuIZVfLM",
    url: "https://www.youtube.com/watch?v=oJJGuIZVfLM"
  },
  'Fg0mu32h5IY': {
    title: "Maya Angelou - On the Pulse of Morning",
    id: "Fg0mu32h5IY",
    url: "https://www.youtube.com/watch?v=Fg0mu32h5IY"
  },
  'ov4iyFoKcIs': {
    title: "Dr Maya Angelou Love Liberates",
    id: "ov4iyFoKcIs",
    url: "https://www.youtube.com/watch?v=ov4iyFoKcIs"
  },
  'keCwRdbwNQY': {
    title: "Steve Jobs - Think different",
    id: "keCwRdbwNQY",
    url: "https://www.youtube.com/watch?v=keCwRdbwNQY"
  },
  'UWzNsxRyvew': {
    title: "Warren Buffett - How to Stay Out of Debt",
    id: "UWzNsxRyvew",
    url: "https://www.youtube.com/watch?v=UWzNsxRyvew"
  },
  '5897dMWJiSM': {
    title: "Marcus Aurelius - Lecture on Stoicism",
    id: "5897dMWJiSM",
    url: "https://www.youtube.com/watch?v=5897dMWJiSM"
  },
  'UpiBUXXE8oU': {
    title: "Earl Nightingale - Why do you go to work?",
    id: "UpiBUXXE8oU",
    url: "https://www.youtube.com/watch?v=UpiBUXXE8oU"
  },
  '4IdEjAbH-LA': {
    title: "Earl Nightingale - Imagination Is Everything",
    id: "4IdEjAbH-LA",
    url: "https://www.youtube.com/watch?v=4IdEjAbH-LA"
  },
  '8PaAl51TV1o': {
    title: "30 day Challenge - Earl Nightingale",
    id: "8PaAl51TV1o",
    url: "https://www.youtube.com/watch?v=8PaAl51TV1o"
  },
  '_vmBQvYX8ig': {
    title: "The Key to Happiness - Earl Nightingale",
    id: "_vmBQvYX8ig",
    url: "https://www.youtube.com/watch?v=_vmBQvYX8ig"
  },
  'dFRpjk7seF8': {
    title: "Sadhguru at TED",
    id: "dFRpjk7seF8",
    url: "https://www.youtube.com/watch?v=dFRpjk7seF8"
  },
  'BkvEpoqFx6c': {
    title: "Henry Rollins: The One Decision",
    id: "BkvEpoqFx6c",
    url: "https://www.youtube.com/watch?v=BkvEpoqFx6c"
  },
  'fajfkO_X0l0': {
    title: "Sam Harris: The Self is an Illusion",
    id: "fajfkO_X0l0",
    url: "https://www.youtube.com/watch?v=fajfkO_X0l0"
  },
  'evM1NX3ebFE': {
    title: "Conquer Life's Challenges - Cornel West",
    id: "evM1NX3ebFE",
    url: "https://www.youtube.com/watch?v=evM1NX3ebFE"
  },
  '48wgDP9pc2E': {
    title: "Oprah Winfrey - Power of Belief",
    id: "48wgDP9pc2E",
    url: "https://www.youtube.com/watch?v=48wgDP9pc2E"
  },
  '7t_Uyi9bNS4': {
    title: "Sam Harris on the Illusion of Free Will",
    id: "7t_Uyi9bNS4",
    url: "https://www.youtube.com/watch?v=7t_Uyi9bNS4"
  },
  'ADeoLT0Dz2w': {
    title: "Pat Mullins - The Problem With Rolling",
    id: "ADeoLT0Dz2w",
    url: "https://www.youtube.com/watch?v=ADeoLT0Dz2w"
  },
  'GMWFieBGR7c': {
    title: "Oprah Winfrey - Harvard Commencement",
    id: "GMWFieBGR7c",
    url: "https://www.youtube.com/watch?v=GMWFieBGR7c"
  },
  'kn2Rp51Vpiw': {
    title: "Bryan Cranston's Career Advice",
    id: "kn2Rp51Vpiw",
    url: "https://www.youtube.com/watch?v=kn2Rp51Vpiw"
  },
  'gHbYJfwFgOU': {
    title: "Bill Nye: Creationism Isn't Appropriate For Children",
    id: "gHbYJfwFgOU",
    url: "https://www.youtube.com/watch?v=gHbYJfwFgOU"
  },
  '-ZRLe6jYu0s': {
    title: "'Happiness isn't about what the world gives you'",
    id: "-ZRLe6jYu0s",
    url: "https://www.youtube.com/watch?v=-ZRLe6jYu0s"
  },
  'Tc24RCmvlTU': {
    title: "The Truth About Happiness",
    id: "Tc24RCmvlTU",
    url: "https://www.youtube.com/watch?v=Tc24RCmvlTU"
  },
  'zWjuZ0OvtNU': {
    title: "How To Train Your Brain To Stay Focused",
    id: "zWjuZ0OvtNU",
    url: "https://www.youtube.com/watch?v=zWjuZ0OvtNU"
  },
  'CzSMC5rWvos': {
    title: "Neil deGrasse Tyson: Atheist or Agnostic",
    id: "CzSMC5rWvos",
    url: "https://www.youtube.com/watch?v=CzSMC5rWvos"
  },
  'ouRbkBAOGEw': {
    title: "JFK - We choose to go to the Moon",
    id: "ouRbkBAOGEw",
    url: "https://www.youtube.com/watch?v=ouRbkBAOGEw"
  },
  'IyArUh8eqJ0': {
    title: "JFK/Eisenhower during Cuban Missile Crisis",
    id: "IyArUh8eqJ0",
    url: "https://www.youtube.com/watch?v=IyArUh8eqJ0"
  },
  '0sV3miSCTG0': {
    title: "Amelia Earhart On Women In Flying",
    id: "0sV3miSCTG0",
    url: "https://www.youtube.com/watch?v=0sV3miSCTG0"
  },
  'aaiPkEhB0lY': {
    title: "Audrey Tatou interview",
    id: "aaiPkEhB0lY",
    url: "https://www.youtube.com/watch?v=aaiPkEhB0lY"
  },
  'bHOHi5ueo0A': {
    title: "The laughing heart",
    id: "bHOHi5ueo0A",
    url: "https://www.youtube.com/watch?v=bHOHi5ueo0A"
  },
  'MTPxWkBgW6U': {
    title: "Charles Bukowski on dying and how to write",
    id: "MTPxWkBgW6U",
    url: "https://www.youtube.com/watch?v=MTPxWkBgW6U"
  },
  'JqOqo50LSZ0': {
    title: "Maya Angelou - And Still I Rise",
    id: "JqOqo50LSZ0",
    url: "https://www.youtube.com/watch?v=JqOqo50LSZ0"
  },
  'CN9DN_PImy8': {
    title: "Maya Angelou - The Mask",
    id: "CN9DN_PImy8",
    url: "https://www.youtube.com/watch?v=CN9DN_PImy8"
  },
  'AlVQ7QffzjM': {
    title: "Dougal Wilson on making music videos",
    id: "AlVQ7QffzjM",
    url: "https://www.youtube.com/watch?v=AlVQ7QffzjM"
  },
  '5K_UAowTszU': {
    title: "Richard Linklater on being self-taught ",
    id: "5K_UAowTszU",
    url: "https://www.youtube.com/watch?v=5K_UAowTszU"
  },
  'T74EBhm5IFU': {
    title: "Ellen Hovde & co. on documentaries",
    id: "T74EBhm5IFU",
    url: "https://www.youtube.com/watch?v=T74EBhm5IFU"
  },
  '91uiHjHmEZc': {
    title: "Ridley Scott on filmmaking",
    id: "91uiHjHmEZc",
    url: "https://www.youtube.com/watch?v=91uiHjHmEZc"
  },
  'g9lBlD04sDs': {
    title: "Aaron Draplin on Working with Free Vectors",
    id: "g9lBlD04sDs",
    url: "https://www.youtube.com/watch?v=g9lBlD04sDs"
  },
  'v3vJ5Pvfbzk': {
    title: "Draw Blindfolded - Shantell Martin",
    id: "v3vJ5Pvfbzk",
    url: "https://www.youtube.com/watch?v=v3vJ5Pvfbzk"
  },
  'e80BbX05D7Y': {
    title: "How To Begin Your Presentation - Simon Sinek",
    id: "e80BbX05D7Y",
    url: "https://www.youtube.com/watch?v=e80BbX05D7Y"
  },
  'Ry94tFG4CIM': {
    title: "Do Not Think Too Much - Alan Watts",
    id: "Ry94tFG4CIM",
    url: "https://www.youtube.com/watch?v=Ry94tFG4CIM"
  },
  'kB5UCVW5zj4': {
    title: "Alan Watts - Stop Negative Thoughts",
    id: "kB5UCVW5zj4",
    url: "https://www.youtube.com/watch?v=kB5UCVW5zj4"
  },
  'kiSoxFHyjGY': {
    title: "Dan Rather's account of JFK assasination",
    id: "kiSoxFHyjGY",
    url: "https://www.youtube.com/watch?v=kiSoxFHyjGY"
  },
  '8-lLC4c_Mso': {
    title: "Dan Rather Final Goodbye",
    id: "8-lLC4c_Mso",
    url: "https://www.youtube.com/watch?v=8-lLC4c_Mso"
  },
  'PDv32Oo8PmE': {
    title: "Justin Trudeau speech at Edinburgh University",
    id: "PDv32Oo8PmE",
    url: "https://www.youtube.com/watch?v=PDv32Oo8PmE"
  },
  'xKCuDxpccYM': {
    title: "Elon Musk's Break Down on Climate Change",
    id: "xKCuDxpccYM",
    url: "https://www.youtube.com/watch?v=xKCuDxpccYM"
  },
  'MfXEnPO4R_s': {
    title: "Ludacris Breaks Down His Favorite Rap Lyrics",
    id: "MfXEnPO4R_s",
    url: "https://www.youtube.com/watch?v=MfXEnPO4R_s"
  },
  'b2mMX6vFc4s': {
    title: "George the Poet - My City",
    id: "b2mMX6vFc4s",
    url: "https://www.youtube.com/watch?v=b2mMX6vFc4s"
  },
  'iqm-XEqpayc': {
    title: "Sheryl Sandberg Berkley Speech",
    id: "iqm-XEqpayc",
    url: "https://www.youtube.com/watch?v=iqm-XEqpayc"
  },
  '1hlCEIUATzg': {
    title: "Ellen Page - Time to Thrive Conference",
    id: "1hlCEIUATzg",
    url: "https://www.youtube.com/watch?v=1hlCEIUATzg"
  },
  'c9SUAcNlVQ4': {
    title: "Emma Watson UN address: I'm a Feminist",
    id: "c9SUAcNlVQ4",
    url: "https://www.youtube.com/watch?v=c9SUAcNlVQ4"
  },
  'a7_49EXuLoQ': {
    title: "Mindy Kalin on Growing Up",
    id: "a7_49EXuLoQ",
    url: "https://www.youtube.com/watch?v=a7_49EXuLoQ"
  },
  'YlQzmwBiHdk': {
    title: "Angelina Jolie Honors Agnes Varga",
    id: "YlQzmwBiHdk",
    url: "https://www.youtube.com/watch?v=YlQzmwBiHdk"
  },
  'DVCfFBlKpN8': {
    title: "Nora Ephron - Wellesley College Commencement",
    id: "DVCfFBlKpN8",
    url: "https://www.youtube.com/watch?v=DVCfFBlKpN8"
  },
  'ZPCkfARH2eE': {
    title: "Lupita Nyong'o on self-acceptance",
    id: "ZPCkfARH2eE",
    url: "https://www.youtube.com/watch?v=ZPCkfARH2eE"
  },
  'xHHzHu289Ws': {
    title: "Sarah Key: Private Parts",
    id: "xHHzHu289Ws",
    url: "https://www.youtube.com/watch?v=xHHzHu289Ws"
  },
  'sXfrVdhmilI': {
    title: "Amy Cuddy's Amazing Story",
    id: "sXfrVdhmilI",
    url: "https://www.youtube.com/watch?v=sXfrVdhmilI"
  },
  '1RhbOPFSetE': {
    title: "Dame Stephanie Shirley",
    id: "1RhbOPFSetE",
    url: "https://www.youtube.com/watch?v=1RhbOPFSetE"
  },
  'EZpPgwaNaWI': {
    title: "Billie Jean King: Coming Out",
    id: "EZpPgwaNaWI",
    url: "https://www.youtube.com/watch?v=EZpPgwaNaWI"
  },
  'Vyn_xLrtZaY': {
    title: "Margaret Heffernan",
    id: "Vyn_xLrtZaY",
    url: "https://www.youtube.com/watch?v=Vyn_xLrtZaY"
  },
  'wpv1qtiwdHQ': {
    title: "Mellody Hobson Commencement SC 2015",
    id: "wpv1qtiwdHQ",
    url: "https://www.youtube.com/watch?v=wpv1qtiwdHQ"
  },
  'FDreaW2cEUI': {
    title: "Emilia Earhart on Woman's place in science",
    id: "FDreaW2cEUI",
    url: "https://www.youtube.com/watch?v=FDreaW2cEUI"
  },
  'FIN1F0TyadM': {
    title: "Michelle Obama speech - International Women's Day",
    id: "FIN1F0TyadM",
    url: "https://www.youtube.com/watch?v=FIN1F0TyadM"
  },
  'TIzVOwIuWvQ': {
    title: "Gloria Steinem",
    id: "TIzVOwIuWvQ",
    url: "https://www.youtube.com/watch?v=TIzVOwIuWvQ"
  },
  'xXM4E23Efvk': {
    title: "Hillary Clinton - Womens Rights Are Human Rights",
    id: "xXM4E23Efvk",
    url: "https://www.youtube.com/watch?v=xXM4E23Efvk"
  },
  'IDH4RKX428Y': {
    title: "Aint I A Woman - Sojourner Truth",
    id: "IDH4RKX428Y",
    url: "https://www.youtube.com/watch?v=IDH4RKX428Y"
  },
  'zcbY04JrMaU': {
    title: "Virginia Woolf - Craftsmanship",
    id: "zcbY04JrMaU",
    url: "https://www.youtube.com/watch?v=zcbY04JrMaU"
  },
  '8qEEqAZgULU': {
    title: "Reni Eddo-Lodge: ...Talking to White People About Race",
    id: "8qEEqAZgULU",
    url: "https://www.youtube.com/watch?v=8qEEqAZgULU"
  },
  'D9Ihs241zeg': {
    title: "Chimamanda Ngozi Adichie - The danger of a single story",
    id: "D9Ihs241zeg",
    url: "https://www.youtube.com/watch?v=D9Ihs241zeg"
  },
  'cbecKv2xR14': {
    title: "Maya Angelou: Love Liberates",
    id: "cbecKv2xR14",
    url: "https://www.youtube.com/watch?v=cbecKv2xR14"
  },
  'JMxG0reODQY': {
    title: "Emma Gonzalez on guns and the NRA",
    id: "JMxG0reODQY",
    url: "https://www.youtube.com/watch?v=JMxG0reODQY"
  },
  'IdJbJMUFzZA': {
    title: "Deborah Frances-White",
    id: "IdJbJMUFzZA",
    url: "https://www.youtube.com/watch?v=IdJbJMUFzZA"
  },
  'xAgawjzimjc': {
    title: "Ashley Graham - Plus-size? More Like My Size",
    id: "xAgawjzimjc",
    url: "https://www.youtube.com/watch?v=xAgawjzimjc"
  },
  'iauet4reDn4': {
    title: "My name is Truth: the life of Sojourner Truth",
    id: "iauet4reDn4",
    url: "https://www.youtube.com/watch?v=iauet4reDn4"
  },
  'z-sNlQJTBYA': {
    title: "Janet Mock - Trans people are who they say they are",
    id: "z-sNlQJTBYA",
    url: "https://www.youtube.com/watch?v=z-sNlQJTBYA"
  },
  'mM5ONxQxQu8': {
    title: "Viola Davis speaks at Women's March",
    id: "mM5ONxQxQu8",
    url: "https://www.youtube.com/watch?v=mM5ONxQxQu8"
  },
  '75WFTHpOw8Y': {
    title: "Björk talking about her TV",
    id: "75WFTHpOw8Y",
    url: "https://www.youtube.com/watch?v=75WFTHpOw8Y"
  }
};


// Generate YouTube Players and jump to shared pair logic
function onYouTubeIframeAPIReady() {

  if (beatKey && beatArray[beatKey]) {
    let beatArrayCopy = Object.assign({}, beatArray);
    delete beatArrayCopy[beatKey];
    beatOrder = [beatKey].concat(shuffle(Object.keys(beatArrayCopy)));
  } else {
    beatOrder = shuffle(Object.keys(beatArray));
  }

  if (speechKey && speechArray[speechKey]) {
    let speechArrayCopy = Object.assign({}, speechArray);
    delete speechArrayCopy[speechKey];
    speechOrder = [speechKey].concat(shuffle(Object.keys(speechArrayCopy)));
  } else {
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

  history.replaceState({} , 'Studiowave', '/' );

}

function speechInitialized(e) {
  e.target.setPlaybackQuality('small');
}
function beatInitialized(e) {
  e.target.setPlaybackQuality('small');
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
  console.log('Beat playlist index: ', index);
  const key = beatOrder[index];
  const object = beatArray[key];
  currentBeatId = key;
  if (object) {
    var BeatTitle = document.getElementById("BeatTitle");
    BeatTitle.innerHTML = object.title;
    BeatTitle.href = object.url;
  }
  linkBuilder();
}

function onSpeechStateChange() {
  if (event.data == YT.PlayerState.BUFFERING) {
    event.target.setPlaybackQuality('small');
  }
  const index = speechPlayer.getPlaylistIndex();
  console.log('Speech playlist index: ', index);
  const key = speechOrder[index];
  const object = speechArray[key];
  currentSpeechId = key;
  if (object) {
    var SpeechTitle = document.getElementById("SpeechTitle");
    SpeechTitle.innerHTML = object.title;
    SpeechTitle.href = object.url;
  }
  linkBuilder();
}


// URL jump to shared pair
$.urlParam = function(name) {
  var results = new RegExp('[/?&]' + name + '=([^&#]*)')
                .exec(window.location.href);
  console.log(name);
  console.log(results);
  return (results) ? results[1] : 0;
};


// Share Clipboard
$(document).ready(function(){
  new Clipboard('.sharebutton');
  speechKey = $.urlParam('speech');
  beatKey = $.urlParam('beat');
});

function linkBuilder() {
  var link = 'www.studiowave.fm/' + '?beat=' + currentBeatId + '&speech=' + currentSpeechId;
  $('.sharebutton').attr('data-clipboard-text', link);
}

var clipboard = new Clipboard('.sharebutton');
clipboard.on('success', function(e) {
  console.info('Text:', e.text);
});


// Tooltip
$('.sharebutton').on('click', function () {
  var $this = $('#tooltip').toggleClass("override");
  setTimeout(function () {
    $this.toggleClass("override");
  }, 1000);
});


// RangeSlider
$(document).ready(function(){
  $('input[type="range"]').rangeslider({polyfill: false});
  $('input[type="range"]').rangeslider('update', true);
});


// YouTube Volume
$('#beatslider').on('change', function () {
  beatPlayer.setVolume($(this).val());
});

$('#speechslider').on('change', function () {
  speechPlayer.setVolume($(this).val());
});


// Play & Pause
$('#playpausebutton img').on('click', function () {
  if (!beatPlayer) return;
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

  if (beatPlayerState == 1) {
    beatPlayer.pauseVideo();
    speechPlayer.pauseVideo();
  } else {
    beatPlayer.playVideo();
    speechPlayer.playVideo();
  }
});


// Next video
$('#beatreset img').on('click', function () {
  if (!beatPlayer) return;
  if (beatOrder[beatOrder.length - 1] === currentBeatId) {
    beatPlayer.playVideoAt(0);
  } else {
    beatPlayer.nextVideo();
  }
  if (!isPlaying) {
    beatPlayer.pauseVideo();
    speechPlayer.pauseVideo();
  }
});

$('#speechreset img').on('click', function () {
  if (!speechPlayer) return;
    if (speechOrder[speechOrder.length - 1] === currentSpeechId) {
      speechPlayer.playVideoAt(0);
    } else {
      speechPlayer.nextVideo();
    }
    if (!isPlaying) {
      speechPlayer.pauseVideo();
      beatPlayer.pauseVideo();
    }
});


// if agent detected mobile: hideClass small_screen and show mobile_device
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  $('.mobile_device').css('display', 'block');
  $('.small_screen').css('display', 'none');
}

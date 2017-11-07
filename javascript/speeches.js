// Collect all the beats into an array

const SpeechArray = [
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

function shuffleSpeechArray() {

  const a = speechArray;

  var j, x, i;
  for (i = a.length; i; i--) {
    j = Math.floor(Math.random() * i);
    x = a[i - 1];
    a[i - 1] = a[j];
    a[j] = x;
  }

  return a;

}

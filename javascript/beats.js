// Collect all the beats into an array

const BeatArray = [
  {
    "title": "Lifted (Chillwave - Retrowave - Synthwave Mix)",
    "url": "https://www.youtube.com/watch?v=3ZdSDUyxFmc"
    "id": "1"
  },
  {
    "title": "24/7 Lofi Hiphop Radio",
    "url": "https://www.youtube.com/watch?v=ezvTXN6vXRM"
    "id": "2"
  },
  {
    "title": "24/7 lofi hip hop radio",
    "url": "https://www.youtube.com/watch?v=6rReMbO42uE"
    "id": "3"
  },
  {
    "title": "Tycho - Dive",
    "url": "https://www.youtube.com/watch?v=Z6ih1aKeETk"
    "id": "4"
  },
  {
    "title": "Turquoise Memories - Glowing Dreams Mix",
    "url": "https://www.youtube.com/watch?v=fQ5cb7A1mjA"
    "id": "5"
  },
  {
    "title": "Future Vision",
    "url": "https://www.youtube.com/watch?v=prHFVUaL_bU"
    "id": "6"
  },
  {
    "title": "Lofi Hip Hop Radio 24/7",
    "url": "https://www.youtube.com/watch?v=AQBh9soLSkI"
    "id": "7"
  },
  {
    "title": "Home - Odyssey",
    "url": "https://www.youtube.com/watch?v=gJOfuGj-n9M"
    "id": "8"
  },
  {
    "title": "Jon Hopkins - Open Eye Signal",
    "url": "https://www.youtube.com/watch?v=Q04ILDXe3QE"
    "id": "9"
  },
  {
    "title": "Vessels - Dilate",
    "url": "https://www.youtube.com/watch?v=nT6NWc3J0-o&list=PLJpTOskHtiumaSrLawxxNSyHLgauGl85u"
    "id": "10"
  },
];

function shuffleBeatArray() {

  const a = beatArray;

  var j, x, i;
  for (i = a.length; i; i--) {
    j = Math.floor(Math.random() * i);
    x = a[i - 1];
    a[i - 1] = a[j];
    a[j] = x;
  }

  return a;

}

// Collect all the beats into an array

const BeatArray = [
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

function createListElementsFromArray(a) {

  return a.map(function (el) {

    return "<li class='beat_item'><a href='"+ el.url + "' target='_blank'>" + el.name + "</a></li>"

  });

}


const listElements = createListElementsFromArray(shuffleBeatArray());
$('ul#beats').html(listElements);

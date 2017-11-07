$(document).ready(function(){
  // Initialize a new plugin instance for all
  // e.g. $('input[type="range"]') elements.
  $('input[type="range"]').rangeslider({polyfill: false});

  // Destroy all plugin instances created from the
  // e.g. $('input[type="range"]') elements.
  // $('input[type="range"]').rangeslider('destroy');

  // Update all rangeslider instances for all
  // e.g. $('input[type="range"]') elements.
  // Usefull if you changed some attributes e.g. `min` or `max` etc.
  $('input[type="range"]').rangeslider('update', true);
})


if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 // some code..
  $('.mobile_device').css('display', 'block');
  $('.small_screen').css('display', 'none');
}

// if it is a agent detected mobile hideClass small_screen and show mobile_device

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

    return "<li data-id='" + el.id + "' class='beat_item'><a href='"+ el.url + "' target='_blank'>" + el.title + "</a></li>";

  });

}


const listElements = createListElementsFromArray(shuffleBeatArray());
$('ul#beats').html(listElements);

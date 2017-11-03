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

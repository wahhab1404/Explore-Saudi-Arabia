console.log('js loaded');

// ############################################################
// ######################## Applied JS ########################
// ############################################################

// Using a Flickity carousel with jQuery
// Initialization for carousel just attaches like any other jQuery method
// It works very similar to how you would define multiple CSS property/value pairs with the .css() method
// Check out the JSON notation for the options
$('.carousel-container').flickity({
  // options
  autoPlay: 2000,
  cellAlign: 'left',
  contain: true,
  setGallerySize: false,
  wrapAround: true
});

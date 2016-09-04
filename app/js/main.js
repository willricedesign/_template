$(document).ready(function(){
  $('.project-images').slick({
  	dots: true,
  	nextArrow: '<div data-role="none" class="project-button project-next" aria-label="Next" tabindex="0" role="button">Test</div>',
  	prevArrow: '<div data-role="none" class="project-button project-prev" aria-label="Previous" tabindex="0" role="button">Prev</div>',
  });

  
});

$( ".project-info-button" ).click(function() {
  $( ".project-description-frame" ).toggleClass( "project-active" );
  $( ".project-info-button" ).toggleClass( "project-info-button-active" );
  console.log("Test");
});

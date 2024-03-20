/*here this javascript is for controlling the slideshow functionality and navigation in html*/

let slideIndex = 1;
showSlides(slideIndex);


// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
//n here displays the index of slide
function showSlides(n) {
  let i;
  //select of elements with class name myslide and store in slides variable
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  //effectively hiding all the slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  //effectively deacticating current selected thumbnail/remove active class from thumbnails thus restoring their property
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  //now here we can set current slide to block display property
  //also change the current thumbnail status to active
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  //this set the caption text to thealt text of the active thumbnail image
  captionText.innerHTML = dots[slideIndex-1].alt;
}
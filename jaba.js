// display the first slide
let slideIndex = 1;
showSlides(slideIndex);

//navigate to the next or previous slide
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//main function to display slides
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
 
  //If the next slide is beyond the last one, go to the first slide
  if (n > slides.length) {slideIndex = 1}
  
  //If the previous slide is before the first one, go to the last slide
  if (n < 1) {slideIndex = slides.length}

   // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
 
  //display the current slide
  slides[slideIndex-1].style.display = "block";  
 
}
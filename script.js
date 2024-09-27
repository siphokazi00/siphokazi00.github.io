const text = "hi, sphow here...\nwelcome to my portfolio :)";
let index = 0;
const speed = 100;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = typeWriter;

/*var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}*/

var slideIndex = 0;
var slideshowStarted = false; // Keeps track of whether the slideshow has started

// Function to start slideshow on arrow click
function startSlideshow(n) {
    if (!slideshowStarted) {
        showSlidesAuto(); // Start the slideshow
        slideshowStarted = true; // Prevent multiple triggers
    }
    plusSlides(n); // Navigate to the next or previous slide
}

// Next/previous controls
function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

// Function to show slides and navigate
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) { slideIndex = 1 }  // Reset to first slide
    if (n < 1) { slideIndex = slides.length }  // Set to last slide

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Hide all slides
    }

    slides[slideIndex - 1].style.display = "block";  // Show the current slide
}

// Function to auto start the slideshow
function showSlidesAuto() {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Hide all slides
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }

    slides[slideIndex - 1].style.display = "block";  // Show the current slide

    setTimeout(showSlidesAuto, 2000); // Change image every 2 seconds
}

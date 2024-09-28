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

window.onload = function() {
    const canvas = document.getElementById('smileyCanvas');
    const ctx = canvas.getContext('2d');

    // Function to draw the face outline
    function drawFace() {
        // Draw the face (circle outline only)
        ctx.beginPath();
        ctx.arc(100, 100, 80, 0, Math.PI * 2, true); // Outer circle (face)
        ctx.strokeStyle = 'forestgreen'; // Forestgreen outline
        ctx.lineWidth = 5; // Set the thickness of the outline
        ctx.stroke(); // Only draw the outline, no fill

        // Draw the smile
        ctx.beginPath();
        ctx.arc(100, 110, 50, 0, Math.PI, false); // Smile (bottom half of a circle)
        ctx.strokeStyle = 'forestgreen';
        ctx.lineWidth = 3;
        ctx.stroke(); // Stroke the smile
    }

    // Function to draw the eyes (open)
    function drawEyes(open = true) {
        ctx.clearRect(40, 60, 120, 40); // Clear the area where the eyes are

        if (open) {
            // Draw open eyes
            ctx.beginPath();
            ctx.arc(65, 80, 10, 0, Math.PI * 2, true); // Left eye
            ctx.arc(135, 80, 10, 0, Math.PI * 2, true); // Right eye
            ctx.fillStyle = 'forestgreen'; // Forestgreen eyes
            ctx.fill();
        } else {
            // Draw closed eyes (blinking)
            ctx.beginPath();
            ctx.moveTo(55, 80);
            ctx.lineTo(75, 80); // Left eye (line)
            ctx.moveTo(125, 80);
            ctx.lineTo(145, 80); // Right eye (line)
            ctx.strokeStyle = 'forestgreen'; // Forestgreen lines for blinking
            ctx.lineWidth = 2;
            ctx.stroke();
        }
    }

    // Draw the initial smiley face
    drawFace();
    drawEyes();

    // Blink the eyes at regular intervals
    setInterval(function() {
        drawEyes(false); // Close the eyes (blink)
        setTimeout(function() {
            drawEyes(true); // Open the eyes after a short delay
        }, 200); // Blink duration
    }, 3000); // Blink every 3 seconds
};

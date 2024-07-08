// Get the form element
const form = document.getElementById('form');

// Add an event listeneer for the submit event
form.addEventListener('submit', (e) => {
    // Prevent the form from submitting
    event.preventDefault();

// Get the form data
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const message = document.getElementById('message').value;

// Create a JSON object with the form data
const formData = {
    name,
    email,
    message
};

// Use the fetch API to send a POST request to the server
fetch('/contact', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
})
.then(response => response.json())
.then(data => {
    console.log(data);
    // Display a success message
    alert('Message sent successfully!');
})
.catch((error) => {
    console.error(error);
    // Display an error message
    alert('Error sending message. Please try again later.');
});
});

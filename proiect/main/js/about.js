let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 45.663984, lng: 25.579619 },
    zoom: 18,
  });
}

initMap();

// Temporary storage for submitted messages
const messages = [];

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");
    const messageContainer = document.createElement("div");
    messageContainer.className = "confirmation-message";
    form.appendChild(messageContainer);

    // Handle form submission
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the form from reloading the page

        // Get form data
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Check if all fields are filled
        if (!name || !email || !message) {
            messageContainer.textContent = "Please fill in all fields.";
            messageContainer.style.color = "red";
            return;
        }

        // Add the message to the temporary storage
        messages.push({ name, email, message });
        console.log("Messages:", messages); // Display the messages in the console for debugging

        // Clear the form fields
        form.reset();

        // Show confirmation message
        messageContainer.textContent = "Thank you! Your message has been received.";
        messageContainer.style.color = "green";

        // Hide the confirmation message after 3 seconds
        setTimeout(() => {
            messageContainer.textContent = "";
        }, 3000);
    });
});
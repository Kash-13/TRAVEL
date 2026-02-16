// Image Slider (Home Page)
const images = [
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34", // Paris
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", // Maldives
    "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59", // New York
    "https://images.unsplash.com/photo-1505060897704-1c9e3c8f7d2f"  // Tokyo
];

let index = 0;
const slideImage = document.getElementById("slideImage");

if (slideImage) {
    setInterval(() => {
        index = (index + 1) % images.length;
        slideImage.src = images[index];
    }, 3000);
}

// Date Validation
const form = document.getElementById("bookingForm");
const travelDate = document.getElementById("travelDate");
const errorMsg = document.getElementById("errorMsg");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const selectedDate = new Date(travelDate.value);
        const today = new Date();

        if (selectedDate <= today) {
            errorMsg.textContent = "Please select a future date!";
        } else {
            errorMsg.textContent = "";
            alert("Booking Successful!");
            form.reset();
        }
    });
}

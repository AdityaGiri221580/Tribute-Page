// Example JavaScript to enhance the page, like adding a simple interaction
document.addEventListener('DOMContentLoaded', function() {
    // Alert when the page is fully loaded
    alert("Welcome to the Tribute Page of Albert Einstein!");

    // Change background color when clicking on the biography section
    const biographySection = document.querySelector('.biography');
    biographySection.addEventListener('click', function() {
        biographySection.style.backgroundColor = "#e0f7fa";
    });
});

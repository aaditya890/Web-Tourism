document.addEventListener("DOMContentLoaded", function() {
    // Wait for the DOM to be fully loaded
    const logoContainer = document.getElementById("logo-container");
    const mainContent = document.getElementById("main-content");

    // Set a delay to hide the logo and show the main content
    setTimeout(() => {
        // Fade out the logo
        logoContainer.classList.add("opacity-0");
        
        // Wait for the fade-out to complete, then hide the logo container and show the main content
        setTimeout(() => {
            logoContainer.classList.add("hidden");
            mainContent.classList.add("opacity-100");
        }, 1000); // Match this timing to the duration in your Tailwind CSS transition
    }, 2000); // Adjust the delay time to control how long the logo is displayed before fading out
});
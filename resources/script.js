document.addEventListener("DOMContentLoaded", () => {
    const nameElement = document.getElementById("name");
    const roleElement = document.getElementById("role");

    const name = "Jonathan Edwards";
    const roles = ["a Mechanical Engineer", "a Web Developer", "an Ethical Hacker"];
    let nameIndex = 0, roleIndex = 0;

    function typeEffect() {
        if (nameIndex < name.length) {
            nameElement.innerHTML += name.charAt(nameIndex++);
            setTimeout(typeEffect, 100);
        } else {
            setInterval(() => {
                roleElement.innerHTML = roles[roleIndex];
                roleIndex = (roleIndex + 1) % roles.length;
            }, 2000);
        }
    }

    typeEffect();
});

// Get the video element and button
const video = document.getElementById('arduino-video');
const playButton = document.getElementById('play-video-btn');

// Ensure the video is muted when played
video.muted = true;  // Start muted by default

// Add click event listener to the button
playButton.addEventListener('click', () => {
    // Play the video
    if (video.paused) {
        video.play();
        playButton.textContent = "Pause Project"; // Change button text
    } else {
        video.pause();
        playButton.textContent = "View Project"; // Reset button text
    }
});

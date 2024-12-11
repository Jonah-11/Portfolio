// particles-config.js
particlesJS("particles-js", {
    particles: {
        number: {
            value: 100,  // Number of particles
            density: {
                enable: true,
                value_area: 800  // Density of particles
            }
        },
        color: {
            value: "#ffffff"  // Color of particles (white)
        },
        shape: {
            type: "circle",  // Shape of particles
            stroke: {
                width: 0,
                color: "#000000"
            }
        },
        opacity: {
            value: 0.5,  // Opacity of particles
            random: false
        },
        size: {
            value: 2,  // Size of the particles
            random: true  // Random size variation
        },
        line_linked: {
            enable: false  // Disables lines between particles
        },
        move: {
            enable: true,
            speed: 2,  // Movement speed
            direction: "none",  // No specific direction
            random: true,
            straight: false,
            out_mode: "out",  // Make particles exit the screen instead of staying
            bounce: false
        }
    },
    interactivity: {
        detect_on: "canvas",  // Particle interaction settings
        events: {
            onhover: {
                enable: true,
                mode: "grab"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true  // Resize particles when resizing the window
        }
    },
    retina_detect: true  // Enable retina display
});

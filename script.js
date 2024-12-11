document.addEventListener("DOMContentLoaded", () => {
    const nameElement = document.getElementById("name");
    const roleElement = document.getElementById("role");

    // Type effect for name
    const name = "Jonathan Edwards";
    let nameIndex = 0;

    function typeName() {
        if (nameIndex < name.length) {
            nameElement.innerHTML += name.charAt(nameIndex);
            nameIndex++;
            setTimeout(typeName, 100); // Speed of typing
        } else {
            // After name is typed, cycle through roles
            setTimeout(changeRole, 1000);
        }
    }

    // Change role text after name typing completes
    const roles = ["a Mechanical Engineer", "a Web Developer", "an Ethical Hacker"];
    let roleIndex = 0;

    function changeRole() {
        roleElement.innerHTML = roles[roleIndex];
        roleIndex = (roleIndex + 1) % roles.length; // Cycle through roles
        setTimeout(changeRole, 2000); // Change role every 2 seconds
    }

    typeName();
});

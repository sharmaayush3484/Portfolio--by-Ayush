// typed.js animation
var typed = new Typed('#element', {
    strings: ['Web Developer', 'Problem Solver'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});

// Show/Hide Projects
const showProjectsButton = document.getElementById('showProjects');
const projectsList = document.getElementById('projectsList');

showProjectsButton.addEventListener('click', () => {
    if (projectsList.style.display === 'none' || projectsList.style.display === '') {
        projectsList.style.display = 'block';
    } else {
        projectsList.style.display = 'none';
    }
});

// Download Resume
document.getElementById('downloadResumeBtn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = ''; // Update this path
    link.download = 'Ayush_Resume.pdf';
    link.click();
});
document.addEventListener("DOMContentLoaded", () => {
    var typed = new Typed("#element", {
        strings: ["Web Developer", "Graphic Designer", "Animator"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
    });

    const form = document.getElementById("queryForm");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Query submitted successfully!");
        form.reset();
    });
});

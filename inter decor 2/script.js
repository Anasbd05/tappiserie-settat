const projectsContainer = document.querySelector('.prjcts-cont');
const projects = Array.from(projectsContainer.querySelectorAll('.project'));
const nextBtn = document.getElementById('nextBtn');
const backBtn = document.getElementById('backBtn');
const backBtn2 = document.getElementById('backBtn2');
const dots = Array.from(document.querySelectorAll('.dot'));
let currentIndex = 0;
const visibleProjects = 2; // Show two projects at a time

function showProjects() {
    // Hide all projects
    projects.forEach(project => project.style.display = 'none');
    
    // Show the current set of projects
    for (let i = currentIndex; i < currentIndex + visibleProjects; i++) {
        if (projects[i]) {
            projects[i].style.display = 'block';
        }
    }
    
    // Update the active dot
    updateActiveDot();
}

function updateActiveDot() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === Math.floor(currentIndex / visibleProjects));
    });
}

function nextProject() {
    // Move to the next set of projects
    currentIndex += visibleProjects;
    
    // If the end is reached, go back to the start
    if (currentIndex >= projects.length) {
        currentIndex = 0;
    }
    
    showProjects();
}

function previousProject() {
    // Move to the previous set of projects
    currentIndex -= visibleProjects;
    
    // If the beginning is reached, go to the last set
    if (currentIndex < 0) {
        currentIndex = Math.max(0, projects.length - visibleProjects);
    }
    
    showProjects();
}

// Initial display
showProjects();

// Event listeners for the "Next" and "Back" buttons
nextBtn.addEventListener('click', nextProject);
backBtn.addEventListener('click', previousProject);
backBtn2.addEventListener('click', previousProject);

let toggleBtn = document.querySelector(".toggle-menu")
let tLinks = document.querySelector(".sidebar")

toggleBtn.onclick = function(){
    this.classList.toggle('menu-active')
    tLinks.classList.toggle("open")
}
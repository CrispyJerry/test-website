const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");

function toggleSidebar() {
    sidebar.classList.toggle("active");
    hamburger.classList.toggle("active");
}

hamburger.addEventListener("click",toggleSidebar);

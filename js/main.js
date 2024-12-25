// Toggle class active
const menu = document.getElementById("menu");
const navList = document.querySelector(".nav-list");

menu.onclick = () => {
  navList.classList.toggle("active");
};

// Click outside the sidebar to remove the nav
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navList.contains(e.target)) {
    navList.classList.remove("active");
  }
});

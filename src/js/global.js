// Navigation
const menuButton = document.getElementById("menu")
menuButton?.addEventListener("click", e => {
    const navList = document.querySelector(".navbar__nav");
    const navbar = document.querySelector(".navbar");
    navList.classList.toggle("show");
    navbar.classList.toggle("show");
    menuButton.classList.toggle("active")
})



// ===== Handle Modals =====
const modals = document.querySelectorAll(".modal");
const closeModalButtons = document.querySelectorAll(".modal__header__close-btn");
// Close all modals
function closeAllModals() {
    modals.forEach(modal => {
        modal.classList.remove("show");
    })
}

closeModalButtons.forEach(button => {
    button.addEventListener("click", closeAllModals);
})
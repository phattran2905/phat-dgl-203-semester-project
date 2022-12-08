// Navigation
const menuButton = document.getElementById("menu")
menuButton.addEventListener("click", e => {
    
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
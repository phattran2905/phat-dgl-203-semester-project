const modals = document.querySelectorAll(".modal");
const closeModalButtons = document.querySelectorAll(".modal__header__close-btn");
const pokemonCards = document.querySelectorAll(".card.hoverable");

// Close all modals
function closeAllModals() {
    modals.forEach(modal => {
        modal.classList.remove("show");
    })
}
closeModalButtons.forEach(button => {
    button.addEventListener("click", closeAllModals);
})

// Open Pokemon Modal
pokemonCards.forEach((element) => {
	element.addEventListener("click", (e) => {
        const pokemonModal = document.getElementById("pokemon-modal");
        pokemonModal.classList.add("show");
	});
});

// Open Feed Modal
const openUseItemsModalButton = document.getElementById("open-use-items-modal-btn")
const useItemsModal = document.getElementById("use-items-modal");
openUseItemsModalButton.addEventListener('click', e=> {
    closeAllModals();
    useItemsModal.classList.add("show");
})
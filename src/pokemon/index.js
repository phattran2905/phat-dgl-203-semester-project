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

// Open Use items Modal
const openUseItemsModalButton = document.getElementById("open-use-items-modal-btn")
const useItemsModal = document.getElementById("use-items-modal");
openUseItemsModalButton.addEventListener('click', e=> {
    closeAllModals();
    useItemsModal.classList.add("show");
})

// Show content for items
const openConsumableBtn = document.getElementById("open-consumable-items");
const openMysticBtn = document.getElementById("open-mystic-items");
const consumableItemsContainer = document.getElementById("consumable-items");
const mysticItemsContainer = document.getElementById("mystic-items");

openConsumableBtn.addEventListener('click', e => {
    consumableItemsContainer.classList.add("show");
    openConsumableBtn.parentElement.classList.add("active");
    
    mysticItemsContainer.classList.remove("show");
    openMysticBtn.parentElement.classList.remove("active");
})

openMysticBtn.addEventListener('click', e => {
    mysticItemsContainer.classList.add("show");
    openMysticBtn.parentElement.classList.add("active");

    consumableItemsContainer.classList.remove("show");
    openConsumableBtn.parentElement.classList.remove("active");
})

// Select items
const itemInputs = document.querySelectorAll("input.item-amount");

itemInputs.forEach(itemInput => {
    itemInput.addEventListener('change', e => {
        const {value, id} = e.target;
        const containerId = `item-${id.split("-amount")[0]}`;
        const containerElement = document.getElementById(containerId);

        if (value > 0) {
            containerElement.classList.add("selected");
        } else {
            containerElement.classList.remove("selected");
        }
    })
})
const pokeballTabLink = document.getElementById("tab-pokeball-link");
const mysticTabLink = document.getElementById("tab-mystic-link");
const consumableTabLink = document.getElementById("tab-consumable-link");
// Tabs
const pokeballTab = document.getElementById("pokeball-items");
const mysticTab = document.getElementById("mystic-items");
const consumableTab = document.getElementById("consumable-items");
// Cards
const pokeballCards = document.querySelectorAll(".hoverable.pokeball-item");
const mysticCards = document.querySelectorAll(".hoverable.mystic-item");
const consumableCards = document.querySelectorAll(".hoverable.consumable-item");

// Modal
const pokeballModal = document.getElementById("pokeball-modal");
const mysticItemModal = document.getElementById("mystic-item-modal");
const consumableItemModal = document.getElementById("consumable-item-modal");
const useMysticItemModal = document.getElementById("use-mystic-item-modal");

// Open Modal BUttons
const openUseMysticModalBtn = document.getElementById("open-use-mystic-item-modal-btn");

// Back Buttons
const backToMysticButton = document.getElementById("back-to-mystic-modal-btn");

function closeAllTabs() {
	pokeballTab.classList.remove("show");
	mysticTab.classList.remove("show");
	consumableTab.classList.remove("show");

	const activeTab = document.querySelector(".tabs__list__item.active");
	if (activeTab) {
		activeTab.classList.remove("active");
	}
}

function main() {
	// Tab links
	pokeballTabLink.addEventListener("click", (e) => {
		closeAllTabs();
		pokeballTab.classList.add("show");
		e.target.parentNode.classList.add("active");
	});
	mysticTabLink.addEventListener("click", (e) => {
		closeAllTabs();
		mysticTab.classList.add("show");
		e.target.parentNode.classList.add("active");
	});
	consumableTabLink.addEventListener("click", (e) => {
		closeAllTabs();
		consumableTab.classList.add("show");
		e.target.parentNode.classList.add("active");
	});

	// Modal
	// Open Pokeball Modal
	pokeballCards.forEach((element) => {
		element.addEventListener("click", (e) => {
			pokeballModal.classList.add("show");
		});
	});
	// Open Mystic Item Modal
	mysticCards.forEach((element) => {
		element.addEventListener("click", (e) => {
			mysticItemModal.classList.add("show");
		});
	});
	// Open Use Mystic Item Modal
    openUseMysticModalBtn.addEventListener("click", (e) => {
		closeAllModals();
        useMysticItemModal.classList.add("show");
    });

	// Back buttons
	// Back to Mystic modal
	backToMysticButton.addEventListener("click", (e) => {
		closeAllModals();
		mysticItemModal.classList.add("show");
	});
}

main();

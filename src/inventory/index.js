const pokeballTabLink = document.getElementById("tab-pokeball-link");
const mysticTabLink = document.getElementById("tab-mystic-link");
const consumableTabLink = document.getElementById("tab-consumable-link");
// Tabs
const pokeballTab = document.getElementById("pokeball-items");
const mysticTab = document.getElementById("mystic-items");
const consumableTab = document.getElementById("consumable-items");
// Cards
const pokeballCards = document.querySelectorAll(".pokeball-item");

// Modal
const pokeballModal =document.getElementById("pokeball-modal");

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

	// Cards
	// Open Pokeball Modal
	pokeballCards.forEach((element) => {
		element.addEventListener("click", (e) => {
			pokeballModal.classList.add("show");
		});
	});
}

main();

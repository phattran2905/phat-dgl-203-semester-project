const battleContentElement = document.querySelectorAll(".battle");
const inBattleElement = document.getElementById("in-battle");

// Hide all battle content
function openBattleContentById(elementId) {
	battleContentElement.forEach((element) => {
		if (element.id == elementId) {
			element.classList.add("show");
		} else {
			element.classList.remove("show");
		}
	});
}

// Select Pokemon
const pokemonElements = document.querySelectorAll(".select__pokemon");

// Unselect all pokemon
function unselectAllPokemon() {
	pokemonElements.forEach((pkm) => pkm.classList.remove("selected"));
}

pokemonElements.forEach((pkm) => {
	pkm.addEventListener("click", () => {
		unselectAllPokemon();
		pkm.classList.add("selected");
	});
});

const battleBtn = document.getElementById("battle-btn");
battleBtn.addEventListener("click", () => {
	const selectedPokemon = document.querySelector(".select__pokemon.selected");
	if (selectedPokemon) {
		openBattleContentById(inBattleElement.id);
	}
});

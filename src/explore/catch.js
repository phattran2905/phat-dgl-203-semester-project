const catchBlock = document.getElementById("catch");
const usePokeballBtn = document.getElementById("use-pokeball-btn");
const selectPokeballBtns = document.querySelectorAll(".items-list__item.pokeball");

// Results
const resultSuccessBlock = document.getElementById("result-success")

// Remove the class 'selected' for all the Pokeball
function unselectAllPokeball () {
    selectPokeballBtns.forEach((button) => {
        button.classList.remove("selected");
    })
}

// Add class 'selected' for a Pokeball
selectPokeballBtns.forEach((button) => {
	button.addEventListener("click", () => {
        unselectAllPokeball();
		button.classList.add("selected");
	});
});

// Show the result
usePokeballBtn.addEventListener("click", () => {
    catchBlock.classList.remove("show");
    resultSuccessBlock.classList.add("show");
});

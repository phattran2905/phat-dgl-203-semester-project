const usePokeballBtn = document.getElementById("use-pokeball-btn");
const selectPokeballBtns = document.querySelectorAll(".items-list__item.pokeball");

function unselectAllPokeball () {
    selectPokeballBtns.forEach((button) => {
        button.classList.remove("selected");
    })
}

selectPokeballBtns.forEach((button) => {
	button.addEventListener("click", () => {
        unselectAllPokeball();
		button.classList.add("selected");
	});
});

usePokeballBtn.addEventListener("click", (e) => {});

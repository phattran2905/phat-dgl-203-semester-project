const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("close-modal-btn");
const pokemonCards = document.querySelectorAll(".card.hoverable");

pokemonCards.forEach(element => {
    element.addEventListener("click", (e) => {
        modal.classList.add("show");
    });
})

closeModalBtn.addEventListener("click", (e) => {
	modal.classList.remove("show");
});

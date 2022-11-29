const pokeballTabLink = document.getElementById("tab-pokeball-link");
const mysticTabLink = document.getElementById("tab-mystic-link");
const consumableTabLink = document.getElementById("tab-consumable-link");

const pokeballTab = document.getElementById("pokeball-items");
const mysticTab = document.getElementById("mystic-items");
const consumableTab = document.getElementById("consumable-items");

function closeAllTabs() {
    pokeballTab.classList.remove('show');
    mysticTab.classList.remove('show');
    consumableTab.classList.remove('show');

    const activeTab = document.querySelector(".tabs__list__item.active");
    if (activeTab) {
        activeTab.classList.remove("active");
    }
}

function main() {
    pokeballTabLink.addEventListener('click', e => {
        closeAllTabs()
        pokeballTab.classList.add('show');
        e.target.parentNode.classList.add('active');
    })
    mysticTabLink.addEventListener('click', e => {
        closeAllTabs()
        mysticTab.classList.add('show');
        e.target.parentNode.classList.add('active');
    })
    consumableTabLink.addEventListener('click', e => {
        closeAllTabs()
        consumableTab.classList.add('show');
        e.target.parentNode.classList.add('active');
    })
}

main()
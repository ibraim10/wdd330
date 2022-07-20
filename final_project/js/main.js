'use strict';
const API = "https://pokeapi.co/api/v2/pokemon/";

const card = document.querySelector('[data-card]');
const pokeName = document.querySelector('[data-name]');
const img = document.querySelector('[data-img]');
const imgContainer = document.querySelector('[data-img-container]');
const id = document.querySelector('[data-id]');
const types = document.querySelector('[data-types]');
const stats = document.querySelector('[data-stats]');

const colors = {
    electric: '#FFEA70',
    normal: '#B09398',
    fire: '#FF675C',
    water: '#0596C7',
    ice: '#AFEAFD',
    rock: '#999799',
    flying: '#7AE7C7',
    grass: '#4A9681',
    psychic: '#FFC6D9',
    ghost: '#561D25',
    bug: '#A2FAA3',
    poison: '#795663',
    ground: '#D2B074',
    dragon: '#DA627D',
    steel: '#1D8A99',
    fighting: '#2F2F2F',
    default: '#2A1A1F',
};

const searchPokemon = event => {
    event.preventDefault();
    const {value} = event.target.pokemon;
    fetch(`${API}${value.toLowerCase()}`)
        .then(data => data.json())
        .then(response => pokemonData(response))
        .catch(err => notFound())
}

const pokemonData = data => {
    const sprite = data.sprites.front_default;
    const{stats, types} = data;
    //console.log(data);
    pokeName.textContent = data.name;
    img.setAttribute('src', sprite);
    id.textContent = `N° ${data.id}`
    setBackgroundColor(types);
    displayTypes(types);
    displayStats(stats);
}

const setBackgroundColor = types => {
    const color1 = colors[types[0].type.name];
    const color2 = types[1] ? colors[types[1].type.name] : colors.default;
    img.style.background = `radial-gradient(${color2} 33%, ${color1} 33%)`;
    img.style.backgroundSize = '2px 5px';
}

const displayTypes = pokeTypes => {
    types.innerHTML = "";
    pokeTypes.forEach(type => {
        const typeTextElement = document.createElement("div");
        typeTextElement.style.color = colors[type.type.name];
        typeTextElement.textContent = type.type.name;
        types.appendChild(typeTextElement);
    });
}

const displayStats = pokeStats => {
    stats.innerHTML = '';
    pokeStats.forEach(stat => {
        const statElement = document.createElement("div");
        const statElementName = document.createElement("div");
        const statElementAmount = document.createElement("div");
        statElementName.textContent = stat.stat.name;
        statElementAmount.textContent = stat.base_stat;
        statElement.appendChild(statElementName);
        statElement.appendChild(statElementAmount);
        stats.appendChild(statElement);
    });
}

const notFound = () => {
    pokeName.textContent = 'Pokemon not found';
    img.setAttribute('src', 'img/pokeball.png');
    img.style.background =  '#fff';
    types.innerHTML = '';
    stats.innerHTML = '';
    id.textContent = '';
}
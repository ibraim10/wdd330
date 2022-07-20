'use strict';
const pokemonDiv = document.querySelector('.all-pokemons');

async function fetchData(urlApi){
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

const getPokemon = async(id) => {
    try{
        const pokemons = await fetchData(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        
        createPokemon(pokemons);
        console.log(pokemons);

    }catch (error){
        console.log(error);
    }
}


const fetchPokemons = (number) =>{
    for(let i = 1; i <= number; i++){
        getPokemon(i);
    }
}

function createPokemon(pokemons) {
    const card = document.createElement("div");
    card.classList.add("pokemon-block");

    const spriteContainer = document.createElement("div");
    spriteContainer.classList.add("img-container");

    const sprite = document.createElement("img");
    sprite.src = pokemons.sprites.front_default;

    const number = document.createElement("p");
    number.textContent = `#${pokemons.id}`;

    const name = document.createElement("p");
    name.classList.add("name");
    name.textContent = pokemons.name;

    card.appendChild(spriteContainer);
    spriteContainer.appendChild(sprite);
    card.appendChild(number);
    card.appendChild(name);
    pokemonDiv.appendChild(card);

}

fetchPokemons(12);


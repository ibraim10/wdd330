const url = "https://pokeapi.co/api/v2/pokemon/charizard";
let results = null;

function convertToJson(response) {
  if (response.ok) {
    return response.json();
  } else {
    console.log("error:", response);
  }
}

function doStuff(data) {
  const outputElement = document.querySelector("#poke");
  results = data;
  const html = `<img src="${results.sprites.front_default}" alt="Image of ${results.name}">`;
  outputElement.innerHTML = html;
  console.log("first: ", results);
}

fetch(url).then(convertToJson).then(doStuff);

console.log("second: ", results);


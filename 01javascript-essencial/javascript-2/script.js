import calculadora, { areaQuadrado, perimetroQuadrado } from "./quadrado.js";

import numeroAleatorio from "./numeroAleatorio.js";

console.log(areaQuadrado(4));
console.log(perimetroQuadrado(4));

console.log(numeroAleatorio());

console.log(calculadora.soma(5, 8));

// fetch <- é uma promessa
fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=200/")
  .then((response) => response.json())
  .then((json) => {
    const { results } = json;
    console.log(results);
  });

// Async wait

async function fetchPokemons(url) {
  const response = await fetch(url);
  const json = await response.json();
  console.log(json);
  return json;
}

const pokemons = fetchPokemons(
  "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200/"
);

// -----------------------
// Metodos array

//filter
const precos = [
  "Crédito",
  "R$ 200",
  "R$ 400",
  "Contas Pagar",
  "R$ 300",
  "R$ 400",
  "Meus dados",
];

const precosFiltro = precos.filter((preco) => preco.includes("R$"));

console.log(precosFiltro);

const precosNumeros = precosFiltro.map((preco) =>
  Number(preco.replace("R$ ", ""))
);

console.log(precosNumeros);

//---------------------------
//Expressão
const grupoA = 100;
const grupoB = 200;

if (grupoA > grupoB) {
  console.log("Grupo A ganhou");
} else {
  console.log("Grupo B ganhou");
}

const vencedor = grupoA > grupoB ? "Grupo A ganhou" : "Grupo B ganhou";
console.log(vencedor);

const active = false;
const button = active && "Botão está ativo";
console.log(button);

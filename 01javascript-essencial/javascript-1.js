// Tudo é objeto

const menu = {
  seletor: ".principal",
};

console.log(menu.seletor.toUpperCase());

// -------------------------
// função

function upperName(name) {
  return name.toUpperCase();
}

console.log(upperName("romim"));

// expressão
const uppername2 = function (name) {
  return name.toUpperCase();
};
console.log(upperName("romim - expressao function"));

// expressao vs normal?

// Arrow function
const upperName2 = (name) => name.toUpperCase();
console.log(upperName2("arrow function"));

// ----------------------------
//destruturing

const useQuadrado = [
  4,
  function (lado) {
    return 4 * lado;
  },
];

const [lados, perimetro] = useQuadrado;
console.log(lados);
console.log(perimetro(10));

const pessoa = {
  nome: "Romim",
  idade: 21,
  cargo: "Programador",
};

const { nome } = pessoa;

console.log(nome);

// --------------------
// Rest

function showList(empresa, ...clientes) {
  clientes.forEach((cliente) => {
    console.log(cliente + " - " + empresa);
  });
}

showList("Google", "Romulo", "Michel", "Rafael", "Raylan");

//Spread
const numeros = [10, 5, 20];
const maior = Math.max(...numeros);
console.log(maior);

const numeros2 = [13, ...numeros, 24, 32, 33];
console.log(numeros2);

const carro = {
  cor: "Azul",
  portas: 4,
};

const carroAno = { ...carro, ano: 2008 };
console.log(carro);

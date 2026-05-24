import { unique, groupBy, sumBy } from "./arrayUtils.js";

console.log("=== UNIQUE ===");

const numeros = [1, 2, 2, 3, 4, 4, 5];
console.log("Números únicos:", unique(numeros));

const nomes = ["Ana", "João", "Ana", "Carlos"];
console.log("Nomes únicos:", unique(nomes));


const produtos = [
  { nome: "Hambúrguer", categoria: "Lanches", preco: 28 },
  { nome: "Pizza", categoria: "Lanches", preco: 45 },
  { nome: "Refrigerante", categoria: "Bebidas", preco: 8 },
  { nome: "Suco", categoria: "Bebidas", preco: 10 }
];

const alunos = [
  { nome: "Gustavo", turma: "A", nota: 8 },
  { nome: "Lucas", turma: "B", nota: 7 },
  { nome: "Marcos", turma: "A", nota: 9 }
];


console.log("\n=== GROUP BY ===");

console.log("Produtos agrupados por categoria:");
console.log(groupBy(produtos, "categoria"));

console.log("Alunos agrupados por turma:");
console.log(groupBy(alunos, "turma"));


console.log("\n=== SUM BY ===");

console.log("Total dos preços:", sumBy(produtos, "preco"));

console.log("Total das notas:", sumBy(alunos, "nota"));
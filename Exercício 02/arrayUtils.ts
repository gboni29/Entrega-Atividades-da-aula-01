export const unique = <T>(arr: T[]): T[] => {
  return [...new Set(arr)];
};

export const groupBy = <T, K extends keyof T>(
  arr: T[],
  key: K
): Record<string, T[]> => {
  return arr.reduce((acc, obj) => {
    const grupo = String(obj[key]);

    acc[grupo] = acc[grupo] || [];
    acc[grupo].push(obj);

    return acc;
  }, {} as Record<string, T[]>);
};

export const sumBy = <T, K extends keyof T>(
  arr: T[],
  key: K
): number => {
  return arr.reduce((total, obj) => {
    const valor = obj[key];

    return typeof valor === "number" ? total + valor : total;
  }, 0);
};


interface Produto {
  nome: string;
  categoria: string;
  preco: number;
}

interface Aluno {
  nome: string;
  turma: string;
  nota: number;
}

const numeros: number[] = [1, 2, 2, 3, 4, 4, 5];
console.log("Números únicos:", unique(numeros));

const nomes: string[] = ["Ana", "João", "Ana", "Carlos"];
console.log("Nomes únicos:", unique(nomes));

const produtos: Produto[] = [
  { nome: "Hambúrguer", categoria: "Lanches", preco: 28 },
  { nome: "Pizza", categoria: "Lanches", preco: 45 },
  { nome: "Refrigerante", categoria: "Bebidas", preco: 8 },
  { nome: "Suco", categoria: "Bebidas", preco: 10 }
];

const alunos: Aluno[] = [
  { nome: "Gustavo", turma: "A", nota: 8 },
  { nome: "Lucas", turma: "B", nota: 7 },
  { nome: "Marcos", turma: "A", nota: 9 }
];

console.log("Produtos por categoria:", groupBy(produtos, "categoria"));
console.log("Alunos por turma:", groupBy(alunos, "turma"));

console.log("Total dos preços:", sumBy(produtos, "preco"));
console.log("Total das notas:", sumBy(alunos, "nota"));
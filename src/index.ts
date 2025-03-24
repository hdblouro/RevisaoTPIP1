// Exemplos de Objetos

import Pessoa from "./Pessoa";
import Cliente from "./Cliente";
import { A, B } from "./Sobrescrita";
import Teste from "./Sobrecarga";

const pessoa = new Pessoa("Ana", 21); // instanciando um objeto
const p = new Pessoa("João", 25);

console.log("\n== Exemplo Objeto de Classe ==\n")
console.log(pessoa.nome);
console.log(p.nome);
p.nome = "Tiago";
console.log(p.nome);

console.log("\n== Exemplo Objeto de Classe Herança ==\n")
const c = new Cliente("Ana",18,980); // instanciando objeto Cliente
c.print();

console.log("\n== Exemplo Sobrescrita Atributo e Método ==\n")

const a = new A("Tipo A"); // Instanciamento Objeto da Classe A
a.print();
const b = new B("Tipo B"); // Instanciamento Objeto da Classe B
b.print();
b.imprimir();

console.log("\n== Exemplo Sobrecarga de Método ==\n")

const t = new Teste();
// usa a assinatura somar(a: number, b: number): number
console.log(t.somar(2, 3));
// usa a assinatura somar(a: string, b: string, c: string): string;
console.log(t.somar("x", "y", "z"));
// usa a assinatura somar(a: string, b: string): string;
console.log(t.somar("x", "y"));



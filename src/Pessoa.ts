// Exemplo de Classe

class Pessoa { // nome da classe, mesmo nome arquivo
	nome:string; // atributo
	idade:number; // atributo
	constructor(nome:string, idade:number){ // método construtor e 
								// seus parâmetros
		this.nome = nome; // atributo recebe parâmetro
		this.idade = idade; // atributo recebe parâmetro
	}
	imprimir(){ // método imprimir
	 console.log(`${this.nome} possui ${this.idade} anos`);
	}
}

export default Pessoa;
// Exemplo de Herança

import Pessoa from "./Pessoa";

class Cliente extends Pessoa { // classe Cliente herda classe Pessoa
	saldo: number;
	constructor(nome:string, idade:number, saldo:number){
	// super é o construtor da classe herdada/estendida
	// por este, motivo temos de passar os parâmetros
	// do construtor da classe base
	super(nome,idade);
	this.saldo = saldo;
	}
	print():void {
		console.log(`${this.nome} - ${this.idade} - ${this.saldo}`);
	}
}

export default Cliente;
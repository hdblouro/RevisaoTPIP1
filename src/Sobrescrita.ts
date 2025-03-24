// Exemplo Sobrescrita:

export class A {
	nome: string;
	constructor(nome:string){
	this.nome = nome.toUpperCase();
	}
	print():void {
		console.log("Classe A:", this.nome);
	}
}

export class B extends A {
	// sobrescreve a propriedade nome da classe A
	nome: string;
	constructor(nome:string){
		super(nome);
		this.nome = nome.toLowerCase();
	}
	// sobrescreve o método print da classe A
	print():void {
		console.log("Classe B:", this.nome);
	}
	imprimir():void{
		// chama o método print da superclasse
		super.print();
	}
}

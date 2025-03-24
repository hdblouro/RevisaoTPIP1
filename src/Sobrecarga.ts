// Exemplo de Sobrecarga:

class Teste {
	somar(a: number, b: number): number;
	somar(a: string, b: string, c: string): string;
	somar(a: string, b: string): string;
	somar(a: any, b: any, c?: any): any {
		if (c !== undefined) {
			return a + b + c;
		} else {
			return a + b;
		}
	}
}

export default Teste;
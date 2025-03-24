class X {
    a: number;
    b?: number;
    c?: number;
    d?: number;

    constructor(a: number, b?: number,
        c?: number, d?: number) {
        this.a = a;
        if (b != undefined) {
            this.b = b;
        }
        if (c != undefined) {
            this.c = c;
        }
        if (d != undefined) {
            this.d = d;
        }
    }
}

const x1 = new X(1,2,3,4);
const x2 = new X(1,2,3);
const x3 = new X(1,2);
const x4 = new X(1);
const x5 = X(); // errado: o construtor exige que pelo menos o atributo "a" seja inicializado

export default {};
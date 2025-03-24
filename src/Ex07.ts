class A {
    x:number;
    y:number;

    constructor(x:number,y:number){
        this.x = x;
        this.y = y;
    }

    print(){
        console.log(this.x, this.y);
    }
}

const a = A(1,2); c.print(); // errado: faltou new e não existe objeto c
const b = A.print(3,4); // errado: não se pode instanciar objeto e chamar seu método ao mesmo tempo. E ainda faltou o new
const c = new A.print(5,6);
const d = new A(7,8); d.print();
const e = A(7,8).print();

export default {};
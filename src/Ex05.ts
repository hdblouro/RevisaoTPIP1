let a: string[] | number[] = ["a","b"]; // certo: array com elementos do mesmo tipo
let b: string[] | number[] = ["a",2]; // errado: array com elementos de tipos diferentes
let c: string[] | number[] = [1,2]; // certo: array com elementos do mesmo tipo
let d: (string|number)[] = ["a",2]; // certo: definição de tipos antes da de array, por isso aceita elementos de tipos diferentes
let e:Array<number|string> = ["a",2]; // certo: array definidos com a Classe Array, por isso aceita elementos de tipos diferentes

export default {};
let inputs:Array<string> = [];

inputs[0] = 1; // errado: tentando colocar number como string na posição 0 do Array inputs
inputs = ["a","b"]; // certo duas strings sendo atribuídas às posições 0 e 1 do Array inputs
inputs = [1,2,3]; // errado: tentando colocar number como string nas posições de 0 a 2 do Array inputs
inputs = ["a",2]; // errado: tentando colocar number como string na posição 1 do Array inputs
inputs = [true]; // errado: tentando colocar boolean como string na posição 0 do Array inputs

export default {};
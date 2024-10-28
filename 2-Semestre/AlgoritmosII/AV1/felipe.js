// QUESTÃO 1
// RESPOSTA    

// let s = []

// for (let i = 0; i < 5; i++) {
//     s[i] = 0
//     for (let j = 0; j < i; j++) {
//         s[i] = s[i] + j   
//     }
// }

// console.log(s)

// QUESTÃO 7
// RESPOSTA: 8

// function recursiva(x) {
//     if (x <= 0) {
//         return 1
//     } else {
//         return 2 * recursiva(x-2)
//     }
// }

// let result = recursiva(6)
// console.log(result)

// QUESTÃO 8
// RESPOSTA: 

//Opção 8
//Resposta: 56
// let v = [5, 8, 7, 8, 11, 2, 10, 14, 8, 5]
// let x = 1
// let y = 0
// let aux = 0

// while (x <= 10) {
//     if (v[x] >= y) {
//         y = v[x]
//         aux = aux + 1
//     }
//     x = x + 1
// }
// aux = aux * y
// console.log(aux)

// QUESTÃO 10
// RESPOSTA: 
let vetor = [4, 2, 8, 4, 1, 8, 4, 2, 8, 8]
let soma = 0

for (let i = 0; i < 5; i++) {
    soma = soma + vetor[2*i+1]
}

console.log(soma)
// QUESTÃO 3
// RESPOSTA: [ 5, 9, 8, 4, 10]
let x = [1, 9, 6, 4, 10]
let y = [2, 1, 8, 4, 5]
let z = []

for (let i = 0; i <= 4; i++) {
    if (x[i] > y[3-i+1]) {
        z[i] = x[i]
    } else {
        z[i] = y[3-i+1]
    }
}

console.log(z)
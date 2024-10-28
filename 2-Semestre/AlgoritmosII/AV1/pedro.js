// QUESTÃO 5
// RESPOSTA: [10, 9, 8, 7, 6, 6, 7, 8, 9, 10
let x = []

for (let i = 0; i <= 10; i++) {
    x[i] = i    
}

for (let i = 0; i <= 10; i++) {
    x[i] = x[11-i]
}

for (let i = 0; i <= 10; i++) {
    console.log(x[i])  
}
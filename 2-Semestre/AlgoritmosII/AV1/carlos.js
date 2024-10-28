//OPÇÃO 5
//Resposta:

let x = []

for (let i = 0; i <= 10; i++) {
    x[i] = 10 - i + 1
}

for (let i = 0; i <= 10; i++) {
    x[i] = x[11-i]
}

for (let i = 0; i <=10; i++) {
   console.log(x[i])
}
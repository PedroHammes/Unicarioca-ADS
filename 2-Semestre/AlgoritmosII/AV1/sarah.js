// QUESTÃO 9
// RESPOSTA: 4


function compara(a, b) {
    if (a > b) {
        return console.log(a)
    }
    a = a + b - 2
    compara(a,b)
}

compara(1, 3)


// QUESTÃO 10
// RESPOSTA: 

function recursiva(a,b) {
    if (b == 0) {
        console.log(a)
    } else {
        recursiva(b, a % b)
    }
}

recursiva(30,21)
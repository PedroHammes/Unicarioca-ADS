function isPrime(num) {
    let cont = num
    let rest = 0
    if (num < 2) {
        return console.log(`O número ${num} não é primo porque é menor ou igual a 2.`)
    // } 
    // else if (num % 2 == 0) {
    //     return console.log(`O número ${num} não é primo porque é divisível por 2.`)
    } else {
        do {
            cont = cont - 1
            rest = (num % cont).toFixed(2)
            console.log(`${num}/${cont} = ${(num/cont).toFixed(2)} -> r = ${rest}`)
        } while (rest != 0.00 && cont > 2)

        if (rest == 0.00 && cont > 1) {
            return console.log(`O número ${num} não é primo porque um número primo só é divisível por si mesmo e por 1.`)
        }
    }
    return console.log(`O número ${num} é primo!`)
}

isPrime(4)
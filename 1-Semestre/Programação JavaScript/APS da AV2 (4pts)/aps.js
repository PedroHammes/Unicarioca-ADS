function isPrime(num) {
    let cont = num
    let rest = 0
    if (num < 2) {
        return false//console.log(`O número ${num} não é primo porque é menor ou igual a 2.`)
    } else {
        do {
            cont = cont - 1
            rest = (num % cont).toFixed(2)
            //console.log(`${num}/${cont} = ${(num/cont).toFixed(2)} -> r = ${rest}`)
        } while (rest != 0.00 && cont > 2)

        if (rest == 0.00 && cont > 1) {
            return false //console.log(`O número ${num} não é primo porque um número primo só é divisível por si mesmo e por 1.`)
        }
    }
    return true //console.log(`O número ${num} é primo!`)
}

function findLargestPrimes(num) {
    let largestPrimes = []
    let cont = num-1

    while (largestPrimes.length < 10 && cont > 1) {
        if (isPrime(cont)) {
            largestPrimes.push(cont)
        }
        cont = cont -1
    }

    if (largestPrimes.length == 0) {
        return console.log(`Não existem números primos a partir de ${num}`)
    }
    return console.log(`Existem ${largestPrimes.length}/10 números primos a partir de ${num}.`+
                       `\nAqui estão eles:`+
                       `\n${largestPrimes}`)
}

//console.log(isPrime(5))
findLargestPrimes(9)
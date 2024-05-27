//DADOS DO ALUNO
// - DISCIPLINA: Programação Javascript
// - TURMA: 132N
// - NOME E MATRÍCULA: João Pedro Hammes Pacheco - 2024100014


function isPrime(num) {
    let cont = num
    let rest = 0
    if (num < 2) {
        return false //se o número for menor do que 2 (1,0,-1,-2,-3...) ele não poderá ser primo
    } else if (num == 2) {
        return true //2 é o menor número primo, pois é divisível por ele mesmo e por 1.
    } else {
        //Se o número não é menor do que 2 (false) nem igual a 2 (true) ele só pode ser maior.
        //Um número primo só produz resto da divisão igual a 0 se for dividido por si mesmo e por 1.
        //O laço do while abaixo avalia se o número digitado pelo usuário produz resto da divisão igual a 0 se for dividido por
        // outro número, diferente de si mesmo e 1, neste caso ele não é primo.
        do {
            cont = cont - 1 //decrementa cont em 1 a cada repetição
            rest = (num % cont).toFixed(2) //compara a primalidade do número escolhido pelo usuário realizando a divisão pelo número imediatamente menor. Usei a função toFixed() para o JavaScript não arredondar para 0 os restos de divisão menores do que 0.

            //A linha abaixo é para acompanhar a execução do teste de primalidade passo a passo, pode descomentar ela.
            //console.log(`${num}/${cont} = ${(num/cont).toFixed(2)} -> r = ${rest}`)
        } while (rest != 0.00 && cont > 1)
            //O laço de repetição acima será executado enquanto o resto da divisão for diferente de 0.00 e o cont for maior que 1.
            //Se o resto da divisão for igual a 0.00 e o contador for estiver em um número acima de 1 o laço será encerrado.


        if (rest == 0.00 && cont > 1) {
            return false //esta condicional trata o caso em que o loop de repetição do while foi encerrado e retorna false. Assim o código abrange todas as situações em que o número não é primo. 
        }
    }
    return true //console.log(`O número ${num} é primo!`) //O código acima abrange todas as situações em que o número não é primo, se chegou aqui ele só pode ser primo.
}

function findLargestPrimes(num) {
    let largestPrimes = [] //array para armazenar os números primos inferiores ao número indicado pelo usuário
    let cont = num-1 //cont decrementa o número informado pelo usuário

    //O laço de repetição while abaixo só será executado se o array largestPrimes tiver menos de 10 elementos (números primos) e o contador for maior do que 1, afinal 2 é o menor número primo possível.
    //Estabeleci um limite de 10 números primos para o array comportar porque o exercício pede apenas os 10 maiores números primos abaixo do número informado, entã não há necessidade de armazenar mais do que isso. 
    while (largestPrimes.length < 10 && cont > 1) {
        if (isPrime(cont)) { //checa se cont (número informado pelo usuário, decrementado) é primo chamando a função isPrime. Se for, o resultado será true.
            largestPrimes.push(cont) //se o resultado da condicional acima for true significa que cont é primo e será adicionado ao array. A função push() adiciona elementos ao array.
        }
        cont = cont -1 //decrementa cont para verificar a primalidade do próximo número.
    }

    if (largestPrimes.length == 0) { //Se o array ficar vazio significa que não existem números primos abaixo do número informado
        return console.log(`Não existem números primos a partir de ${num}`)
    }
    //Se o array não ficar vazio será exibido a quantidade de números primos encontrados (limitado a 10 elementos) a partir do número informado.
    //E abaixo serão exibidos os números encontrados.
    return console.log(`Existem ${largestPrimes.length}/10 números primos a partir de ${num}.`+
                       `\nAqui estão eles:`+
                       `\n${largestPrimes}`)
}


//ÁREA DE TESTES
console.log(isPrime(99))
findLargestPrimes(99)
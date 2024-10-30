//MEMBROS DO GRUPO
//  Joao Pedro Hammes Pacheco (2024100014)
//  Membro 2
//  Membro 3
//  Membro 4

//• Armazenar os nomes dos 10 produtos da cesta básica que serão pesquisados
//      Cada ítem está armazenado em um índice da cesta básica, este índice serve como código do produto.
const Package = ['Arroz', 'Feijão', 'Açúcar', 'Óleo', 'Café', 'Fubá', 'Ovos', 'Macarrão', 'Leite', 'Frango']

//      Cada supermercado recebe um identificador
const Supermarkets = ['Carrefour', 'Guanabara', 'Mundial', 'Prezunic', 'Zona Sul']

//      Os produtos (referenciados pelos respectivos índices) possuem um valor em cada supermercado.
const carrefour = [5.10, 4.98, 5.00, 5.80, 23.12, 3.99, 12.00, 5.87, 5.90, 5.60]
const guanabara = [4.98, 4.89, 5.10, 6.22, 23.10, 3.87, 12.10, 5.98, 6.10, 5.80]
const mundial = [5.02, 5.10, 4.98, 6.10, 23.04, 4.10, 12.05, 6.00, 5.98, 5.98]
const prezunic = [4.87, 4.90, 4.80, 5.98, 23.16, 4.05, 12.18, 6.10, 5.97, 4.98]
const zona_sul = [5.15, 5.15, 4.99, 6.20, 21.96, 4.38, 11.97, 6.15, 5.96, 5.30]

//• Armazenar os nomes dos 5 supermercados onde será realizada a pesquisa de preço.
//      Todos os supermercados foram armazenados em um mesmo vetor,
//      de forma que seja formado um vetor de vetores, ou seja: uma matriz.
const PackagesBySupermarkets = [
    carrefour,
    guanabara,
    mundial,
    prezunic,
    zona_sul
]

//• Ler os preços dos 10 produtos pesquisados em cada supermercado.

// • Calcular o preço médio de cada produto (10) da cesta básica nos 5 supermercados pesquisados.
function calculateAverageProductPrice() {

    //  Inicializa o preço médio de cada produto em 0.
    let AveragePrice = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    //  Estes loops aninhados são responsáveis por somar o preço de cada produto (coluna)
    //  em cada supermercado (linha).
    //      Este loop externo percorre cada produto (coluna) armazenado em Package.
    for (let column = 0; column < Package.length; column++) {
        console.log(`${Package[column]}`)

        //  Este loop interno SOMA o preço deste produto em cada supermercado (linha)
        for (let line = 0; line < PackagesBySupermarkets.length; line++) {
            AveragePrice[column] += PackagesBySupermarkets[line][column]
        }
        
    //  Assim que o algoritmo termina de somar o preço do produto em todos os supermercados (linhas)
    //  ele calcula a média, dividindo o total pela quantidade de supermercados (linhas).
        AveragePrice[column] = Number(AveragePrice[column]/PackagesBySupermarkets.length).toFixed(2)
        console.log(`Preço médio: R$${AveragePrice[column]}\n`)
    }
}

// • Calcular o valor da cesta básica nos 5 supermercados pesquisados (Soma).
function calculatePackageByMarket() {
    
    //  Inicializo o preço total de cada cesta básica em 0
    let PackageByMarket = [0, 0, 0, 0, 0]

    //  O loop abaixo percorre cada supermercado (linha) armazenado no vetor PackagesBySupermarkets
    for (let supermarket = 0; supermarket < PackagesBySupermarkets.length; supermarket++) {

        //  O loop abaixo percorre cada produto (coluna) do supermercado selecionado no loop acima
        for (let product = 0; product < PackagesBySupermarkets[supermarket].length; product++) {

            //  A linha abaixo é responsável somar o valor da cesta básica do supermercado
            //  incrementando o valor já somado com o valor do produto atual
            PackageByMarket[supermarket] += PackagesBySupermarkets[supermarket][product]
        }
        //  A linha abaixo garante que o valor somado na cesta básica do supermercado seja tipo numérico
        //  e tenha 2 valores após a vírgula para representar adequadamente a moeda local.
        PackageByMarket[supermarket] = Number(PackageByMarket[supermarket]).toFixed(2)
    }

    //  Ao final do loops é retornado no console o valor da cesta básica em cada supermercado
    //  Usando como referência o nome do supermercado alocado em supermarkets
    //  e passando como Preço os valores armazenados em PackageByMarket
    console.log('Preço da cesta básica em cada supermercado:')
    for (let column = 0; column < PackageByMarket.length; column++) {
        console.log(`${Supermarkets[column]}: ${PackageByMarket[column]}`)        
    }    
}

// • Indicar qual o menor valor da cesta básica e em qual supermercado ele ocorre.
function lessExpensivePackage() {
    
    //  Inicializa o preço total de cada cesta básica em 0
    let PackagePrice = [0, 0, 0, 0, 0]

    //  Percorre cada supermercado (linha) e soma o total de seus produtos (coluna)
    //  Armazena a soma total em PackagePrice em formato BRL.
    for (let supermarket = 0; supermarket < PackagesBySupermarkets.length; supermarket++) {
        for (let product = 0; product < PackagesBySupermarkets[supermarket].length; product++) {
            PackagePrice[supermarket] += PackagesBySupermarkets[supermarket][product]
        }
        PackagePrice[supermarket] = Number(PackagePrice[supermarket]).toFixed(2)
    }

    //  Define valores padrão iniciais para as variáveis que definem
    //  o preço mais baixo e em que supermercado ele ocorre
    let lowerPrice = 999.99
    let where = '?'

    //  Percorre o array de preços das cestas básicas
    for (let column = 0; column < PackagePrice.length; column++) {
        //  Se a cesta básica atual tive um preço menor do que o valor armazenado
        //  em lowerPrice, então o valor de lowerPrice é atualizado
        //  E o valor do supermercado onde este preço está é atualizado também,
        //  passando como valor o supermercado armazenado na posição column do vetor de supermercados
        if (PackagePrice[column] < lowerPrice) {
            lowerPrice = PackagePrice[column]
            where = Supermarkets[column]
        }
    }

    return console.log(`O preço mais baixo encontrado para cesta básica foi:\n ${where} - ${lowerPrice}`)
}

// • Determinar para cada produto: o preço mínimo e o preço máximo
// e indicar em qual supermercado ele ocorre.
function higherLowerWhere() {
    //  Define valor padrão para as seguintes características cada produto:
    //  mais barato e onde está, mais caro e onde está
    let more_expensive = 0.01
    let cheaper =  999.99
    let where_is_more_expensive = ''
    let where_is_cheaper = ''

    //  Percorre cada produto (coluna)
    for (let product = 0; product < Package.length; product++) {
        
        //  E confere seu preço em cada supermercado (linha)
        for (let supermarket = 0; supermarket < PackagesBySupermarkets.length; supermarket++) {
            
            //  Se o valor nesta posição da matriz for maior do que o contido na variável more_expensive substitua,
            //  atualizando o valor do maior preço deste produto e formatando-o para a um número com duas casas decimais.
            //  Em seguida atualiza também o valor do supermercado onde este preço ocorre.
            if (PackagesBySupermarkets[supermarket][product] >= more_expensive) {
                more_expensive = Number(PackagesBySupermarkets[supermarket][product]).toFixed(2)
                where_is_more_expensive = Supermarkets[supermarket]
            }

            //  Por outro lado, se o valor nesta posição da matriz for menor do que o contido na variável cheaper substitua,
            //  atualizando o valor do menor preço deste produto e formatando-o para a um número com duas casas decimais.
            //  Em seguida atualiza também o valor do supermercado onde este preço ocorre.
            if (PackagesBySupermarkets[supermarket][product] <= cheaper) {
                cheaper = Number(PackagesBySupermarkets[supermarket][product]).toFixed(2)
                where_is_cheaper = Supermarkets[supermarket]
            }
        }

        //  Exibe o maior e o menor preço de cada produto
        console.log(`\n${Package[product]}\nMenor preço: R$${cheaper} (${where_is_cheaper}) | Maior preço: R$${more_expensive} (${where_is_more_expensive})  \n`)

        //  Atualiza os valores padrão de bigger e smaller para serem usados no próximo produto.
        more_expensive = 0.01
        cheaper =  999.99
        where_is_more_expensive = ''
        where_is_cheaper = ''
    }
}

//  AREA DE TESTES
//calculateAverageProductPrice()
//calculatePackageByMarket()
//lessExpensivePackage()
higherLowerWhere()
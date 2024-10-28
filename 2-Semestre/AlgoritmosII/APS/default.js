//  Cada ítem está armazenado em um índice da cesta básica, este índice serve como código do produto.
const produtos = ['Arroz', 'Feijão', 'Açúcar', 'Óleo', 'Café', 'Fubá', 'Ovos', 'Macarrão', 'Leite', 'Frango']

//  Os produtos (referenciados pelos respectivos índices) possuem um valor em cada supermercado.
const carrefour = [5.10, 4.98, 5.00, 5.80, 23.12, 3.99, 12.00, 5.87, 5.90, 5.60]
const guanabara = [4.98, 4.89, 5.10, 6.22, 23.10, 3.87, 12.10, 5.98, 6.10, 5.80]
const mundial = [5.02, 5.10, 4.98, 6.10, 23.04, 4.10, 12.05, 6.00, 5.98, 5.98]
const prezunic = [4.87, 4.90, 4.80, 5.98, 23.16, 4.05, 12.18, 6.10, 5.97, 4.98]
const zona_sul = [5.15, 5.15, 4.99, 6.20, 21.96, 4.38, 11.97, 6.15, 5.96, 5.30]

//  Todos os supermercados foram armazenados em um mesmo vetor, de forma que
//      seja formado um vetor de vetores, ou seja: uma matriz.
const cesta_basica = [
    carrefour,
    guanabara,
    mundial,
    prezunic,
    zona_sul
]

//  Esta função exibe o conteúdo da cesta básica
function exibirProdutos() {
    console.log('Aqui estão os produtos disponíveis:')
    for (let index = 0; index < produtos.length; index++) {
        console.log(`${index} - ${produtos[index]}`)
    }
}

//  Calcular o preço médio de cada produto (10) da cesta básica nos 5 supermercados pesquisados.
function calcularPrecoMedio() {
    //  Inicializo o preço médio de cada produto em 0
    let preco_medio = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    //Estes loops aninhados são responsáveis por somar o preço de cada produto (c)
    //  em cada supermercado (l)

    // Este loop externo analisa cada produto (c) 
    for (let c = 0; c < produtos.length; c++) {
        console.log(`Produto: ${produtos[c]}`)

        // Este loop interno analisa o preço deste produto em cada supermercado
        //  e soma o preço deste produto em todos os supermercados
        for (let l = 0; l < cesta_basica.length; l++) {
            preco_medio[c] += cesta_basica[l][c]
        }
        
        // Assim que o algoritmo termina de somar o preço do produto em todos os supermercados
        //  ele calcula a média, dividindo o total pela quantidade de supermercados.
        preco_medio[c] = preco_medio[c]/5
        console.log(`Preço médio: R$${preco_medio[c]}\n`)
    }
}

//  Calcular o valor da cesta básica nos 5 supermercados pesquisados (Soma).
function calcularPrecoTotal() {
    //  Inicializo o preço total de cada cesta básica em 0
    let preco_total = [0, 0, 0, 0, 0]

    // Percorre cada supermercado (l) e soma o total de seus produtos (c)
    for (let l = 0; l < cesta_basica.length; l++) {
        for (let c = 0; c < cesta_basica[l].length; c++) {
            preco_total[l] += cesta_basica[l][c]
        }
    }

    console.log('Preço da cesta básica em cada supermercado:')
    console.log(`Carrefour: R$${preco_total[0]} \nGuanabara: R$${preco_total[1]} \nMundial: R$${preco_total[2]}\nPrezunic: R$${preco_total[3]} \nZona Sul: R$${preco_total[4]} \n`)

}

// Indicar qual o menor valor da cesta básica e em qual supermercado ela ocorre.
function precoMaisBaixo() {
    //  Inicializo o preço total de cada cesta básica em 0
    let preco_total = [0, 0, 0, 0, 0]

    // Percorre cada supermercado (l) e soma o total de seus produtos (c)
    for (let l = 0; l < cesta_basica.length; l++) {
        for (let c = 0; c < cesta_basica[l].length; c++) {
            preco_total[l] += cesta_basica[l][c]
        }
    }

    let mais_barato = null
    let supermercado = '?'

    for (let l = 0; l < preco_total.length; l++) {
        if (mais_barato === null) {
            mais_barato = preco_total[l]
            switch (l) {
                case 0:
                    supermercado = 'Carrefour'
                    break;
                case 1:
                    supermercado = 'Guanabara'
                    break;
                case 2:
                    supermercado = 'Mundial'
                    break;
                case 3:
                    supermercado = 'Prezunic'
                    break;
                case 4:
                    supermercado = 'Zona Sul'
                    break;
                default:
                    supermercado = '?'
                    break;
            }
        } else if (mais_barato > preco_total[l]) {
            mais_barato = preco_total[l]
            switch (l) {
                case 0:
                    supermercado = 'Carrefour'
                    break;
                case 1:
                    supermercado = 'Guanabara'
                    break;
                case 2:
                    supermercado = 'Mundial'
                    break;
                case 3:
                    supermercado = 'Prezunic'
                    break;
                case 4:
                    supermercado = 'Zona Sul'
                    break;
                default:
                    supermercado = '?'
                    break;
            }
        }

    }

    return console.log(`O preço mais baixo encontrado para cesta básica foi:\n ${supermercado} - ${mais_barato}`)
}

function precoMaisBaratoEMaisCaro() {
    let mais_caro = 0
    let mais_barato =  100
    let onde_e_barato = 'Z'
    let onde_e_caro = 'A'

    // Para cada produto
    for (let c = 0; c < produtos.length; c++) {
        
        //Conferir seu preço em cada mercado
        for (let l = 0; l < cesta_basica.length; l++) {
            
            // Se o valor nesta posição do array for maior do que o contido na variável mais_caro substitua
            if (cesta_basica[l][c] >= mais_caro) {
                mais_caro = cesta_basica[l][c]
                switch (l) {
                    case 0:
                        onde_e_caro = 'Carrefour'
                        break;
                    case 1:
                        onde_e_caro = 'Guanabara'
                        break;
                    case 2:
                        onde_e_caro = 'Mundial'
                        break;
                    case 3:
                        onde_e_caro = 'Prezunic'
                        break;
                    case 4:
                        onde_e_caro = 'Zona Sul'
                        break;
                    default:
                        break;
                }
            }

            // Se o valor nesta posição do array for menor do que o contido na variável mais_barato substitua
            if (cesta_basica[l][c] <= mais_barato) {
                mais_barato = cesta_basica[l][c]
                switch (l) {
                    case 0:
                        onde_e_barato = 'Carrefour'
                        break;
                    case 1:
                        onde_e_barato = 'Guanabara'
                        break;
                    case 2:
                        onde_e_barato = 'Mundial'
                        break;
                    case 3:
                        onde_e_barato = 'Prezunic'
                        break;
                    case 4:
                        onde_e_barato = 'Zona Sul'
                        break;
                    default:
                        break;
                }
            }
        }

        // Exibe o maior e o menor preço de cada produto
        console.log(`\nPreços do ${produtos[c]}:\nMenor: R$${mais_barato} (${onde_e_barato}) | Maior: R$${mais_caro} (${onde_e_caro})  \n`)

        // Atualiza os valores padrão para serem usados no próximo produto.
        mais_caro = 0
        mais_barato =  100
        onde_e_barato = 'Z'
        onde_e_caro = 'A'
    }
}



//exibirProdutos()
//calcularPrecoMedio()
//calcularPrecoTotal()
//precoMaisBaixo()
//precoMaisBaratoEMaisCaro()
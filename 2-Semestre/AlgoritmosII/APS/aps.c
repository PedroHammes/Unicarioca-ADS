#include <stdio.h>
//  A biblioteca abaixo torna possível trabalhar com strings em C
#include <string.h>

//  Variáveis globais
char CESTA_BASICA[10][100], SUPERMERCADOS[5][100];
double PRECOS[5][10];

//  Esta função serve para inicializar as variáveis globais
int inicializar(void) {

    //  Atribuição das variáveis globais
    //  CESTA_BASICA
    strcpy(CESTA_BASICA[0], "Arroz");
    strcpy(CESTA_BASICA[1], "Feijao");
    strcpy(CESTA_BASICA[2], "Acucar");
    strcpy(CESTA_BASICA[3], "Oleo");
    strcpy(CESTA_BASICA[4], "Cafe");
    strcpy(CESTA_BASICA[5], "Fuba");
    strcpy(CESTA_BASICA[6], "Ovos");
    strcpy(CESTA_BASICA[7], "Macarrao");
    strcpy(CESTA_BASICA[8], "Leite");
    strcpy(CESTA_BASICA[9], "Frango");

    //  SUPERMERCADOS
    strcpy(SUPERMERCADOS[0], "Carrefour");
    strcpy(SUPERMERCADOS[1], "Guanabara");
    strcpy(SUPERMERCADOS[2], "Mundial");
    strcpy(SUPERMERCADOS[3], "Prezunic");
    strcpy(SUPERMERCADOS[4], "Zona Sul");

    //  PRECOS
    //  Carrefour
    PRECOS[0][0] = 5.10;
    PRECOS[0][1] = 4.98;
    PRECOS[0][2] = 5.00;
    PRECOS[0][3] = 5.80;
    PRECOS[0][4] = 23.12;
    PRECOS[0][5] = 3.99;
    PRECOS[0][6] = 12.00;
    PRECOS[0][7] = 5.87;
    PRECOS[0][8] = 5.90;
    PRECOS[0][9] = 5.60;

    //  Guanabara
    PRECOS[1][0] = 4.98;
    PRECOS[1][1] = 4.89;
    PRECOS[1][2] = 5.10;
    PRECOS[1][3] = 6.22;
    PRECOS[1][4] = 23.10;
    PRECOS[1][5] = 3.87;
    PRECOS[1][6] = 12.10;
    PRECOS[1][7] = 5.98;
    PRECOS[1][8] = 6.10;
    PRECOS[1][9] = 5.80;

    // Mundial
    PRECOS[2][0] = 5.02;
    PRECOS[2][1] = 5.10;
    PRECOS[2][2] = 4.98;
    PRECOS[2][3] = 6.10;
    PRECOS[2][4] = 23.04;
    PRECOS[2][5] = 4.10;
    PRECOS[2][6] = 12.05;
    PRECOS[2][7] = 6.00;
    PRECOS[2][8] = 5.98;
    PRECOS[2][9] = 5.98;

    //  Prezunic
    PRECOS[3][0] = 4.87;
    PRECOS[3][1] = 4.90;
    PRECOS[3][2] = 4.80;
    PRECOS[3][3] = 5.98;
    PRECOS[3][4] = 23.16;
    PRECOS[3][5] = 4.05;
    PRECOS[3][6] = 12.18;
    PRECOS[3][7] = 6.10;
    PRECOS[3][8] = 5.97;
    PRECOS[3][9] = 4.98;

    //  Zona sul
    PRECOS[4][0] = 5.15;
    PRECOS[4][1] = 5.15;
    PRECOS[4][2] = 4.99;
    PRECOS[4][3] = 6.20;
    PRECOS[4][4] = 21.96;
    PRECOS[4][5] = 4.38;
    PRECOS[4][6] = 11.97;
    PRECOS[4][7] = 6.15;
    PRECOS[4][8] = 5.96;
    PRECOS[4][9] = 5.30;

    return 0;
}

//  Esta função exibe o valor da variavel global CESTA_BASICA
int exibirCestaBasica(void) {
    for (int i = 0; i < 10; i++)
    {
        //  O comando %s é usado em conjunto com a biblioteca string.h para exibir strings no console
        printf("[%i] %s \n", i, CESTA_BASICA[i]);
    }
    return 0;
}

//  Esta função exibe o valor da variavel global SUPERMERCADO
int exibirSupermercados(void) {
    for (int i = 0; i < 5; i++)
    {
        printf("[%i] %s \n", i, SUPERMERCADOS[i]);
    }
    return 0;
}

//  Esta função exibe o valor da variavel global PRECOS
int exibirPrecos(void) {
    for (int linha = 0; linha < 5; linha++)
    {
        for (int coluna = 0; coluna < 10; coluna++)
        {
            printf("[%i][%i] %.2f \n", linha, coluna, PRECOS[linha][coluna]);
        }
    }
    return 0;
}

//  Esta função calcula o preço médio de cada produto
int calcularPrecoMedio(void) {
    double preco_medio[10];
    double soma = 0;

    for (int coluna = 0; coluna < 10; coluna++)
    {
        for (int linha = 0; linha < 5; linha++)
        {
            // Soma o preço de um produto em todos os supermercados
            soma = soma + PRECOS[linha][coluna];
        }
        // Após percorrer cada supermercado somando o preço do produto,
        // o valor somado é dividido pelo total de supermercados
        preco_medio[coluna] = soma/5;
        printf("%s -> Preco medio: R$%.2f \n", CESTA_BASICA[coluna], preco_medio[coluna]);
        soma = 0;
    }
    
}

//  Esta função calcula o total de cada cesta básica
int calcularCestaBasica(void) {
    double soma = 0;

    //  Este for percorre cada supermercado
    for (int linha = 0; linha < 5; linha++)
    {
        // Dentro de cada supermercado este for soma o valor total dos produtos que compõem a cesta básica
        for (int coluna = 0; coluna < 10; coluna++)
        {
            soma = soma + PRECOS[linha][coluna];
        }

        //  Aqui é exibido o nome do supermercado e o total de sua cesta básica
        printf("[%d] %s -> R$%.2f \n", linha, SUPERMERCADOS[linha], soma);

        //  A variável soma é zerada para ser usada nos cálculos do próximo supermercado.
        soma = 0;
    }

    return 0;
}

// Esta função indica qual supermercado oferece e a cesta mais barata e seu preço
int cestaMaisBarata(void) {
    double soma = 0, mais_barata = 1000;
    char *supermercado_mais_barato = "?";

    //  Este for percorre todos os supermercados
    for (int linha = 0; linha < 5; linha++)
    {
        //  Em cada supermercado soma o total de seus produtos
        for (int coluna = 0; coluna < 10; coluna++)
        {
            soma = soma + PRECOS[linha][coluna];
        }
        //  Se o total de produtos deste mercado for menor do que o valor armazenado
        //  na variável mais_barata então esta variável é atualizada, recebendo o novo menor valor
        //  da mesma forma, que o nome do supermercado mais barato é atualizado,
        //  passando como referência o valor contido no vetor SUPERMERCADO que seja compatível com a linha da matriz
        //  de preços onde achamos este novo valor mais barato
        if (soma < mais_barata)
        {
            mais_barata = soma;
            supermercado_mais_barato = SUPERMERCADOS[linha];
        }
        soma = 0;
    }
    
    printf("A cesta basica mais barata custa R$%.2f e eh vendida pelo supermercado %s\n", mais_barata, supermercado_mais_barato);
    return 0;
}

// Indicar o maior e menor preço de cada produto e onde ocorre
int precosMaxEMin(void) {
    //Variáveis de controle da função.
    double mais_caro = 1, mais_barato = 99;
    char *onde_e_caro = "", *onde_e_barato = "";

    //  Este loop percorre toda a coluna de produtos
    for (int coluna = 0; coluna < 10; coluna++)
    {
        //  Este loop percorre todos os preços de cada produto.
        for (int linha = 0; linha < 5; linha++)
        {
            //  Se o valor contido na posição do vetor PREÇOS referente as coordenadas atuais
            //  for maior do que o atual preço mais caro, este é atualizado recebendo o novo valor
            //  da mesma forma que o nome do supermercado onde este preço se encontra é atualizado.
            if (PRECOS[linha][coluna] >= mais_caro)
            {
                mais_caro = PRECOS[linha][coluna];
                onde_e_caro = SUPERMERCADOS[linha];
            }
            
            //  Por outro lado, se o valor contido na posição do vetor PREÇOS referente as coordenadas atuais
            //  for menor do que o atual preço mais barato, este é atualizado recebendo o novo valor
            //  da mesma forma que o nome do supermercado onde este preço se encontra é atualizado.
            if (PRECOS[linha][coluna] <= mais_barato)
            {
                mais_barato = PRECOS[linha][coluna];
                onde_e_barato = SUPERMERCADOS[linha];
            }
            
        }
        //  Após percorrer todas as variações de preço para o mesmo produto, as suas estatísticas são exibidas na tela
        //  E os valores das variáveis de controle da função são atualiados para os valores padrão.
        printf("Variacao do %s: de R$%.2f (%s) -> R$%.2f (%s) \n", CESTA_BASICA[coluna], mais_barato, onde_e_barato, mais_caro, onde_e_caro);
        mais_caro = 1;
        mais_barato = 99;
        onde_e_barato = "";
        onde_e_caro = "";
    }
    return 0;
}


// A função main apenas executa as funções do programa
int main(void) {

    //  Nunca comente a função inicializar, 
    //  ela precisa ser executada para que todas as demais funcionem corretamente.
    inicializar();

    //  Você pode comentar e descomentar as funções abaixo livremente,
    //  pois elas funcionam de forma independente entre si (mas todas dependem da função inicializar).
    //  Pode testá-las individualmente ou várias ao mesmo tempo.
    // exibirCestaBasica();
    // exibirSupermercados();
    // exibirPrecos();
    // calcularPrecoMedio();
    // calcularCestaBasica();
    // cestaMaisBarata();
    // precosMaxEMin();
    return 0;
}
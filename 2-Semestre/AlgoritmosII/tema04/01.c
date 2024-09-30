#include <stdio.h>

int definirArraysAuxiliares (int tamanhoPar, int tamanhoImpar, int dados[10]) {
    int dadosPar[tamanhoPar], dadosImpar[tamanhoImpar], controleX = 0, controleY = 0;


    for (int i = 0; i < 10; i++) {
        if (dados[i]%2 == 0) {
            dadosPar[controleX] = dados[i];
            controleX++;
        } else {
            dadosImpar[controleY] = dados[i];
            controleY++;
        }
    }
    printf("\nValores par:");
    exibirValores(dadosPar, tamanhoPar);

    printf("\nValores impar:");
    exibirValores(dadosImpar, tamanhoImpar);
    return 0;
}

int exibirValores (int array[], int tamanho) {
    for (int i = 0; i < tamanho; i++) {
        printf("%d, ", array[i]);
    }
}

int main (void) {
    int dados[10], contX = 0, contY = 0;

    for (int i = 0; i <10; i++) {
        int numero;
        printf("Informe um numero inteiro (%d/10):", i+1);
        scanf("%d", &numero);
        dados[i] = numero;

        if (numero%2 == 0) {
            contX++;
        } else {
            contY++;
        }
    }

    printf("Valores do array de dados:");
    exibirValores(dados, 10);

    definirArraysAuxiliares(contX, contY, dados);

    return 0;
}
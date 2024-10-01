#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(void) {

    // Inicializa a semente com o tempo atual
    srand(time(NULL));
    int numero_aleatorio;
    int vetor[200];
    int alvo = 74, numero = 0;

    for (int i = 0; i < 200; i++) {
        numero_aleatorio = rand() % 100;
        vetor[i] = numero_aleatorio;
    }

    while (alvo != vetor[numero]) {
        numero++;
    }

    if (alvo == vetor[numero]) {
        printf("O numero %d se encontra em: vetor[%d] = %d", alvo, numero, vetor[numero]);
    } else {
        printf("O numero %d não existe em vetor.", alvo);
    }
    
    


    return 0;
}
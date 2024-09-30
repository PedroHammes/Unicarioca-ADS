#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(void) {

    // Inicializa a semente com o tempo atual
    srand(time(NULL));
    int numero_aleatorio;
    
    int L = 2, C = 4;

    int X[L][C], Y[L][C], Z[L][C];

    for (int l = 0; l < L; l++) {
        for (int c = 0; c < C; c++) {

            // Gera um número aleatório entre 0 e RAND_MAX
            numero_aleatorio = rand() % 10; //número aleatório entre 0 e 9

            X[l][c] = numero_aleatorio;
            Y[l][c] = numero_aleatorio;
        }
    }

    for (int l = 0; l < L; l++) {
        for (int c = 0; c < C; c++) {
            Z[l][c] = X[l][c] + Y[l][c];
            printf("Z[%d][%d] -> %d + %d = %d\n", l, c, X[l][c], Y[l][c], Z[l][c]);
        }
    }

    for (int l = 0; l < L; l++) {
        for (int c = 0; c < C; c++) {
            printf("Z[%d][%d]: %d\n", l, c, Z[l][c]);
        }
    }

    return 0;
}
// Explicação dos detalhes: https://g.co/gemini/share/7d07bae72e81
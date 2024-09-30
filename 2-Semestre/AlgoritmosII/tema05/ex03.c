#include <stdio.h>

int main(void) {

    int M[3][4] = {{1, 2, 3, 4}, {6, 8, 1023, 12}, {15, 18, 20, 22}};
    int maior = 0, linha = 0, coluna = 0;

    for (int L = 0; L < 3; L++) {
        for (int C = 0; C < 4; C++) {

            if (M[L][C] > maior) {
                maior = M[L][C];
                linha = L;
                coluna = C;
            }

        }
    }

    printf("O maior valor da matriz eh %d, localizado na posicao(%d, %d)", maior, linha, coluna);

    return 0;
}
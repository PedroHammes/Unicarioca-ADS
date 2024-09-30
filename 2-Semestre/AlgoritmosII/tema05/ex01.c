#include <stdio.h>

int main(void) {

    int MAT[3][4] = {{2, 5, 1, 6}, {1,0,4,2}, {8,9,1,10}}, valor;

    // for (int L = 0; L < 3; L++) {
    //     for (int C = 0; C < 4; C++) {
    //         printf("Informe um valor para o indice:\n");
    //         scanf("%d", &valor);
    //         MAT[L][C] = valor;
    //     }
    // }

    for (int L = 0; L < 3; L++) {
        for (int C = 0; C < 4; C++) {
            if (MAT[L][C] % 2 == 0) {
                printf("\nMAT[%d][%d] => %d", L+1, C+1, MAT[L][C]);
            }
        }
    }

    return 0;
}
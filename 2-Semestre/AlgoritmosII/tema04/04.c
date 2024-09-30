#include <stdio.h>

int main (void) {

    int L, M, AUX;
    int VETOR[10] = {10, 8, 6, 5, 12, 1, 10, 12, 8, 5};

    L = 1;
    M = 0;
    AUX = 0;

    while (L <= 10)
    {
        if (VETOR[L] > M) {
            M = VETOR[L];
            AUX = L;
        }
        L = L+1;
    }

    printf("%d, %d\n", AUX, M);

    return 0;
}
#include <stdio.h>

int Resultado(int N) {
    if (N > 0) {
        return N * Resultado(N-1);
    } else {
        return 1;
    }
}

int main(void) {
    int N = 8;

    printf("O valor final de N (%d) eh: %d\n", N, Resultado(N));
    return 0;
}
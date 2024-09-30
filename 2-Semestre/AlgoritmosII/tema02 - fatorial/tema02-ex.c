#include <stdio.h>


// Exerciício 09:
// int f(int n) {
//     if (n == 0) {
//         return 0;
//     }
//     return 2 * f(n-1) -1;
// }

// Exercício 10:
int rr(int X, int Y) {
    if (X == Y || X == 0) {
        return 1;
    }
    return rr(X-1, Y) + rr(X-1, Y-1);
}

int main(void) {
    int N = 4;

    printf("O valor final de rr (X = %d, Y = %d) eh: %d", N, N-1, rr(N, N-1));
    return 0;
}
#include <stdio.h>

int main (void) {
    
    int X[2][2] = {{1,2}, {7,8}};
    int Y[2][2] = {{3,4}, {5,6}};
    int Z[2][2];

    for (int l = 0; l < 2; l++) {
        for (int c = 0; c < 2; c++) {
            if (X[l][c] > Y[l][c]) {
                Z[l][c] = X[l][c];
            } else {
                Z[l][c] = Y[l][c];
            }
        }
    }

    for (int l = 0; l < 2; l++) {
        for (int c = 0; c < 2; c++) {
            printf("[%d][%d] -> X(%d) ou Y(%d) -> %d\n", c, l, X[l][c], Y[l][c], Z[l][c]);
        }
    }

    
    return 0;
}
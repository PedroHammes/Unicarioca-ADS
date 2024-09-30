#include <stdio.h>

int main(void) {

    int MAT[3][4] = { {1, 0, 2, -1},
                      {4, 3, 2, 1},
                      {1, -2, 3, 4} };
    int I, J, S, T, A;

    T = 0;
    I = 1;

    while (I <= 3)
    {
        S = 0;
        J = 1;
        A = 1;

        while (J <= 4)
        {
            if (I > J)
            {
                A = -1;
            }
            S = S + A * MAT[I][J];
            J = J + 1;
        }
        
        T = T + S;
        I = I + 1;
    }
    
    printf("T = %d", T);

    return 0;
}
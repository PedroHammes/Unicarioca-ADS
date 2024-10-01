#include <stdio.h>

int main(void) {

    int vetor[9] = {10, 20, 30, 40, 50, 60, 70, 80, 90};
    int l=0, r=9, x = 80, count = 1;

    while (l <= r)    {
        int m = l + (r-l)/2;
        printf("Rodada %d\n", count);
        count++;
        //verifica se x está no meio:
        if (vetor[m] == x) {
            return printf("x (%d) esta em vetor[%d]", x, m);

            //se não está no meio verifica se x é maior do que o valor do meio
            //  neste caso ignora a metada da esquerda
        } else if (vetor[m] < x) {
            l = m + 1;
            
            //se o x é menor do que o valor do meio, ignora a metade da direita
        } else {
            r = m - 1;
        }
    }
    return printf("x (%d) não está no vetor.", x);
}
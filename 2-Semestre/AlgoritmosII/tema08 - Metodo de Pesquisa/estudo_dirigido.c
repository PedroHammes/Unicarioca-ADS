// Lendo os slides da aula decidi tentar implementar o que foi discutido.
#include <stdio.h>

int main (void) {

    int vet[10] = {11, 1, 2, 3, 4, 5, 6, 7, 8, 9};
    int n = 7, i;

    for (i = 0; i < 10; i++) {
        if (n == vet[i])
        {
            printf("n (%d) encontrado: vet[%d] = %d", n, i, vet[i]);
        } 
    }
    
    return 0;
}
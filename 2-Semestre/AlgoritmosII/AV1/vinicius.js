// OPÇÃO 1
// let A = [
//     [9, 8, 7],
//     [6, 5, 4],
//     [3, 2, 1]
// ]

// let x = 6

// for (let i=3; i>0; i--) {
//     for (let j=3; j>0; j--) {
//         if (i + j == x) {
//             console.log(A[i][j])
//         }
//     }
//     x = x-1
// }

//OPÇÃO 5
//Resposta:

// let x = []

// for (let i = 0; i < 9; i++) {
//     x[i] = (9 - i) + 1
// }

// for (let i = 0; i < 9; i++) {
//     x[i] = x[10-i]
// }

// for (let i = 0; i < 9; i++) {
//    console.log(x[i])
// }

//OPÇÃO 6
// Resposta: 6
// a = 18
// b = 12
// while (a > 0 && b > 0) {
//     if (a > b) {
//         a = a - b
//     } else {
//         b = b - a
//     }
// }
// console.log(a+b)

//Opção 8
//Resposta: 56
// let v = [5, 8, 7, 5, 11, 2, 10, 14, 8, 5]
// let x = 0
// let y = 0
// let aux = 0

// while (x <= 10) {
//     if (v[x] > y) {
//         y = v[x]
//         aux = aux + 1
//     }
//     x = x + 1
// }
// aux = aux * y
// console.log(aux)

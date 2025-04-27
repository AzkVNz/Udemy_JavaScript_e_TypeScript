//Jeito fácil
const h1 = document.querySelector('.container h1')
const data = new Date();
h1.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});

//Jeito Dificil
// const h1 = document.querySelector('.container h1')
// const data = new Date();

// function getDay(day) {
//     const days = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira'
//         , 'Quinta-Feira', 'Sexta-Feira', 'Sábado'
//     ]
//     switch (day) {
//         case 0:
//             return days[0];
//         case 1:
//             return days[1];
//         case 2:
//             return days[2];
//         case 3:
//             return days[3];
//         case 4:
//             return days[4];
//         case 5:
//             return days[5];
//         case 6:
//             return days[6];
//     }
// }

// function getMonth(month) {
//     const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio',
//         'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
//     ]

//     switch (month) {
//         case 0:
//             return months[0];
//         case 1:
//             return months[1];
//         case 2:
//             return months[2];
//         case 3:
//             return months[3];
//         case 4:
//             return months[4];
//         case 5:
//             return months[5];
//         case 6:
//             return months[6];
//         case 7:
//             return months[7];
//         case 8:
//             return months[8];
//         case 9:
//             return months[9];
//         case 10:
//             return months[10];
//         case 11:
//             return months[11];
//     }

// }

// function zeroAEsquerda(num) {
//     return num >= 10 ? num : `0${num}`;
// }

// function createDate(data) {
//     const nameDay = getDay(data.getDay());
//     const nameMonth = getMonth(data.getMonth());

//     return `${nameDay}, ${data.getDate()} de ${nameMonth} de 
//     ${data.getFullYear()}
//     as ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())} `
// }
// h1.innerHTML = createDate(data);
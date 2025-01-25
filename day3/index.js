// function multiply(a, b) {
//     return a * b;
// }

// // console.log(multiply(3, 4));

// const book = {
//     title: "OneShotJs",
//     author: "Hyobin",

//     getSummary: function () {
//         return `제목 : ${this.title}, 저자 : ${this.author}`;
//     },
// };

// console.log(book.getSummary());

function sumNumbers(a, b) {
    function addFive(number) {
        return console.log(number), (number += 5);
    }
    addFive(b);
    console.log(a + b);
}

sumNumbers(3, 7);
sumNumbers(10, 5);

// let foods = [
//     { name: "Burger", calories: 800 },
//     { name: "Apple", calories: 52 },
//     { name: "Pizza", calories: 550 },
//     { name: "Salad", calories: 150 },
// ];

// foods.map((food) => {
//     if (food.calories >= 500) {
//         console.log(food.name);
//     }
// });

function Animal(name, sound) {
    this.name = name;
    this.sound = sound;

    this.makeSound = function () {
        return `${this.name}(이)의 소리는 ${this.sound}입니다!`;
    };
}

const dog = new Animal("개", "멍멍");
console.log(dog.makeSound());

const cat = new Animal("고양이", "야옹");
console.log(cat.makeSound());

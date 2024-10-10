// Değişken tanımlama
let name = "John";
const age = 25;
var city = "Istanbul";

// Fonksiyon tanımlama
function greet() {
  console.log("Hello, world!");
}

// Fonksiyon çağırma
greet();

// Parametre alan fonksiyon
function sum(a, b) {
  return a + b;
}

let result = sum(5, 3);

// Koşullu ifadeler
if (age > 18) {
  console.log("You are an adult.");
} else {
  console.log("You are not an adult.");
}

// Döngü
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Dizi
let fruits = ["apple", "banana", "orange"];

// Dizi elemanlarına erişim
console.log(fruits[0]);

// Nesne
let person = {
  name: "Jane",
  age: 30,
  city: "Ankara"
};

// Nesneye erişim
console.log(person.name);

// Array metodu (map)
let numbers = [1, 2, 3, 4];
let squares = numbers.map(function (num) {
  return num * num;
});
console.log(squares);

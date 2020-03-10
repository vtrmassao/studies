let apples = 5;
let speed: string = '5';

let nothingMuch: null;

let truths: boolean[] = [true, true, false];

class Car {}

let cars: Car = new Car();

// Object literal

let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// Function

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//When use annotations
//Function that returns 'any' type

const json = '{"x": 10, "y": 20}';
const cortinate: { x: number; y: number } = JSON.parse(json);
console.log(cortinate);

let words = ['red', 'grenn', 'blue'];

let foundWord: boolean;

words.forEach(element => {
  if (element === 'green') {
    foundWord = true;
  }
});

// Variable whose type cannot be inferred correctly

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

numbers.forEach(nmr => {
  numberAboveZero = nmr > 0 ? nmr : numberAboveZero;
});

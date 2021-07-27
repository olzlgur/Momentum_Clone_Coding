const a = 5;
const b = 2;
let myName = "JiHyeok";


console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log("hello " + myName);

myName = "Hyeok"

console.log("your new name is " + myName);

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

daysOfWeek.push("mon");

const player = {
  name : "JiHyeok",
  points : 10,
  fat : true,
};

console.log(player.name);

function sayHello(nameOfPerson, age){
  console.log("Hello my name is " + nameOfPerson + " and I am " + age);
}

sayHello("JiHyeok", 24);

function plus(firstNumber, secondNumber){
  console.log(firstNumber + secondNumber);
}

plus(8, 60);
// Arrays

// initialize via array constructors
let numbers = new Array(1,2,3,4,5);
console.log(numbers);

let animals = ["cat","dog","tiger"];
console.log(animals);
console.log(animals[0]);
animals[3] = "tapir";
console.log(animals);

animals.push("zebra");
animals.unshift("birds")
console.log(animals);
animals.push();
console.log(animals);
console.log(Array.isArray(animals));
console.log(animals.indexOf("birds"));

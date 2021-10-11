const x = "10";
const y = 0;
// == compares only value
if (x == 10){
    console.log("x is 10");
}

// === also takes datatype into account

if (y === 10){
    console.log("y is 10");
} 
else if(y>10){
console.log("Y is greater than 10");
}
else{
   console.log("Y is less than 10"); 
}

if(x>5 || y>10){
    console.log("Yippie");
}

// ternary operator

const ter = 101;
const color = ter>10 ? "red" : "blue";
console.log(color);

// switch
const flavor = "sour";
switch (flavor){
    case "sweet":
        console.log("Flavor is sweet");
        break;

    case "sour":
        console.log("Flavor is sour");
        break;

    case "umami":
        console.log("Flavor is umami");
        break;

    case "bitter":
        console.log("Flavor is bitter");
        break;
    
}


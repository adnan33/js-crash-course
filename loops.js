const todos = [
    {
        id: 1,
        text: "fill up water",
        isCompleted: true
    },
    {
        id: 2,
        text: "fill up filter",
        isCompleted: false
    },
    {
        id: 3,
        text: "boil water",
        isCompleted: true
    }
];

// for loop

for (let i = 0;i<todos.length;i++){
    //console.log("for loop number:",todos[i].text);
}

// for of loop

for (let todo of todos) {
    console.log(todo.text);
}

// for each loop
todos.forEach(function(todo){
console.log(todo.isCompleted);
})
    
// map
const todoText = todos.map(function(todo){
return todo.text;
});
console.log(todoText);

// filter
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted == true;
}).map(function(todo){
    return todo.text;
})

console.log(todoCompleted);
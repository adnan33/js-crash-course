const person = {
    first_name: "abdul",
    last_name: "karim",
    age: 24,
    hobbies: ["cycling","movies","football"],


}

console.log(person.hobbies[2])
person.email = "abdul.karim@mail.com"
console.log(person)

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
        isCompleted: false
    }
];

console.log(todos[1].text)

const todos_json = JSON.stringify(todos)
console.log(todos_json)
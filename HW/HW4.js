const jsonString = `[
    { "id": 1, "name": "Alice", "age": 25, "email": "alice@example.com" },
    { "id": 2, "name": "Bob", "age": 30, "email": "bob@example.com" },
    { "id": 3, "name": "Charlie", "age": 29, "email": "charlie@example.com" }
  ]`;

const users = JSON.parse(jsonString);
const newUsers = users.map(({ id, name, age }) => {
    return {
        id,
        name,
        age,
    };
});

console.log(newUsers);

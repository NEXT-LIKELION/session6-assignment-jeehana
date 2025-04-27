const users = [
    { name: "Alice", age: 22 },
    { name: "Charlie", age: 17 },
    { name: "Bob", age: 18 },
];

const result = users.map(({ name, age }) => {
    const status = age >= 18 ? "성인" : "미성년자";
    return { name, age, status };
});

console.log(result);

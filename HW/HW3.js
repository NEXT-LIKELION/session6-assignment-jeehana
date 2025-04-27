const numbers = [3, 7, 2, 9, 12, 6, 15, 8, 4];

const evenNumbers = numbers.filter((num) => num % 2 === 0);

const squaredNumbers = evenNumbers.map((num) => num ** 2);

const total = squaredNumbers.reduce((acc, cur) => acc + cur, 0);

console.log("짝수만 남기기 ->", evenNumbers);
console.log("제곱 ->", squaredNumbers);
console.log("최종 합계 ->", total);

---
name: Array.from()
theme: Array
lang: js
---

# Array.from()

Метод **`Array.from()`** создаёт новый экземпляр `Array` из массивоподобного или итерируемого объекта.

---

```js
console.log(Array.from("foo"));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]
```

---

- [MDN Array.from()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
- [TC39 Array.from()](https://tc39.es/ecma262/#sec-array.from)
